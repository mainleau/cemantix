export default class WordManager {
    constructor(model) {
        this.model = model;
        this.wordOfTheDay = 'botaniste'
        this.wordsOfTheDay = this.model.mostSimilar(this.wordOfTheDay, 1000);
    }

    guess(word) {
        const score = (this.model.similarity(this.wordOfTheDay, word) * 100).toFixed(2);
        var rank = this.wordsOfTheDay.findIndex(o => o.word === word);
        if(rank !== -1) rank = 1000 - rank;
        if(score === "100.00") rank = 1000;


        return {
            word,
            score,
            rank
        };
    }
}

/*

{
  getVector: [Function (anonymous)],
  getVectors: [Function (anonymous)],
  similarity: [Function: similarity],
  getNearestWord: [Function: getNearestWord],
  getNearestWords: [Function: getNearestWords],
  mostSimilar: [Function: mostSimilar],
  analogy: [Function: analogy],
  words: '39392',
  size: '700'
}

*/