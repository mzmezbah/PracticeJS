const array = [3,6,33,65,4,7,9,1,37,777,97,67,87,58]

const bubbleSorter = (array) => {
  for (var i = 0; i < array.length-1; i++) {
    // console.log('jerry')
      for (var j = 0; j < array.length-1-i; j++) {
          if(array[j]>array[j+1]){
            let x = array[j];
            array[j] = array[j+1]
            array[j+1] = x;
          }
          // console.log('i am mezbah');
      }
  }
  return array;
}

console.log(bubbleSorter(array));
