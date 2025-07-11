function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

const button = document.getElementById('clickButton');
const display = document.getElementById('clickDisplay');

button.addEventListener('click', () => {
  const currentCount = counter();
  display.textContent = `You've clicked ${currentCount} times`;
});
