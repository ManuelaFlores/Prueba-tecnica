const begin = () => {
  // naming variables:
  let firstSolution = document.querySelector('.solution-1-js');
  let secondSolution = document.querySelector('.solution-2-js');
  let highestNum = document.querySelector('.highest-number-js');
  let minimunNum = document.querySelector('.minimunNumber-js');
  let secondHighest = document.querySelector('.second-highest-number-js');
  let longestName = document.querySelector('.longest-name-js');
  let orderList = document.querySelector('.order-list');
  const arrayOfNumbers = [45, 75, 200, 256, 1, 27];
  const arrayOfStrings = ['erik', 'leonardo', 'andres', 'gerardo', 'jan', 'renzo'];

  // event handlers:
  const firstHandler = () => {
    highestNum.textContent = highestNumber(arrayOfNumbers);
    minimunNum.textContent = minimunNumber(arrayOfNumbers);
    secondHighest.textContent = secondHighestNumber(arrayOfNumbers);
  };

  const secondHandler = () => {
    longestName.textContent = getLongestName(arrayOfStrings);
    orderList.innerHTML = list(sorting(arrayOfStrings));
  };

  // adding event click to the buttons:
  firstSolution.addEventListener('click', firstHandler);
  secondSolution.addEventListener('click', secondHandler);
};

window.addEventListener('load', begin);
