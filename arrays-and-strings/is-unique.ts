// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function isUnique(string: string) {
  const set = new Set()

  for (let i = 0; i < string.length; i++) {
    set.add(string[i])
  }

  return set.size === string.length
}

// --------------------
// SOLUTION 2

// TIP: This solution does not use additional data structures

function isUnique2(string: string) {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false
      }
    }
  }

  return true
}

// --------------------
// TESTS

// 1
console.log(isUnique('hello')) // false
console.log(isUnique('abc')) // true

// 2
console.log(isUnique2('hello')) // false
console.log(isUnique2('abc')) // true
