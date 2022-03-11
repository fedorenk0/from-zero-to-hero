const a = [1,2,3,4]; // [3, 7];
// [1,2,3,4,5,6] => [3, 7, 11];

function strike(arr) {
  const resultArray = [];
  for (let i = 0; i <arr.length; i = i + 2) {
    resultArray.push(arr[i] + arr[i + 1]);
  }
  return resultArray;
}

console.log(strike(a));
