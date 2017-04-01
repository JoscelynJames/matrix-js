var arrayFour = [[1, 0, 0, 0],

                [0, 1, 0, 0],

                [0, 0, 1, 0],

                [0, 0, 0, 1]];

var arrayFive = [[2, 5, 1, 3, 9],

                [4, 1, 3, 0, 8],

                [1, 0, 9, 7, 6],

                [1, 7, 7, 3, 0],

                [3, 3, 8, 2, 4]]

function diagonalSum(arrayOfArrays) {
  var sum = 0;

  for (var i = 0; i < arrayOfArrays.length; i++) {
    sum += arrayOfArrays[i][i];
  }
  return sum
}

console.log(diagonalSum(arrayFive));

var arrayMatrix = [
  [1, 2, 3],
  [10, 20, 30]
];


function matrixDimensions(matrix) {
  return matrix.length + 'x' + matrix[0].length
}

function matrixRotate(matrix) {
  var newMatrix = [];
  var counter;

  for (var i = 0; i < arrayMatrix[0].length; i++) {
    newMatrix.push([]);
    counter = 0;

    for (var j = arrayMatrix.length - 1; j >= 0; j--) {
      newMatrix[i][counter] = arrayMatrix[j][i];
      counter++
    }
  }
  return newMatrix
}

console.log(matrixDimensions(arrayMatrix));
console.log(matrixRotate(arrayMatrix));
