// Solution to excercise 1 :

// a function that calculates the highest number of an array  :
function highestNumber(array) {
  var temp = -Infinity;

  for (var i = array.length; i >= 0; i--) {
    array[i] > temp ? temp = array[i] : '';
  };
  return temp;
};

// a function that calculates the minimum number:

function minimunNumber(array) {
  var temp = Infinity;
  for (var i = array.length; i >= 0; i--) {
    array[i] < temp ? temp = array[i] : '';
  };
  return temp;
};

// a function that calculates the second highest number :

function secondHighestNumber(array) {
  var first = highestNumber(array);
  var second = -Infinity;
    for (var j = 0; j < array.length; j++) {
    array[j] > second && array[j] !== first ? second = array[j] : '';
  };
  return second;
};



