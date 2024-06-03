const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");
const phoneRegexWithParentheses = /^1?(\s?)\((\d{3})\)(\s?|-?)(\d{3})(\s?|-?)(\d{4})$/;
const phoneRegexWithoutParentheses = /^1?(\s?)(\d{3})(\s?|-?)(\d{3})(\s?|-?)(\d{4})$/;

const printResult = (boolean,number) => {
  return boolean ? `Valid US number: ${number}` : `Invalid US number: ${number}`;
};

const checkNumber = (number) => {
  return phoneRegexWithParentheses.test(number) || phoneRegexWithoutParentheses.test(number);
};

const clear = () => {

};


checkBtn.addEventListener("click", () => {
  if (!input.value) {
    alert("Please provide a phone number");
  } else {
    results.innerText += printResult(checkNumber(input.value),input.value) + "\n";
  }
});

clearBtn.addEventListener("click", () => {
  results.innerText = ""; 
});
