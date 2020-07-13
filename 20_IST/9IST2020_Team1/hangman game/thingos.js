var right = '1234567'
var place = ''
var img = ''
var i = 1
var q = 1
const poop = ['physics', 'airport', 'animals', 'buttons', 'cookies', 'evening', 'tickets', 'website', 'flights']
var wrongGuess = []
const answer = poop[Math.floor(Math.random() * poop.length)];

function ee() {
  if (answer.includes(guess.value)){
    for (i = 0; i<7; i++) {
      let ch1 = answer.charAt(i);
      if (ch1 == guess.value) {
        place = document.getElementById('l' + i.toString());
        place.textContent = guess.value;
        right = right.replace(i+1, ch1);
        if (right == answer) {
          play.classList.add('hide');
          win.classList.remove('hide');
        }
      }
    }
  }
  else {
    if (wrongGuess.includes(guess.value)){
      wrongness.classList.remove('hide');
    }
    else {
      wrongGuess.push(guess.value);
      wrong.textContent = wrong.textContent + guess.value;
      img = document.getElementById('hangman');
      if (q == 9) {
        lost.classList.remove('hide');
        play.classList.add('hide');
      }
      else {
      img.src = 'Hangman-' + q + '.png';
    }
      q = q + 1;
    }
  }
  guess.value='';
}
function okee() {
  wrongness.classList.add('hide');
}
guess.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("button").click();
  }
});
ok.onclick = okee;
button.onclick = ee;
