// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called ***countZeroes***, which returns the number of zeroes in the array.

// **Constraints**:
// Time Complexity: O(log N)

// Examples:
// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0

// **********************************************************************

// this functio is O(n): it goes through every element in the array
// const countZeroes = (arr) => {
//   return arr.filter(n => n===0).length
// }

const countZeroes = (arr) => {
  let firstZero = findFirstZero(arr)
  if (firstZero === -1) return 0;

  return arr.length - firstZero
}

const findFirstZero = (arr, low = 0, high = arr.length - 1) => {
  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2)
    if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
      return mid;
    } else if (arr[mid] === 1) {
      return findFirstZero(arr, mid + 1, high)
    }
    return findFirstZero(arr, low, mid - 1)
  }
  return -1;
}

module.exports = countZeroes;
// export default countZeroes