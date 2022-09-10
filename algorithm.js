function twoSum(array, target) {

  let sums = [];

  // check each element in arrayay
  for (let i = 0; i < array.length; i++) { 

    // check each other element in the arrayay
    for (let j = i + 1; j < array.length; j++) {

      // determine if these two elements sum to target
      if (array[i] + array[j] === target) {
        sums.push([array[i], array[j]]);
      }

    }
  }

  // return all pairs of integers that sum to target
  return sums;

}

console.log(twoSum([3, 5, 2, -4, 8, 11], 7));  