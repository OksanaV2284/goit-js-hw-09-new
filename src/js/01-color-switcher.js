const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');

console.log(stop);

let timerId = null;

start.addEventListener('click', () => {
  timerId = setInterval(() => {
    const whatColor = getRandomHexColor();
    document.body.style.backgroundColor = whatColor;
    start.setAttribute('disabled', true);

    if (timerId) {
      stop.removeAttribute('disabled');
    }
  }, 1000);
});

stop.addEventListener('click', () => {
  clearInterval(timerId);
  start.removeAttribute('disabled');
  if (timerId) {
    stop.setAttribute('disabled', true);
  }
  console.log(`Interval with id ${timerId} has stopped!`);
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
