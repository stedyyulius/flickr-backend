import express, { Request, Response } from "express";
import cors from 'cors';

import feed_router from './routes/feed_routes';

const app = express();

app.use(cors());

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.get('/api', (req: Request, res: Response) => res.send('connected succesfully'));

app.use('/api/feed', feed_router);

const server = app.listen(process.env.PORT || 3001, () => {
    console.log(`server listen to ${process.env.PORT || 3001}`)
});

export default server;
