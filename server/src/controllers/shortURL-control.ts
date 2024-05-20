import express from "express";
import { urlModel } from "../models/shortURL-model";


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
        res.status(500).send({ err_msg: "Something went wrong", method_name: createURL.name });

    }
};


