/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let palin = 0;
    let original = x
    if (x < 0) return false;
    while (x > 0) {

        let lastDigit = x % 10;
        palin = palin * 10 + lastDigit;
        x = Math.floor(x / 10);
    }

    if (original === palin) {
        return true;
    } else {
        return false;
    }

    // return original===palin;
};