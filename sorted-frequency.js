// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1

const sortedFrequency = (arr, val) => {
  let firstIdx = findFirst(arr, val);
  let lastIdx = findLast(arr, val);

  console.log(firstIdx);
  console.log(lastIdx);

  if (firstIdx === -1) return firstIdx;
  return lastIdx - firstIdx + 1;
}


const findFirst = (arr, val, leftIdx = 0, rightIdx = arr.length - 1) => {
  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor((rightIdx + leftIdx) / 2);

    if((midIdx === 0 || val > arr[midIdx - 1]) && arr[midIdx] === val) {
      return midIdx;
    } else if (val > arr[midIdx]) {
      return findFirst(arr, val, midIdx + 1, rightIdx);
    } else {
      return findFirst(arr, val, leftIdx, midIdx -1);
    }
  }
  return -1;
}

const findLast = (arr, val, leftIdx = 0, rightIdx = arr.length - 1) => {
  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor((rightIdx + leftIdx) / 2);

    if((midIdx === arr.length - 1 || val < arr[midIdx + 1]) && arr[midIdx] === val) {
      return midIdx;
    } else if (val < arr[midIdx]) {
      return findLast(arr, val, leftIdx, midIdx - 1);
    } else {
      return findLast(arr, val, midIdx + 1, rightIdx);
    }
  }
  return -1;
}



// const findFirst = (arr, leftIdx = 0, rightIdx = arr.length - 1, val) => {
//   while (leftIdx <= rightIdx) {
//     let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
//     let middleVal = arr[middleIdx];

//     if (middleVal === val && arr[middleIdx -1] === val) {
//       return findFirst(arr, middleIdx - 1, rightIdx, val);
//     }

//   return -1;
//   }
// }


// const findLast = (arr, leftIdx = 0, rightIdx = arr.length - 1, val) => {
//   while (leftIdx <= rightIdx) {
//     let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
//     let middleVal = arr[middleIdx];

//     if (middleVal === val && arr[middleIdx + 1] === val) {
//       return findLast(arr, leftIdx, middleIdx + 1, val);
//     }
    

//   return -1;
//   }
// }

module.exports = sortedFrequency