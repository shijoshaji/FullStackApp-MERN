import express from "express";
import { urlModel } from "../models/shortURL-model";


export const createURL = async (req: express.Request, res: express.Response) => {
    console.log("inside createURL");
};

export const getAllURL = async (req: express.Request, res: express.Response) => {
    console.log("inside getAllURL");
};

export const getURL = async (req: express.Request, res: express.Response) => {
    console.log("inside getURL");
};

export const deleteURL = async (req: express.Request, res: express.Response) => {
    console.log("inside deleteURL");
};
