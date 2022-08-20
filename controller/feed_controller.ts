import { Request, Response } from 'express';
import nodeFetch, { RequestInfo, RequestInit } from "node-fetch";

import { handle_error } from '../helpers/handle_error';

const fetch = (url: RequestInfo, init?: RequestInit) =>  import("node-fetch").then(({ default: fetch }) => nodeFetch(url, init));

export const get_public_feed = async (req: Request, res: Response) => {

    try {
        const response = await fetch('https://www.flickr.com/services/feeds/photos_public.gne?format=json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    
        const jsonFlickrFeed = await response.text();
    
        res.send(JSON.parse(jsonFlickrFeed.slice(15, jsonFlickrFeed.length - 1)));

    } catch(error) {
        handle_error(error, res);
    }
}