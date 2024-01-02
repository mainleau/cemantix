import { Router } from 'express';

export default class RouteHandler {
    constructor(manager) {
        this.manager = manager;

        this.router = new Router();
        this.router.post('/guess', this.guess.bind(this));
    }

    guess(req, res) {
        const { word } = req.body;
        res.send(this.manager.guess(word));
    }

}