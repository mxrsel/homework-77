import express from "express";
import reviewRouter from "./routers/review";
import cors from 'cors'
import config from "./config";
import database from "./database";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors(config.corsOptions));
app.use(express.static('public'));
app.use('/review', reviewRouter);


    app.listen(port, () => {
        console.log("Listening on port " + port);
    })


