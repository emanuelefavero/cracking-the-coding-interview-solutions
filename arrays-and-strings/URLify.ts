// URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

function replaceSpaces(string: string) {
  string = string.trim()
  string = string.replace(/\s/g, '%20')
  return string
}

// --------------------
// TESTS

console.log(replaceSpaces('Mr John Smith   '))
