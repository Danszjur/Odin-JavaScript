
//Gameboard object
const GAMEBOARD = (() => {
    const cleanBoard = new Array(9).fill("");

    let board = cleanBoard;
    const getBoard = () => board;
    const setCell = (index, marker) => {
        if (index !== "") {
            board[index] = marker;
            return true;
        }
        return false;
    }
    const reset = () => {
        board = cleanBoard;
    }



    return { getBoard, setCell, reset }
})();


//Player object
function newPlayer(name, marker) {

    let score = 0;
    const getScore = () => score;
    const addScore = () => score++;

    return { name, marker, getScore, addScore }
}

//game flow object
const GameController = (() => {

    const displayBoard = () => {
        const board = GAMEBOARD.getBoard();

        console.log(`\t${board[0]}\t|\t${board[1]}\t|\t${board[2]}`);
        console.log("----------------------------");
        console.log(`\t${board[3]}\t|\t${board[4]}\t|\t${board[5]}`);
        console.log("----------------------------");
        console.log(`\t${board[6]}\t|\t${board[7]}\t|\t${board[8]}`);
    }

    const player1 = newPlayer("Dani", "X")
    const player2 = newPlayer("Jakab", "O")

    let gameover = false;

    let currentPlayer = player1;
    const switchTurns = () => {
        currentPlayer = (currentPlayer === player1) ? player2 : player1;
    }

    const playRound = (index) => {
        if (GAMEBOARD.setCell(index, currentPlayer.marker)) {
            displayBoard();
            switchTurns();
        }

    }

    const resetGame = () => {
        GAMEBOARD.reset();
        currentPlayer = player1;
        gameover = false;
        displayBoard();
    }

    return { playRound, resetGame }


})();

