// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

// O(n) time | O(n) space
function isPermutationOfPalindrome(phrase: string): boolean {
  const map = new Map()

  for (const char of phrase.toLowerCase()) {
    if (char >= 'a' && char <= 'z') {
      map.set(char, (map.get(char) || 0) + 1)
    }
  }

  let oddCount = 0
  for (const count of map.values()) {
    if (count % 2 !== 0) oddCount++
    if (oddCount > 1) return false
  }

  return true
}

// --------------------
// TESTS

console.log(isPermutationOfPalindrome('Tact Coa')) // true
console.log(isPermutationOfPalindrome('abcd')) // false
