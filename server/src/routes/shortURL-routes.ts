import express from "express";
import { createURL, deleteURL, getAllURL, getURL } from "../controllers/shortURL-control";

const router = express.Router();


router.post("/shortURL", createURL);
router.get("/shortURL", getAllURL);
router.get("/shortURL/:id", getURL);
router.delete("/shortURL/:id", deleteURL);




export default router;