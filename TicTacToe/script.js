
//Gameboard object
const GAMEBOARD = (() => {
    const cleanBoard = new Array(9).fill("");

    let board = cleanBoard;
    const getBoard = () => board;
    const setCell = (index, marker) => {
        if (board[index] === "") {
            board[index] = marker;
            return true;
        }
        return false;
    }


    const reset = () => {
        board = [...cleanBoard];
        console.log("visszaállítva");

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
            if (GameRules.isWinning(GAMEBOARD.getBoard()) && !GameRules.isTie(GAMEBOARD.getBoard())) {
                console.log(`${currentPlayer.name} is won!`);
                resetGame();
            }
            else if (GameRules.isTie(GAMEBOARD.getBoard())) {
                console.log("It's a Tie!");
                resetGame();
            }
            switchTurns();

        }

    }

    const resetGame = () => {
        GAMEBOARD.reset();
        currentPlayer = player1;
        gameover = false;
        displayBoard();
    }

    return { playRound, resetGame, displayBoard }


})();


const GameRules = (() => {
    //  0   1   2
    //  3   4   5
    //  6   7   8
    const winningPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];
    const getWinningPatterns = () => winningPatterns;

    const isWinning = (board) => {
        for (const pattern of winningPatterns) {
            const [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[b] === board[c]) {
                return true;
            }

        }
        return false;
    }

    const isTie = (board) => {
        return board.every(cell => cell !== "") && !GameRules.isWinning(board);
    }

    return { getWinningPatterns, isWinning, isTie }

})();

const DOMManipulation = (() => {

    const displayBoard = () => {

        let mainDiv = document.createElement("div")

        mainDiv.id = "mainElement";

        for (let i = 0; i < 9; i++) {
            const element = document.createElement("div")
            element.className = "cell";
            element.textContent = "";
            element.dataset.index = i;
            element.addEventListener("click", (e) => {
                GameController.playRound(e.target.dataset.index)
            });
            mainDiv.appendChild(element);
        }

        document.body.appendChild(mainDiv)
    }



    return { displayBoard }

})();

DOMManipulation.displayBoard()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
