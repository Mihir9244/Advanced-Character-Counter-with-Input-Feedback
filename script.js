const textInput = document.getElementById('text-input');
const totalChars = document.getElementById('total-chars');
const remainingChars = document.getElementById('remaining-chars');
const letterCount = document.getElementById('letter-count');
const digitCount = document.getElementById('digit-count');
const specialCount = document.getElementById('special-count');


const maxChars = 150;


function updateCharacterCount() {
  const inputText = textInput.value;
  const totalInputLength = inputText.length;


  totalChars.textContent = totalInputLength;
  const remaining = maxChars - totalInputLength;
  remainingChars.textContent = remaining >= 0 ? remaining : 0;

  
  if (totalInputLength > maxChars) {
    remainingChars.classList.add('warning');
  } else {
    remainingChars.classList.remove('warning');
  }

 
  let letters = 0;
  let digits = 0;
  let specials = 0;

  for (let char of inputText) {
    if (/[a-zA-Z]/.test(char)) {
      letters++;
    } else if (/\d/.test(char)) {
      digits++;
    } else if (/[^a-zA-Z0-9\s]/.test(char)) {
      specials++;
    }
  }

 
  letterCount.textContent = letters;
  digitCount.textContent = digits;
  specialCount.textContent = specials;
}


textInput.addEventListener('input', updateCharacterCount);
