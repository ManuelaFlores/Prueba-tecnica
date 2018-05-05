// a function that calculates the length of an array :
function numberOfCharacters(array) {
  var number = 0;
  do {
    if (array[number]) {
      number++;
    } else {
      number
    }
  } while (array[number])

  return number
}

//numberOfCharacters ( [45, 75, 200, 256, 1, 27])

// a function that calculates the highest number of an array  :
function highestNumber(array) {
  var characters = numberOfCharacters(array);
  var temp = -Infinity;

  while (characters--) {
    if (array[characters] > temp) {
      temp = array[characters];
    }
  }
  return temp;
}

// highestNumber([45, 75, 200, 256,-123, 1, 25555557]);

// a function that calculates the minimum number:

function minimunNumber(array) {
  var characters = numberOfCharacters(array);
  var temp = Infinity;
  while (characters--) {
    if (array[characters] < temp) {
      temp = array[characters]
    }
  }
  return temp;

}

  // minimunNumber([45, 75, 200, 256, 1, 27,345,23455555,12222,-123])


