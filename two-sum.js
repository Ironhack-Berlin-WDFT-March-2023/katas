/*
https://www.codewars.com/kata/52c31f8e6605bcc646000082

Write a function that takes an array of numbers (integers for the tests) and a target number.
It should find two different items in the array that, when added together, give the target value.
The indices of these items should then be returned in a tuple like so: (index1, index2).
For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
The input will always be valid (numbers will be an array of length 2 or greater,
and all of the items will be numbers; target will always be the sum of two different items from that array).
Based on: http://oj.leetcode.com/problems/two-sum/
twoSum [1, 2, 3] 4 === (0, 2)
*/

// Two for loops
function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j]
        }
    }
}

// More efficient: Use only one loop and create a lookup object
function twoSum(numbers, target) {
    let numIndices = {}

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]
        const difference = target - number

        if (numIndices[difference] !== undefined) {
            return [numIndices[difference], i]
        }
        numIndices[number] = i
    }
}
