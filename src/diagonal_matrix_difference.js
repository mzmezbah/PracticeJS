const matrix = [[1,3,5],[4,6,7],[7,8,3]]

const differenceMatrix = (matrix) => {
      let s1 = 0;
      let s2 = 0;
      for (var i = 0; i < matrix.length; i++) {
      s1 +=  matrix[i][i] //multiArryySelectSystem
      s2 += matrix[matrix.length - 1-i][i]
      }

    return Math.abs(s1 - s2)
}


console.log(differenceMatrix(matrix));
