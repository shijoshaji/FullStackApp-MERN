import express from "express";
import { createURL, deleteURL, getAllURL, getURLByShortURLValue } from "../controllers/shortURL-control";

const router = express.Router();


router.post("/shortURL", createURL);
router.get("/shortURL", getAllURL);
router.get("/shortURL/:id", getURLByShortURLValue);
router.delete("/shortURL/:id", deleteURL);




export default router;