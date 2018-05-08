// Solution to excercise 1 :

// a function that calculates the highest number of an array  :
function highestNumber(array) {
  var temp = -Infinity;

  for (var i = array.length; i >= 0; i--) {
    array[i] > temp ? temp = array[i] : '';
  }
  return temp;
}

// a function that calculates the minimum number:

function minimunNumber(array) {
  var temp = Infinity;
  for (var i = array.length; i >= 0; i--) {
    array[i] < temp ? temp = array[i] : '';
  }
  return temp;
}

// a function that calculates the second highest number :

function secondHighestNumber(array) {
  var first = 0; // numero maximo = max
  var second = 0;
  for (var i = 0; i < array.length; i++) {
    array[i] > first ? first = array[i] : '';
  }
  for (var j = 0; j < array.length - 1; j++) {
    array[j] > second && array[j] !== first ? second = array[j] : ''
  }
  return second
}



