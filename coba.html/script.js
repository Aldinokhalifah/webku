// Tic Tac Toe Game with OOP

class TicTacToe {
    constructor() {
        this.board = ["", "", "", "", "", "", "", "", ""];
        this.currentPlayer = "X";
        this.winner = null;
        this.initializeGame();
    }

    initializeGame() {
        const boardElement = document.getElementById("board");
        boardElement.innerHTML = "";

        this.board.forEach((_, index) => {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.index = index;
            cell.addEventListener("click", () => this.makeMove(index));
            boardElement.appendChild(cell);
        });

        this.updateStatus();
    }

    makeMove(index) {
        if (this.board[index] === "" && !this.winner) {
            this.board[index] = this.currentPlayer;
            this.checkWinner();
            this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
            this.updateBoard();
            this.updateStatus();
        }
    }

    updateBoard() {
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell, index) => {
            cell.textContent = this.board[index];
        });
    }

    updateStatus() {
        const statusElement = document.getElementById("status");
        if (this.winner) {
            statusElement.textContent = `Player ${this.winner} wins!`;
        } else if (this.board.every(cell => cell !== "")) {
            statusElement.textContent = "It's a tie!";
        } else {
            statusElement.textContent = `Player ${this.currentPlayer}'s turn.`;
        }
    }

    checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                this.winner = this.board[a];
                return;
            }
        }
    }

    resetGame() {
        this.board = ["", "", "", "", "", "", "", "", ""];
        this.currentPlayer = "X";
        this.winner = null;
        this.initializeGame();
    }
}

// Initialize the game
const game = new TicTacToe();

document.getElementById("reset").addEventListener("click", () => game.resetGame());
