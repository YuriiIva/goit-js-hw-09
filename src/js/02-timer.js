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

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] - date < 0) {
      return alert('Please choose a date in the future');
    }
    refs.btn.disabled = false;
    handleBtnClick(selectedDates[0].getTime());
  },
});

const padNum = num => {
  return num.toString().padStart(2, 0);
};

const handleBtnClick = selectedDates => {
  let timerId = setInterval(() => {
    const timeToStart = selectedDates - Date.now();
    const convertDate = convertMs(timeToStart);
    if (timeToStart > 0) {
      refs.days.textContent = convertDate.days;
      refs.hours.textContent = padNum(convertDate.hours);
      refs.minutes.textContent = padNum(convertDate.minutes);
      refs.seconds.textContent = padNum(convertDate.seconds);
    } else clearInterval(timerId);
  }, 1000);
};
refs.btn.addEventListener('click', handleBtnClick);
