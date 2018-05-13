// Solution to excercise 1 :

// a function that calculates the highest number of an array  :
const highestNumber = (collection) => {
  let temp = -Infinity;
  let i = 0
  for (; i < collection.length; i++) {
    collection[i] > temp ? temp = collection[i] : '';
  };
  return temp;
};

// a function that calculates the minimum number:
const minimunNumber = (collection) => {
  let temp = Infinity;
  let i = 0;
  for (; i < collection.length; i++) {
    collection[i] < temp ? temp = collection[i] : '';
  };
  return temp;
};

// a function that calculates the second highest number :
const secondHighestNumber = (collection) => {
  let first = highestNumber(collection);
  let counter = 0;
  let second = -Infinity;
  let i = 0;
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
