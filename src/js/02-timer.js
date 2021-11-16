import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { convertMs } from './02-counting-values-date';

const refs = {
  btn: document.querySelector('button[button]'),
  input: document.querySelector('#datetime-picker'),
  timer: document.querySelector('.timer'),
};
const date = new Date();

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] - date < 0) {
      // refs.btn.disabled = true;
      alert('Please choose a date in the future');
    }
    const timeToStart = selectedDates[0] - date;
    const convertDate = convertMs(timeToStart);
    // refs.timer.dataset.days.textContent = convertDate.days;

    console.log(refs.timer.elements.dataset.days);
    console.log(timeToStart);
    console.log(convertDate);
  },
});
