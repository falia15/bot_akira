import { Animes, AnimeInterface} from './Animes';

export default class Game {
    answers: Array<string>;
    openingToGuess: string | null;
    animes: AnimeInterface[];

    constructor() 
    {
        let animes = new Animes();
        this.animes = animes.get();
        this.answers = [];
        this.openingToGuess = null;
    }

    initTurn()
    {
        // Shuffle array
        const shuffled = this.animes.sort(() => 0.5 - Math.random());

        // Get sub-array of first n (here answers) elements after shuffled
        let answers = shuffled.slice(0, 2);

        // order answer by name
        answers.sort((a, b) => (a.title > b.title) ? 1 : -1);
        let mappedAnswer = answers.map((item) => (item.title));

        let animeToGuess = answers[Math.floor(Math.random()*answers.length)];
        let animeOpening = animeToGuess.openings;
        let openingToGuess = animeOpening[Math.floor(Math.random()*animeOpening.length)];

        this.answers = mappedAnswer;
        this.openingToGuess = openingToGuess;
    }

    getOpeningToGuess()
    {
        return this.openingToGuess;
    }

    getAnswers()
    {
        return this.answers;
    }

}