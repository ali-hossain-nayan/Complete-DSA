/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    if (strs.length === 0) {
        return [];
    }

    let groupAnagram = {};
    for (let i = 0; i < strs.length; i++) {
        let sortedAnagram = strs[i].split("").sort().join("");
        if (!groupAnagram.hasOwnProperty(sortedAnagram)) {
            groupAnagram[sortedAnagram] = [];//crate key with empty values
        }
        groupAnagram[sortedAnagram].push(strs[i]);//push values of original string

    }
    return Object.values(groupAnagram);

};