const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};
let timerId = null;

console.log(refs.btnStart);
console.log(refs.btnStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const handleStartClick = () => {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  //   refs.btnStart.setAttribute('disabled', true);
  refs.btnStart.disabled = true;
};
const handleStopClick = () => {
  clearInterval(timerId);
  //   refs.btnStart.removeAttribute('disabled');
  refs.btnStart.disabled = false;
};

refs.btnStart.addEventListener('click', handleStartClick);
refs.btnStop.addEventListener('click', handleStopClick);
