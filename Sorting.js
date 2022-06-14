function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// Insertion Sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      } else {
        break;
      }
    }
  }
  return arr;
}

test = [56, 23, 5, 12, 87, 134, 2, 56, 24];
console.log(insertionSort(test));