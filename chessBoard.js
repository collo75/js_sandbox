function createChessBoard(size) {
    let board = '';
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            board += (row % 2 === col % 2) ? ' ' : '#';
        }
        board += '\n';
    }
    return board;
}

console.log(createChessBoard(8));