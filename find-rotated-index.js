// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1



const findRotatedIndex = (arr, val, leftIdx = 0, rightIdx = arr.length -1) => {

  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    
    if (arr[midIdx] === val) {
      return midIdx;
    } else if (arr[midIdx] > val && arr[midIdx - 1] <= val) {
      return findRotatedIndex(arr, val, leftIdx, midIdx - 1);
    } else {
      return findRotatedIndex(arr, val, midIdx + 1, rightIdx);
    }
  }
  return -1;
}






module.exports = findRotatedIndex