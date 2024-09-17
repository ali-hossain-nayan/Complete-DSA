// 1.Create an array with 5 students names, after that create a function which takes two parameters(allStudents,studentnName)and
//  iterate over the allStudents and find specific studentName


//Linear O(n)
const allStudents = ['harry', "Jim", "Kane", "Tomas"];

const findStudent = (allStudents, studentName) => {
    for (let i = 0; i < allStudents.length; i++) {
        if (allStudents[i] === studentName) {
            console.log(`Find ${studentName}`);
        }
    }

    //above for loop take n time & below will take n time
    //so total T(n)=n+n=2n but we always avoid the constant so time complexiety will be only T(n)
    for (let j = 0; j < allStudents.length; j++) {
        if (allStudents[j] === studentName) {
            console.log(`Find ${studentName} 2`);
        }
    }
}
// findStudent(allStudents, "Kane")


// O(1)->take constant time , constant regardless of the input size
//Like you have box of items and exactly know where the each item is located. you go directly and take it .its the concept here
const num = [1, 2, 3, 4, 5];
const getNum = (arr, index) => arr[index];
//directly access the 0 index item & dont care about the size
// console.log(getNum(num, 0));


//O(n^2) here execution time grows quadratically with the size of the input data represented by n
const findPairs = (n) => {
    for (let i = 0; i < n.length; i++) {//n
        for (let j = i + 1; j < n.length; j++) {//n
            console.log(`Pair: ${n[i]},${n[j]}`)
        }
    }//Till here we get O(n^2)

    for (let i = 0; i < n.length; i++) {//here O(n)
        console.log(".........", i)
    }
    //O(n^2+n)n^2 is dominant term and n is non-dominant term so we take dominant always

}
//T=n*n=n^2 A loop inside a loop
//O(n^2)
// findPairs(num);


//O(log n) time complexiety refers to an algorithm runtime grows logarithmically with the size of the input
// whole input size increases algorithm run increases slowly with compare to
//log2 8=?
// 2 to the what power equals 8? log2 8=3
// like list divided rules and check is number in there?


//Arrays
const stringArr = ['a', 'b', 'c']; 
const numArr = [1, 2, 3, 4];
const boolArr = [true, false];
const mixArr = ["a", 2, false, undefined, null, { a: "a" }, ["b"]]
// console.log(mixArr)
//custom array
class MyArr {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    get(index) {
        return this.data[index]
    }
    pop() {
        delete this.data[this.length - 1]
        const lastItem = this.data[this.length - 1];
        // console.log("............",lastItem);
        this.length--;
        return lastItem;

    }
    shift() {
        let firstItem = this.data[0];
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return firstItem;
    }


    deleteByIndex(index) {
        const item = this.data[index];
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }
}
const myNewArr = new MyArr()//create new array
// console.log(myNewArr)
myNewArr.push("apple");
myNewArr.push("orange");
myNewArr.push("mango");
// myNewArr.pop()
console.log(myNewArr)
// myNewArr.shift()//delete in first of array
console.log(myNewArr)
// console.log("shifted item",myNewArr.shift())

// console.log(myNewArr.get(0))

console.log(myNewArr)
myNewArr.deleteByIndex(0)
console.log("Deleted Index", myNewArr.deleteByIndex(0))
console.log(myNewArr)


