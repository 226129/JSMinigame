import Minigame from "./class.js"; // Asegúrate de que la ruta y el nombre del archivo sean correctos

const myGame = new Minigame([ // Debes pasar el arreglo al constructor
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);

myGame.play(); // Inicia el juego
