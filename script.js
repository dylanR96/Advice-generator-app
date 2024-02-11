const url = "https://api.adviceslip.com/advice";
const adviceNumContainer = document.getElementById("advice-number");
const adviceContainer = document.getElementById("advice");
const diceButton = document.getElementById("dice-button");

async function myApi() {
  try {
    const response = await fetch(url);
    const { slip } = await response.json();
    const adviceId = slip.id;
    const myAdvice = slip.advice;
    adviceNumContainer.textContent = `ADVICE #${adviceId}`;
    adviceContainer.textContent = `"${myAdvice}"`;
  } catch (error) {
    console.error("Error: " + error);
    adviceContainer.textContent = "Woops! An error has occured. Please try again later!";
  }

}

myApi();

diceButton.addEventListener("click", myApi);