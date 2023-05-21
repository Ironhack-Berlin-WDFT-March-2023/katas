/*
https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript
DESCRIPTION:
Your task is to sum the differences between consecutive pairs in the array in descending order.
Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]
Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/

function sumOfDifferences(arr) {
	let result = 0
	const sorted = arr.sort(function (a, b) {
		return b - a
	})
	for (let i = 0; i < sorted.length - 1; i++) {
		result += sorted[i] - sorted[i + 1]
	}
	return result
}

function sumOfDifferences(arr) {
	// sort the array using sort() descending
	let result = 0
	const sorted = arr.sort(function (a, b) {
		return b - a
	})
	let highest = sorted[0]
	let lowest = sorted[sorted.length - 1]
	return highest - lowest
}

// get highest and lowest number from the array using Math.max() and Math.min()
function sumOfDifferences(arr) {
	// here we have to use the spread operator bc Math.min() and Math.max() 
	// will not accept an array
	return Math.max(...arr) - Math.min(...arr)
}