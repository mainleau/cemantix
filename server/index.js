import Vectors from 'word2vec';
import WordManager from './WordManager.js';
import RouteHandler from './RouteHandler.js';
import express from 'express';
import cors from 'cors';

const model = await new Promise((resolve, reject) => {
    Vectors.loadModel( './data/vectors.txt', function(error, model) {
        if(error) reject(error);
        resolve(model);
    });
});

const manager = new WordManager(model);

const routes = new RouteHandler(manager); 

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes.router);

app.listen(3000);