import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  daysTime: document.querySelector('span[data-days]'),
  hoursTime: document.querySelector('span[data-hours]'),
  minutesTime: document.querySelector('span[data-minutes]'),
  secondsTime: document.querySelector('span[data-seconds]'),
};
const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const timer = document.querySelector('.timer');
const body = document.querySelector('body');
const currentDate = new Date();
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] - currentDate < 0) {
      window.alert('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled');
    }
  },
};
const flatpickrInput = flatpickr(input, options);

timer.style.display = 'flex';
timer.style.gap = '16px';
timer.style.fontSize = '32px';
timer.style.color = ' hsla(0, 57%, 15%, 0.843)';

startBtn.addEventListener('click', () => {
  timering.start();
});

let intervalId = null;
let stopwatch = 0;
const TIME_END = 120;
startBtn.setAttribute('disabled', true);

const timering = {
  start() {
    intervalId = setInterval(() => {
      stopwatch = flatpickrInput.selectedDates[0] - new Date();
      const time = getTimeComponents(stopwatch);
      updateClockfase(time);
      console.log(time);

      if (stopwatch <= TIME_END) {
        clearInterval(intervalId);
        refs.daysTime.textContent = '00';
        refs.hoursTime.textContent = '00';
        refs.minutesTime.textContent = '00';
        refs.secondsTime.textContent = '00';
        startBtn.setAttribute('disabled', true);
      }
    }, 1000);
  },
};

function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, minutes, seconds };
}

function updateClockfase({ days, hours, minutes, seconds }) {
  refs.daysTime.textContent = days;
  refs.hoursTime.textContent = hours;
  refs.minutesTime.textContent = minutes;
  refs.secondsTime.textContent = seconds;
}
