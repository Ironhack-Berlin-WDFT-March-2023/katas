// Filter out the geese
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/solutions/javascript

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    return birds.filter(bird => !geese.includes(bird))
  }

// You can also use an if-statement
// function gooseFilter (birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

//     return birds.filter(bird => {
//         if (geese.includes(bird)) {
//             return false
//         } else {
//             return true
//         }
//     })
// }
