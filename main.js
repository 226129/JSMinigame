import Minigame from "./class.js"; 

const myGame = new Minigame([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);

let option = 1; 

do {
    myGame.play(); // Starts new game

    option = prompt("Start new game (1) or exit (0): ");
} while (option != 0);
