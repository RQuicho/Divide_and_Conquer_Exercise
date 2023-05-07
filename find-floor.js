// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1


const findFloor = (arr, val, leftIdx = 0, rightIdx = arr.length -1) => {
  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (arr[rightIdx] <= val) {
      return arr[rightIdx]
    }

    if (arr[midIdx - 1] <= val && arr[midIdx] > val) {
      return arr[midIdx -1];
    }

    if (arr[midIdx] > val) {
      return findFloor(arr, val, leftIdx, midIdx - 1);
    }
    return findFloor(arr, val, midIdx +  1, rightIdx);
  }
  return -1;
}

module.exports = findFloor