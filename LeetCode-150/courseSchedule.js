/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {

    //make an adjacency list to represent the graph or say create a graph
    //and initialize with empty array
    const graph = Array.from({ length: numCourses }, () => []);


    //traverse the prerequisites and push curse that are prerequistes and makes 
    for (let [course, prereq] of prerequisites) {
        graph[prereq].push(course);
    }

    //array to track the state of each course
    //unvisited=0, visiting=1, visited = 2
    const visited = new Array(numCourses).fill(0);

    const traverse = (course) => {
        if (visited[course] == 1) {
            return false;
        }
        if (visited[course] === 2) {
            return true;
        }
        //mark the curse 
        visited[course] = 1


        //visit all the courses that depend on this course
        for (let nextCourse of graph[course]) {
            if (!traverse(nextCourse)) {
                return false;
            }
        }
        visited[course] = 2;
        return true;


    }
    for (let i = 0; i < numCourses; i++) {
        if (!traverse(i)) {
            return false;
        }
    }

    return true;



};