// https://api.adviceslip.com/advice
const url = "https://api.adviceslip.com/advice";
const adviceNumContainer = document.getElementById("advice-number");
const adviceContainer = document.getElementById("advice");
const diceButton = document.getElementById("dice-button");

async function myApi() {
  const response = await fetch(url);
  const {slip} = await response.json();
  const adviceId = slip.id;
  const myAdvice = slip.advice;
  adviceNumContainer.innerHTML = `ADVICE #${adviceId}`;
  adviceContainer.innerHTML = `"${myAdvice}"`;
}

myApi();

diceButton.addEventListener("click", myApi);

// {
//   "slip": {
//       "id": 198,
//       "advice": "Sing in the shower."
//   }
// }