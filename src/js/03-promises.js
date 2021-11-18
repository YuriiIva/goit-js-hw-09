import notiflix from 'notiflix';

const refs = {
  inputDelay: document.querySelector('input[name="delay"]'),
  inputStep: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount"]'),
  form: document.querySelector('.form'),
  btn: document.querySelector('button'),
};

const handleBtnSubmit = e => {
  e.preventDefault();
  const amount = +refs.inputAmount.value;
  const delay = +refs.inputDelay.value;
  const baseStep = +refs.inputStep.value;
  // setTimeout(() => {
  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, delay + baseStep * i)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
  // }, delay);
};

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}

refs.form.addEventListener('submit', handleBtnSubmit);
