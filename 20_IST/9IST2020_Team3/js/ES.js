function tabulateAnswers() {
  let c0score = 0;
  let c1score = 0;
  let c2score = 0;
  let c3score = 0;
  let c4score = 0;
  let c5score = 0;
/*
  var choices = document.getElementsByTagName('option');

  for (i=0; i<choices.length; i++) {
    console.log(i,choices[i].checked);

    if (choices[i].checked) {
      if (choices[i].value == 'c0') {
        c0score = c0score + 1;
      }
      if (choices[i].value == 'c1') {
        c1score = c1score + 1;
      }
      if (choices[i].value == 'c2') {
        c2score = c2score + 1;
      }
      if (choices[i].value == 'c3') {
        c3score = c3score + 1;
      }
      if (choices[i].value == 'c4') {
        c4score = c4score + 1;
      }
      if (choices[i].value == 'c5') {
        c5score = c5score + 1;
      }
    }
}
*/
//This loop will get all 20 boxes and process selections
    for (q=1; q<21; q++){
      let box = 'box'+ q;
      let question = document.getElementById(box);
      let choice = question.selectedIndex;
      console.log(box, choice, question[choice]);
      switch (choice){
        case -1: break;
        case 0: c0score = c0score +1; break;
        case 1: c1score = c1score +1; break;
        case 2: c2score = c2score +1; break;
        case 3: c3score = c3score +1; break;
        case 4: c4score = c4score +1; break;
        case 5: c5score = c5score +1; break;
      }
      console.log(c0score,c1score,c2score,c3score,c4score,c5score);

    }

      var maxscore = Math.max(c0score,c1score,c2score,c3score,c4score,c5score);
      console.log(maxscore,c0score,c1score,c2score,c3score,c4score,c5score);
      //what if maxscore is the not unique to any of 0 - 5 values?//
      var stressresultbox = document.getElementById('answer');
        if (c0score == maxscore) {
          stressresultbox.innerHTML = "Please fill in a score for all statements to recieve a result.";
        }
        if (c1score == maxscore) {
          stressresultbox.innerHTML = "Your stress levels are very low. Keep it up!";
        }
        if (c2score == maxscore) {
          stressresultbox.innerHTML = "Your stress levels are low. Keep it up!";
        }
        if (c3score == maxscore) {
          stressresultbox.innerHTML = "Your stress levels are moderate. Make sure you maintain this to ensure a balanced lifestyle. ";
        }
        if (c4score == maxscore) {
          stressresultbox.innerHTML = "Your stress levels are high. Consider some of the relaxation strategies below.";
        }
        if (c5score == maxscore) {
          stressresultbox.innerHTML = "Your stress levels are very high. Consider some of the relaxation strategies below.";
        }
}
function havefunFunction() {
var x = document.getElementById("havefun");
  if (x.style.display === "none") {
    x.style.display = "block";
} else {
    x.style.display = "none";
          }
        }
function sleepFunction() {
var x = document.getElementById("sleep");
  if (x.style.display === "none") {
    x.style.display = "block";
} else {
    x.style.display = "none";
          }
        }
function musicFunction() {
var x = document.getElementById("music");
  if (x.style.display === "none") {
    x.style.display = "block";
} else {
    x.style.display = "none";
    }
  }
  function exerciseFunction() {
  var x = document.getElementById("exercise");
    if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
      }
    }
    function meditationFunction() {
    var x = document.getElementById("meditation");
      if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
        }
      }
