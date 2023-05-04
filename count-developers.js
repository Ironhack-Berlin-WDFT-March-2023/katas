// ************************************************************************************
// https://www.codewars.com/kata/582746fa14b3892727000c4f/javascript

// You will be given an array of objects (hashes in ruby) representing data about
// developers who have signed up to attend the coding meetup that you are organizing
// for the first time.
// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list, your function should return number 1:

// var list1 = [
// { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
// { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
// { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
// { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ]
// ************************************************************************************

// solution 1:

function countDevelopers(list) {
  let count = 0

  for (let i = 0; i < list.length; i++) {
    if (list[i].continent === "Europe" && list[i].language === "JavaScript") {
      count++
    }
  }

  return count
}

// solution 2:

const countDevelopers = list => list.filter(dev => dev.continent == "Europe" && dev.language == "JavaScript").length
