// URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

// TIP: This solution uses regular expressions

function replaceSpaces(string: string) {
  return string.trim().replace(/\s/g, '%20')
}

// --------------------
// SOLUTION 2

// TIP: This solution uses the built-in encodeURI function that converts a string into a valid URL

function replaceSpaces2(string: string) {
  return encodeURI(string.trim())
}

// --------------------
// SOLUTION 3

function replaceSpaces3(string: string) {
  return string.trim().split(' ').join('%20')
}

// --------------------
// TESTS

console.log(replaceSpaces('Mr John Smith   '))
console.log(replaceSpaces2('Mr John Smith   '))
console.log(replaceSpaces3('Mr John Smith   '))
