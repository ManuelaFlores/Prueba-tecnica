// Solution to excercise 1 :

// a function that calculates the highest number of an array  :
function highestNumber(collection) {
  var temp = -Infinity;
  for (var i = collection.length; i >= 0; i--) {
    collection[i] > temp ? temp = collection[i] : '';
  };
  return temp;
};

// a function that calculates the minimum number:

function minimunNumber(collection) {
  var temp = Infinity;
  for (var i = collection.length; i >= 0; i--) {
    collection[i] < temp ? temp = collection[i] : '';
  };
  return temp;
};

// a function that calculates the second highest number :

function secondHighestNumber(collection) {
  var first = highestNumber(collection);
  var second = -Infinity;
    for (var j = 0; j < collection.length; j++) {
    collection[j] > second && collection[j] !== first ? second = collection[j] : '';
  };
  return second;
};



