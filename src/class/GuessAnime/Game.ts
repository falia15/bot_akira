import Animes from './Animes';

export default class Game {
    animes: Array<{}>;

    constructor() 
    {
        let animes = new Animes();
        this.animes = animes.get();
    }

    initTurn()
    {
        // Shuffle array
        const shuffled = this.animes.sort(() => 0.5 - Math.random());

        // Get sub-array of first n (here answers) elements after shuffled
        let animesAnswers = shuffled.slice(0, 2);

        // order answer by name
        animesAnswers.sort((a, b) => (a.title > b.title) ? 1 : -1);

        let animeToGuess = animesAnswers[Math.floor(Math.random()*animesAnswers.length)];

        let animeOpening = animeToGuess.openings;
        let openingToGuess = animeOpening[Math.floor(Math.random()*animeOpening.length)];
    }

}