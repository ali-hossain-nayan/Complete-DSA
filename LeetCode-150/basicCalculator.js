



/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let stack = [];
    let sign = 1;
    let num = 0;
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        let cha = s[i];
        if (cha >= '0' && cha <= '9') {
            num = num * 10 + parseInt(cha)
        }
        else if (cha === '+') {
            res += num * sign;
            num = 0;
            sign = 1;

        }
        else if (cha === '-') {
            res += num * sign;
            num = 0;
            sign = -1;

        }
        else if (cha === '(') {
            stack.push(res);
            stack.push(sign);
            res = 0;
            sign = 1;
        }
        else if (cha === ')') {
            res += num * sign;
            num = 0;
            res *= stack.pop();
            res += stack.pop();
        }

    }
    res += num * sign;
    return res;
};