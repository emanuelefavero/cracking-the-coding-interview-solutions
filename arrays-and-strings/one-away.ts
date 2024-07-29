// One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

// O(n) time | O(1) space
function oneEditAway(first: string, second: string): boolean {
  if (first.length === second.length) {
    return oneEditReplace(first, second)
  } else if (first.length + 1 === second.length) {
    return oneEditInsert(first, second)
  } else if (first.length - 1 === second.length) {
    return oneEditInsert(second, first)
  }

  return false
}

function oneEditReplace(first: string, second: string): boolean {
  let foundDifference: boolean = false

  // Compare each character. If more than one difference is found, return false
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      if (foundDifference) return false
      foundDifference = true
    }
  }

  return true
}

function oneEditInsert(first: string, second: string): boolean {
  let index1 = 0
  let index2 = 0

  // Iterate over both strings until we reach the end of either one
  while (index1 < first.length && index2 < second.length) {
    // If the characters at the current indices do not match...
    if (first[index1] !== second[index2]) {
      // ...and also the indices are different, we have found more than one difference, so return false
      if (index1 !== index2) return false

      // Otherwise, increment the index of the longer string (the one passed as the second argument) so that we can compare the next characters
      index2++
    } else {
      // If the characters match, proceed to the next characters in both strings
      index1++
      index2++
    }
  }

  return true
}

// --------------------
// TESTS

console.log(oneEditAway('pale', 'ple')) // true
console.log(oneEditAway('pales', 'pale')) // true
console.log(oneEditAway('pale', 'bale')) // true
console.log(oneEditAway('pale', 'bake')) // false
