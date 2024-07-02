// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function isUnique(string: string) {
  const set = new Set()

  for (let i = 0; i < string.length; i++) {
    set.add(string[i])
  }

  return set.size === string.length
}

// --------------------
// TESTS

console.log(isUnique('hello')) // false
console.log(isUnique('abc')) // true
