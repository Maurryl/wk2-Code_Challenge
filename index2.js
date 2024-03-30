function generateArray(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }
  
  // Example usage:
  const array1 = generateArray(4, 7);
  console.log(array1); // [4, 5, 6, 7]
  
  const array2 = generateArray(-4, 7);
  console.log(array2); // [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
  