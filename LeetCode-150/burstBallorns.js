/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    if (points.length === 0) {
        return 0;
    }

    let start = 0, end = 1;
    //sorting as we need to check overlap 
    let sortingPoints = points.sort((a, b) => a[end] - b[end]);

    let initialArrows = 1;//as at least one arrow needed
    let currentBallonsEnding = points[start][end];//current ballons position
    for (let i = 1; i < sortingPoints.length; i++) {
        //if the current ballon starts after the currentBallonsEnding
        if (points[i][start] > currentBallonsEnding) {
            initialArrows++;
            currentBallonsEnding = points[i][end];//update the arrow position to the end of the current ballon position

        }
    }
    return initialArrows;























};