const reverseString = (string) => {
    const conArray = string.split("");
    const reverseArr = conArray.reverse();
    return reverseArr.join("");
}
// console.log(reverseString("hello"))


const palindrome = (str) => {
    const conArr = str.split("")
    const reverseArr = conArr.reverse();
    const conString = reverseArr.join("")
    if (str === conString) {
        return true;
    } else {
        return false;
    }
}
const palindromAlt = (str) => str.split("").reverse().join("") === str;
// console.log(palindrome("abba"))
// console.log(palindrome("hello"))



const reverseInt = (num) => {
    const reversed = num.toString().split("").reverse().join("");
    return parseInt(reversed) * Math.abs(Math.sign(num))
}
// console.log(reverseInt(-4567))



const capitalize = (str) => {
    return str.toLowerCase().split(" ").
        map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")
}
// console.log(capitalize("fuck god"))


//FizzBuzz
const FizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        }
        else if (i % 3 === 0) {
            console.log("Fizz")
        }
        else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}
// FizzBuzz(20)


//MaxProfit
//Imagine you re buying and selling stocks throughout the year. Your is to find the biggest profit you could make by buying low and selling high only once.
//give A list of stock prices for each day->[7,1,5,3,6,4]
//You need to find the differenc between the cheapest price you could have bought the stock and the most expensive price you could have sold it later on.


const MaxProfit = (prices) => {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            const potentialProfit = prices[i] - minPrice;
            maxProfit = Math.max(maxProfit, potentialProfit);
        }
    }
    return maxProfit;

}

const prices = [7, 1, 5, 3, 6, 4];
// console.log(MaxProfit(prices));

//Another Approach

const MaxLav = (stocks) => {
    let minPrice = stocks[0];
    let maxLav = 0;
    for (let i = 0; i < stocks.length; i++) {
        let currentPrice = stocks[i];


        //update min price
        minPrice = Math.min(minPrice, currentPrice);

        //potential lav
        const potentialLav = currentPrice - minPrice;

        maxLav = Math.max(maxLav, potentialLav);
    }
    return maxLav;
}
const stocks = [7, 1, 5, 3, 6, 4];
// console.log(MaxLav(stocks))






//Array Chunk
//write a function that takes an array and a chunk size as input. The function should return a new array where the original array is split into chunks of the specified size.
//Algorithm
//1. create an empty array to hold the chunks
//2.set a starting index to keep track of where we are in the original array
// 3.loop through the original array as long as the index hasnt reached the end 
// 4.extract a chunk of the desired size from the original array 
// 5.add the extracted chunk to the chunk Array 
// 6.move the index forward by the chunk size to get to the next chunk 
// 7.return the final chunks 

const ChunkArray = (arr, size) => {
    let chunkArr = [];
    let index = 0;
    while (index < arr.length) {
        let chunk = arr.slice(index, index + size);//creating chunk with the starting index to given size
        chunkArr.push(chunk);
        index += size;

    }
    return chunkArr;
}

// console.log(ChunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3))







//Imagine you have a list of numbers and a target number .your job is to find two numbers in that list that add up to the target number. you will have to return those position

const twoSum = (list, target) => {
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] + list[j] === target) {
                return [i, j];
            }
        }
    }
    return []
}

// console.log(twoSum([2, 7, 11, 15], 9))
// console.log(twoSum([2, 7, 11, 9], 11))





