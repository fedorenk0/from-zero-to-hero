const first = [1, 2, 3, 4, 5, 6, 7, 8];
const second = [10, 15, 18, 25, 30];

function test(arr1, arr2) {
  const oddFromArr1 = arr1.filter(function (l) {
    return (l % 2) !== 0;
  });

  const evenFromArr2 = [];

  arr2.forEach(function (i) {
    if ((i % 2) === 0) {
      evenFromArr2.push(i);
    }
  });

  return oddFromArr1.concat(evenFromArr2)
}

console.log(test(first, second));