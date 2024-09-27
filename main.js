import Minigame from "./class.js"; 

const myGame = new Minigame([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);

myGame.play(); // Inicia el juego
