// URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

// TIP: This solution uses regular expressions

// O(n) time | O(n) space
function replaceSpaces(string: string): string {
  return string.trim().replace(/\s/g, '%20')
}

// --------------------
// SOLUTION 2

// TIP: This solution uses the built-in encodeURI function that converts a string into a valid URL

function replaceSpaces2(string: string): string {
  return encodeURI(string.trim())
}

// --------------------
// SOLUTION 3

function replaceSpaces3(string: string): string {
  return string.trim().split(' ').join('%20')
}

// --------------------
// SOLUTION 4

// TIP: This solution uses a for loop to iterate over the string and replace spaces with '%20' in place

function replaceSpaces4(string: string): string {
  string = string.trim()

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      string = string.slice(0, i) + '%20' + string.slice(i + 1)
    }
  }

  return string
}

// --------------------
// SOLUTION 5

// TIP: This solution uses a for loop to iterate over the string and replace spaces with '%20' without modifying the original string

function replaceSpaces5(
  string: string,
  trueLength = string.trim().length
): string {
  let result = ''

  // Remove starting spaces
  let start = 0
  while (string[start] === ' ') {
    start++
  }

  // Replace spaces with '%20' up until the true length (excluding trailing spaces)
  for (let i = start; i < trueLength + start; i++) {
    if (string[i] === ' ') {
      result += '%20'
    } else {
      result += string[i]
    }
  }

  return result
}

// --------------------
// TESTS

console.log(replaceSpaces('Mr John Smith   '))
console.log(replaceSpaces2('Mr John Smith   '))
console.log(replaceSpaces3('Mr John Smith   '))
console.log(replaceSpaces4('Mr John Smith   '))
console.log(replaceSpaces5('Mr John Smith   '))
