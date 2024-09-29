/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = []
    let operators = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => Math.trunc(a / b)
    }


    for (let i of tokens) {
        if (operators[i]) {
            let num2 = stack.pop()
            let num1 = stack.pop()

            stack.push(operators[i](num1, num2))
        } else {
            stack.push(parseInt(i))
        }
    }
    return stack.pop();
};