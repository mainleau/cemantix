export default class WordTableComponent {
    constructor() {}

    render(guesses) {
        const component = document.createElement('table');
        component.id = 'word-table';

        const head = document.createElement('thead');

        const titles = document.createElement('tr');

        const titleText = ['N°', 'Mot', '°C', '🌡️', '🎖️', 'Progession'].map(title => {
            const text = document.createElement('th');
            text.textContent = title;

            return text;
        });

        titles.append(...titleText);

        head.append(titles);

        const body = document.createElement('tbody');

        const lines = guesses.sort((prev, curr) => curr.score - prev.score).map(guess => {
            const line = document.createElement('tr');

            const numeroText = document.createElement('td');
            numeroText.textContent = guess.numero;

            const wordText = document.createElement('td');
            wordText.textContent = guess.word;

            const degreeText = document.createElement('td');
            degreeText.textContent = guess.score;

            const reactionText = document.createElement('td');
            reactionText.textContent =
                guess.rank === -1 ? (guess.score >= 0 ? '🥶' : '🧊')
                : guess.rank === 1000 ? '🥳'
                : guess.rank === 999 ? '😱'
                : guess.rank >= 990 ? '🔥'
                : guess.rank >= 900 ? '🥵'
                : guess.rank >= 1 ? '😎'
                : '?'

            const rankText = document.createElement('td');
            rankText.textContent = guess.rank !== -1 ? guess.rank : '';

            const progressBar = document.createElement('td');

            const progressBarFiller = document.createElement('div');

            progressBar.appendChild(progressBarFiller);

            line.append(numeroText, wordText, degreeText, reactionText, rankText, progressBar);
            return line;
        });

        body.append(...lines);

        component.append(head, body);
        return component;
    }
}