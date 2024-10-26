/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let left = 0;
    let right = m * n - 1;


    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        let row = Math.floor(middle / n);
        let col = middle % n;

        let middleValue = matrix[row][col];
        if (middleValue === target) {
            return true;
        }
        if (middleValue < target) {
            left = middle + 1;
        }
        if(middleValue>target) {
            right = middle - 1;
        }
    }
    return false;
};