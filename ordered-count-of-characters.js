/*
https://www.codewars.com/kata/57a6633153ba33189e000074/
DESCRIPTION:
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.
Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

function orderedCount(text) {
	const textArray = text.split("")

	const noDuplicates = textArray.filter(function (char, i) {
		return array.indexOf(char) === i
	})
	// Also possible:
	// const noDuplicates = [...new Set(array)]

	const result = noDuplicates.map(function (char) {
		return [char, text.split(char).length - 1]
	})
	
	return result
}

// Another solution with a Map
// You cannot use an object because the order of the elements matters
const orderedCount = function (text) {
  const charactersAmount = new Map()
  
  text.split("").forEach(character => {
    if (charactersAmount.has(character)) {
      charactersAmount.set(character, charactersAmount.get(character) + 1)
    } else {
      charactersAmount.set(character, 1)
    }
  })
  
  return Array.from(charactersAmount)
}

// The Map-solution in one line ;)
const orderedCount = s =>
  Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));
