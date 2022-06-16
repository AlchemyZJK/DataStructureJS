function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// Selection Sort
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    let minValue = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < minValue) {
        minValue = arr[j];
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
  return arr;
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

// Bubble Sort
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

// Merge Sort
function merge(arr1, arr2) {
  const mergedArr = [];
  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }
  return mergedArr;
}
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const arr1 = arr.slice(0, Math.floor(arr.length / 2));
  const arr2 = arr.slice(Math.floor(arr.length / 2));
  const sortedArr1 = mergeSort(arr1);
  const sortedArr2 = mergeSort(arr2);
  const mergedArr = merge(sortedArr1, sortedArr2);
  return mergedArr;
}

// Quick Sort
function pickSentinel(arr) {
  const left = 0, right = arr.length - 1, middle = Math.floor(arr.length / 2);
  if (arr[left] > arr[middle]) {
    swap(arr, left, middle);
  }
  if (arr[left] > arr[right]) {
    swap(arr, left, right);
  }
  if (arr[middle] > arr[right]) {
    swap(arr, middle, right);
  }
  swap(arr, left, middle);
  return arr[0];
}
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const sentinel = pickSentinel(arr);
  // pay attention to `right = arr.length - 1` (special case: arr.length === 2)
  let left = 1, right = arr.length - 1;
  while (left < right) {
    while (arr[left] < sentinel)  left++;
    while (arr[right] > sentinel)  right--;
    if (left < right) {
      swap(arr, left, right);
    } else {
      break;
    }
  }
  swap(arr, 0, right);
  const arr1 = quickSort(arr.slice(0, right));
  const arr2 = quickSort(arr.slice(right + 1));
  return [...arr1, sentinel, ...arr2];
}