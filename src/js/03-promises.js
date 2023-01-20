const form = document.querySelector('.form');
const delayFirst = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');

form.addEventListener('submit', createMyPromis);

function createMyPromis(event) {
  event.preventDefault();

  let delay = Number(delayFirst.value);
  const delayStepValue = Number(delayStep.value);
  const amountNumberValue = Number(amount.value);

  for (let i = 1; i <= amountNumberValue; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${i} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${i} in ${delay}ms`);
      });
    delay += delayStepValue;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
