/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (!grid || grid.length === 0) return 0;
    let countLands = 0;


    const visitNeighbour = (grid, row, col) => {
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === '0') {
            return;
        }

        grid[row][col] = '0';

        visitNeighbour(grid, row + 1, col)//down
        visitNeighbour(grid, row - 1, col)//up
        visitNeighbour(grid, row, col + 1)//right
        visitNeighbour(grid, row, col - 1)//left
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === '1') {
                countLands++;
                visitNeighbour(grid, row, col);
            }
        }
    }
    return countLands;
};