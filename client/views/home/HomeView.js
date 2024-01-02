import View from '../../core/View.js';
import WordTableComponent from './components/WordTableComponent.js';

class HomeView extends View {
    constructor() {
        super();
    }

    render(app) {
        var wordTable = null;

        const view = document.createElement('div');
        view.id = 'home';

        const box = document.createElement('div');
        box.id = 'box';

        const guessBox = document.createElement('div');
        guessBox.id = 'guess-box'

        const wordInput = document.createElement('input');
        wordInput.id = 'word-input'

        const guessButton = document.createElement('div');
        guessButton.id = 'guess-button'
        guessButton.onclick = async () => {
            const guess = await app.api.guess(wordInput.value);
            wordInput.value = '';
            if(!app.guesses.find(g => g.word === guess.word)) app.guesses.push({
                word: guess.word,
                score: guess.score,
                rank: guess.rank,
                numero: app.guesses.length + 1
            });
            let newWordTable = wordTableComponent.render(app.guesses);
            wordTable.replaceWith(newWordTable);
            wordTable = newWordTable;
            if(guess.rank !== -1) {
                const barFiller = wordTable.lastChild.firstChild.lastChild.firstChild
                barFiller.style.width = '1%';
                barFiller.style.backgroundImage = `linear-gradient(to right, yellow, rgb(255, ${255 - (guess.rank / 4)}, 0))`;
                const interval = setInterval(() => {
                    if(parseInt(barFiller.style.width) + 1 >= guess.score) clearInterval(interval);
                    barFiller.style.width = parseInt(barFiller.style.width) + 1 + '%'
                }, 10);
            }
        }

        const guessButtonText = document.createElement('span');
        guessButtonText.textContent = 'Soumettre';

        guessButton.appendChild(guessButtonText);

        guessBox.append(wordInput, guessButton);

        const wordTableComponent = new WordTableComponent();
        wordTable = wordTableComponent.render(app.guesses);

        box.append(guessBox, wordTable);

        view.appendChild(box);

        return view;
    }
}

export default new HomeView();
