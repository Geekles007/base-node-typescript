import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req: Request, res: Response) => {
    res.send(/*html*/`<h1>Hello guys! here is your basic server ready to serve. :)</h1>`);
});

app.listen(PORT, () => console.log("Everything works fine on port " + PORT))
