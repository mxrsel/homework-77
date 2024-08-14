import express from "express";
import {MessageMutation} from "../types";
import {imagesUpload} from "../multer";
import database from "../database";

const reviewRouter = express.Router();

reviewRouter.get('/', async (req, res) => {
    const reviews = await database.getReview();
    return res.send(reviews);
});

reviewRouter.get('/:id', async (req, res) => {
    const reviews = await database.getReview();
    const review = reviews.find(p => p.id === req.params.id);
    return res.send(review);
});

reviewRouter.post ('/', imagesUpload.single('image'),  async (req, res) => {
    if(!req.body.message) {
        return res.status(400).send({error: 'Field Message is required!'});
    }

    const review: MessageMutation = {
        author: req.body.author,
        message: req.body.message,
        image: req.file ? req.file.filename : null,
    };

    const savedReview = await database.addReview(review);
    return res.send(savedReview);
});

export default reviewRouter