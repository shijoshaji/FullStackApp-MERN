import express from "express";
import { urlModel } from "../models/shortURL-model";
import { Response } from 'express';


/**
 * Sends a 500 status response with an error message and the name of the method that triggered the error.
 * 
 * This function is used to send a 500 status response with a custom error message and the name of the method that caused the error.
 * 
 * @param {Response} res - The response object to send the error response.
 * @param {String} func - The name of the method where the error occurred.
 * @returns {Response} - The response object with the 500 status and error message.
 */
function server500(res: Response, func: String) {
    return res.status(500).send({ err_msg: "Something went wrongX", method_name: func });
}


/**
 * Creates a new URL document based on the provided full URL and sends the appropriate response.
 * 
 * This function attempts to create a new URL document using the full URL provided in the request body. 
 * It first checks if a URL with the same full URL already exists. 
 * If found, it sends a 409 status response with the existing URL. 
 * If not found, it creates a new URL document, saves it, and sends a 201 status response with the created URL.
 * 
 * @param {express.Request} req - The request object containing the full URL in the body.
 * @param {express.Response} res - The response object to send the result of the creation operation.
 * @returns {Promise<void>} - A Promise that resolves once the creation process is complete.
 */
export const createURL = async (req: express.Request, res: express.Response) => {
    console.log("inside:", createURL.name);
    try {
        let { fullURL } = req.body;
        const urlFound = await urlModel.find({ fullURL: fullURL });
        if (urlFound.length > 0) {
            res.status(409).send({ "URL found": urlFound });
        } else {
            const shortURL = await urlModel.create({ fullURL });
            res.status(201).send(shortURL);
        }

    } catch (error) {
        console.log(error);
        server500(res, createURL.name);
        // res.status(500).send({ err_msg: "Something went wrong", method_name: createURL.name });

    }
};

/**
 * Retrieves all URL documents and sends them as a response.
 * 
 * This function fetches all URL documents from the database and sends them as a response.
 * If no documents are found, it sends a 404 status response with an appropriate error message. 
 * If documents are found, it sends a 200 status response with the array of URLs.
 * 
 * @param {express.Request} req - The request object.
 * @param {express.Response} res - The response object to send the list of URLs or error response.
 * @returns {Promise<void>} - A Promise that resolves once the retrieval and response sending process is complete.
 */
export const getAllURL = async (req: express.Request, res: express.Response) => {
    console.log("inside:", getAllURL.name);


    try {
        const allURL = await urlModel.find();
        if (allURL.length <= 0) {
            res.status(404).send({ err_msg: "ShortURL's not Found" });
        } else {
            res.status(200).send(allURL);
        }

    } catch (error) {
        console.log(error);
        server500(res, getAllURL.name);
        // res.status(500).send({ err_msg: "Something went wrong", method_name: getAllURL.name });
    }
};

/**
 * Retrieves a URL document based on the provided short URL value and handles redirection.
 * 
 * This function attempts to find a URL document using the short URL value provided in the request parameters. 
 * If the document is found, it increments the click count, saves the document, and redirects the user to the full URL. 
 * If the document is not found, it sends a 404 status response with an error message and the method name.
 * 
 * @param {express.Request} req - The request object containing the short URL value.
 * @param {express.Response} res - The response object to handle the redirection or error response.
 * @returns {Promise<void>} - A Promise that resolves once the redirection or error handling is complete.
 */
export const getURLByShortURLValue = async (req: express.Request, res: express.Response) => {
    console.log("inside:", getURLByShortURLValue.name);

    try {
        const shortURL = await urlModel.findOne({ shortURL: req.params.id });
        if (!shortURL) {
            res.status(404).send({ err_msg: "ID/URL Not found", method_name: getURLByShortURLValue.name });
        } else {
            shortURL.clicks++;
            shortURL.save();
            res.redirect(`${shortURL.fullURL}`);
        }

    } catch (error) {
        console.log(error);
        server500(res, getURLByShortURLValue.name);
        // res.status(500).send({ err_msg: "Something went wrong", method_name: getURLByShortURLValue.name });
    }
};

/**
 * Deletes a URL document based on the provided ID and sends appropriate response messages.
 * 
 * This function attempts to delete a URL document using the ID provided in the request parameters. 
 * It then sends a response indicating the success or failure of the deletion operation along with the method name.
 * 
 * @param {express.Request} req - The request object containing the ID of the URL to delete.
 * @param {express.Response} res - The response object to send the result of the deletion operation.
 * @returns {Promise<void>} - A Promise that resolves once the deletion process is complete.
 */
export const deleteURL = async (req: express.Request, res: express.Response) => {
    console.log("inside:", deleteURL.name);

    try {

        const shortURL = await urlModel.findByIdAndDelete({ _id: req.params.id });
        if (!shortURL) {
            res.status(404).send({ err_msg: "ID/URL Not found", method_name: deleteURL.name });
        } else {
            res.status(200).send({ err_msg: "URL deleted", method_name: deleteURL.name });
        }

    } catch (error) {
        console.log(error);
        server500(res, deleteURL.name);
        // res.status(500).send({ err_msg: "Something went wrong", method_name: deleteURL.name });
    }
};
