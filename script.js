document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    let currentPlayer = "X";
    let board = Array(9).fill(null);

    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            const index = cell.dataset.index;
            if (board[index] === null) {
                board[index] = currentPlayer;
                cell.textContent = currentPlayer;
                if (checkWin(currentPlayer)) {
                    alert(`${currentPlayer} wins!`);
                    resetGame();
                } else if (board.every(cell => cell !== null)) {
                    alert("It's a draw!");
                    resetGame();
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });
    });

    function checkWin(player) {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        return winPatterns.some(pattern => 
            pattern.every(index => board[index] === player)
        );
    }

    function resetGame() {
        board.fill(null);
        cells.forEach(cell => {
            cell.textContent = "";
        });
        currentPlayer = "X";
    }
});

