import RequestManager from './core/RequestManager.js';
import HomeView from './views/home/HomeView.js';

class Application {
    constructor() {
        this.api = new RequestManager();
        this.guesses = [];
        this.start();
    }

    switch(view) {
        const element = view.render(this);
        document.body.replaceChildren(element);
    }

    start() {
        this.switch(HomeView);
    }
}

document.body.onload = () => {
    new Application();
}
