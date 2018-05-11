//Solution to excercise 2 :

// a function that calculates the length of an array :
function numberOfCharacters(element) {
  var counter = 0;
  for (var i = 0; i < element.length; i++) {
    counter++;
  };
  return counter;
};

// get longest name :
function getLongestName(collection) {
  var max = '';
  for (var j = 0; j < collection.length; j++) {
     numberOfCharacters(collection[j]) > numberOfCharacters(max) ? max = collection[j] : '';
  };
  return max;
};

// Sorting names :
function sorting(collection) {
  var temp = null;
  for (var j = 0; j < collection.length; j++) {
    for (var i = 0; i < collection.length; i++) {
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
function list(collection) {
  var string = '';
  for (var i = 0; i < collection.length; i++) {
    string += '-  ' + collection[i] + '<br>';
  };
  return string;
};
