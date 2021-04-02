function equal(arr1, arr2) {
  let result = true;
  // comparing each element of array 
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  return result;
}

exports.equal = equal