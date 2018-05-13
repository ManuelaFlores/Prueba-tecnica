//Solution to excercise 2 :

// a function that calculates the length of an array :
const numberOfCharacters = (element) => {
  let counter = 0;
  let i = 0;
  for (; i < element.length; i++) {
    counter++;
  };
  return counter;
};

// get longest name :
const getLongestName = (collection) => {
  let max = '';
  let i = 0;
  for (; i < collection.length; i++) {
    numberOfCharacters(collection[i]) > numberOfCharacters(max) ? max = collection[i] : '';
  };
  return max;
};

// Sorting names :
const sorting = (collection) => {
  let temp = null;
  for (let j = 0; j < collection.length; j++) {
    for (let i = 0; i < collection.length; i++) {
      if (collection[i + 1] < collection[i]) {
        temp = collection[i];
        collection[i] = collection[i + 1];
        collection[i + 1] = temp;
      };
    };
  };
  return collection;
};

// Making a list :
const list = (collection) => {
  let string = '';
  let i = 0;
  for (; i < collection.length; i++) {
    string += '-  ' + collection[i] + '<br>';
  };
  return string;
};
