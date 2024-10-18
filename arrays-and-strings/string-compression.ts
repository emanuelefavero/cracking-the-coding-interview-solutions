// String Compression: Implement a method to perform basic string compress using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

// O(n) time | O(n) space
function compress(str: string) {
  let result = ''
  let count = 0

  for (let i = 0; i < str.length; i++) {
    count++
    if (str[i] !== str[i + 1]) {
      result += str[i] + count
      count = 0
    }
  }

  return result
}

// --------------------
// TESTS

console.log(compress('aabcccccaaa')) // a2b1c5a3
console.log(compress('abcd')) // a1b1c1d1
