const resultGamma =['red', 'blue', 'black', 'orenge'];


function colors(arr) {
  const resultArray = [];
  for (let i = arr.length-1; i >= 0; i--) {
    resultArray.push(arr[i]);
  }
  return resultArray;
}

console.log(colors(resultGamma));