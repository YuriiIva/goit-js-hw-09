import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { convertMs } from './02-counting-values-date';

const refs = {
  btn: document.querySelector('button[data-start]'),
  input: document.querySelector('#datetime-picker'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

const date = new Date();
refs.btn.disabled = true;

let convertDate;
let selectedDates;
let timeToStart;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] - date < 0) {
      alert('Please choose a date in the future');
    } else {
      refs.btn.disabled = false;
    }
    timeToStart = selectedDates[0] - date;
    console.log(timeToStart);
  },
});

const padNum = num => {
  return num.toString().padStart(2, 0);
};

const handleBtnClick = () => {
  let timerId = setInterval(() => {
    // timeToStart = selectedDates[0] - date;
    convertDate = convertMs(timeToStart);

    if (timeToStart > 0) {
      refs.days.textContent = convertDate.days;
      refs.hours.textContent = padNum(convertDate.hours);
      refs.minutes.textContent = padNum(convertDate.minutes);
      refs.seconds.textContent = padNum(convertDate.seconds);
    } else clearInterval(timerId);

    // console.log(convertDate);
    // console.log(timeToStart);
  }, 1000);
};
refs.btn.addEventListener('click', handleBtnClick);
