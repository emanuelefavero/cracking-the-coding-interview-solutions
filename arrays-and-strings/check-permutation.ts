// Given two strings, write a method to decide if one is a permutation of the other.

function checkPermutation(str1: string, str2: string) {
  if (str1.length !== str2.length) return false

  let sorted1 = str1.split('').sort().join('')
  let sorted2 = str2.split('').sort().join('')

  return sorted1 === sorted2
}

// --------------------
// TESTS

console.log(checkPermutation('abc', 'bca')) // true
console.log(checkPermutation('abc', 'bcd')) // false
