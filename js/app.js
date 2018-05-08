function begin() {
  // naming variables :
  var firstSolution = document.querySelector('.solution-1-js');
  var secondSolution = document.querySelector('.solution-2-js');
  var highestNum = document.querySelector('.highest-number-js');
  var minimunNum = document.querySelector('.minimunNumber-js');
  var secondHighest = document.querySelector('.second-highest-number-js');
  var longestName = document.querySelector('.longest-name-js');
  var orderList = document.querySelector('.order-list');
  var arrayOfNumbers = [45, 75, 200, 256, 1, 27];
  var arrayOfStrings =  ['erik', 'leonardo', 'andres', 'gerardo', 'jan', 'renzo'];

  //
  function firstHandler() {
   highestNum.textContent = highestNumber(arrayOfNumbers);
   minimunNum.textContent = minimunNumber(arrayOfNumbers);
   secondHighest.textContent = secondHighestNumber(arrayOfNumbers);
  }

  function secondHandler() {
    longestName.textContent = getLongestName(arrayOfStrings);
    orderList.innerHTML = list(sorting(arrayOfStrings));

  }

  // adding event click to the buttons :
  firstSolution.addEventListener('click', firstHandler);
  secondSolution.addEventListener('click', secondHandler);
}

window.addEventListener('load',begin)
