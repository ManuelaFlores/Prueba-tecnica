//Solution to excercise 2 :

// a function that calculates the length of an array :
function numberOfCharacters(array) {
  var counter = 0;
  for (var i = 0; i < array.length; i++) {
    counter++
  }
  return counter;
}

// get longest name :
function getLongestName(array) {
  var max = '';
  for (var j = 0; j < array.length; j++) {
     numberOfCharacters(array[j]) > numberOfCharacters(max) ? max = array[j] : '';
  }
  return max;
}

// Sorting names :
function sorting(array) {
  var temp = null;
  for (var j = 0; j < array.length; j++) {
    for (var i = 0; i < array.length; i++) {
      if (array[i + 1] < array[i]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return array;
}

// Making a list :
function list(array) {
  var string = '';
  for (var i = 0; i < array.length; i++) {
    string += '-  ' + array[i] + '<br>';
  }
  return string
}
