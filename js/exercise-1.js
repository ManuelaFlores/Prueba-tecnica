// Solution to excercise 1 :

// a function that calculates the highest number of an array  :
function highestNumber(collection) {
  var temp = -Infinity;
  var i = 0
  for (; i < collection.length; i++) {
    collection[i] > temp ? temp = collection[i] : '';
  };
  return temp;
};

// a function that calculates the minimum number:
function minimunNumber(collection) {
  var temp = Infinity;
  var i = 0;
  for (; i < collection.length; i++) {
    collection[i] < temp ? temp = collection[i] : '';
  };
  return temp;
};

// a function that calculates the second highest number :
function secondHighestNumber(collection) {
  var first = highestNumber(collection);
  var counter = 0;
  var second = -Infinity;
  var i = 0;
  for (; i < collection.length; i++) {
    if (collection[i] > second && collection[i] === first) {
      counter++;
      if (counter === 2) {
        second = collection[i];
      };
    } else if (collection[i] > second && collection[i] !== first) {
      second = collection[i];
    };
  };
  return second;
}
