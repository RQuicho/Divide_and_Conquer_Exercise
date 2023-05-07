// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0


const findRotationCount = (arr, leftIdx = 0, rightIdx = arr.length -1) => {
  let midIdx = Math.floor((leftIdx + rightIdx) / 2);

  if (midIdx > leftIdx && arr[midIdx] < arr[midIdx -1]) {
    return midIdx;
  }

  if (midIdx < rightIdx && arr[midIdx] > arr[midIdx + 1]) {
    return midIdx + 1;
  }

  if (arr[rightIdx] > arr[leftIdx]) {
    return findRotationCount(arr, leftIdx, midIdx - 1);
  }

  return findRotationCount(arr, midIdx + 1, rightIdx);

}



  // while (leftIdx <= rightIdx) {
  //   if (arr[midIdx] < arr[midIdx - 1] && arr[midIdx] < arr[midIdx + 1] || midIdx === (arr.length -1)) {
  //     return midIdx;
  //   } else if (arr[midIdx] > arr[midIdx - 1] && (arr[midIdx] < arr[midIdx + 1] || arr[midIdx] > arr[midIdx +1])) {
  //     return findRotationCount(arr, midIdx + 1, rightIdx);
  //   } else if ()
  // }
  // return -1


module.exports = findRotationCount