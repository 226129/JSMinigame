import promptSync from 'prompt-sync'; // Importar prompt-sync
const prompt = promptSync({ sigint: true }); // Inicializar prompt-sync

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Minigame {
    constructor(field) {
        this._field = field;
        this.gameOver = false;
    }

    get field() {
        return this._field;
    }

    print() {
        console.log(this._field.map(row => row.join(' ')).join('\n'));
    }

    play() {
        while (!this.gameOver) {
            this.print();
            const move = prompt('Which direction you want to move? (R-L-U-D): ').toUpperCase();
            this.movement(move);
        }
    }

    movement(direction) {
        let position = this.index();
        if (!position) return; // Position not found

        let newPosition = [...position]; // This method is used to copy something as it is declared.
        switch (direction) {
            case 'R':
                newPosition[1]++;
                break;
            case 'L':
                newPosition[1]--;
                break;
            case 'U':
                newPosition[0]--;
                break;
            case 'D':
                newPosition[0]++;
                break;
            default:
                console.log('Invalid direction! Please use R, L, U, or D.');
                return;
        }

        // Verify that the position is valid
        if (this.isOutOfBounds(newPosition)) {
            console.log("Sorry, you went out of bounds. Game Over!");
            this.gameOver = true;
            return;
        }

        const nextCell = this._field[newPosition[0]][newPosition[1]];
        if (nextCell === hole) {
            console.log("Sorry, you fell in a hole. Game Over!");
            this.gameOver = true;
            return;
        }

        if (nextCell === hat) {
            console.log("Congratulations, you found the hat!");
            this._field[newPosition[0]][newPosition[1]] = pathCharacter;
            this.gameOver = true;
            return;
        }

        this._field[position[0]][position[1]] = fieldCharacter; // Fill the previous position with the empty path
        this._field[newPosition[0]][newPosition[1]] = pathCharacter; // Fill the new position with the asterisk that is for the player
    }

    isOutOfBounds(position) {
        /* Verifies that the position is inside of the table */
        return position[0] < 0 || position[0] >= this._field.length ||
            position[1] < 0 || position[1] >= this._field[0].length;
    }

    index() {
        /* Returns the actual index for the player which is the asterisk * */
        for (let i = 0; i < this._field.length; i++) {
            for (let j = 0; j < this._field[i].length; j++) {
                if (this._field[i][j] === pathCharacter) {
                    return [i, j];
                }
            }
        }
        return null; // If not found
    }
}


export default Minigame; 
