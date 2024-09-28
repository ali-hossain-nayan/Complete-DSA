/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let validParenthesis = "() {} []";
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        let open = stack[stack.length - 2];
        let close = stack[stack.length - 1];

        let potialParenthesis = open + close;
        if (validParenthesis.includes(potialParenthesis)) {
            stack.pop();
            stack.pop();
        }
    }
    return stack.length === 0;
};