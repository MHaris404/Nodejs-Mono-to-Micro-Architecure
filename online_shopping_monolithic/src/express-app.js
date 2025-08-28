import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { json, urlencoded } from 'express';
import expressStatic from 'express';
import cors from 'cors';
import { customer, products, shopping } from './api/index.js';
import HandleErrors from './utils/error-handler.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default async (app) => {

    app.use(json({ limit: '1mb' }));
    app.use(urlencoded({ extended: true, limit: '1mb' }));
    app.use(expressStatic.static(__dirname + '/public'))
    app.use(cors())

    //api
    customer(app);
    products(app);
    shopping(app);

    // error handling
    app.use(HandleErrors);

}