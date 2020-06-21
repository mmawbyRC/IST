var clicks = 0;
var answer = "physics";
var chr = '';
function submit() {
  if (!answer.includes(input.value)) {
    chr = chr + input.value + ', '
    letters.textContent = chr;
    if (clicks == 0) {
        img.classList.remove('zero');
        img.classList.add('one');
    }
    else if (clicks == 1) {
      img.classList.remove('one');
      img.classList.add('two');
    }
    else if (clicks == 2) {
      img.classList.remove('two');
      img.classList.add('three');
    }
    else if (clicks == 3) {
      img.classList.remove('three');
      img.classList.add('four');
    }
    else if (clicks == 4) {
      img.classList.remove('four');
      img.classList.add('five');
    }
    else if (clicks == 5) {
      img.classList.remove('five');
      img.classList.add('six');
    }
    else if (clicks == 6) {
      img.classList.add('hide');
      lost.classList.remove('hide');
    }
    clicks = clicks + 1
  }
  else if (answer.includes(input.value)) {
    if (input.value == 'p') {
      p.classList.remove('hide');
      P.classList.add('hide');
  } else if (input.value == 'h') {
      h.classList.remove('hide');
      H.classList.add('hide');
  }
   else if (input.value == 'y') {
      y.classList.remove('hide');
      Y.classList.add('hide');
    }
    else if (input.value == 's') {
      s.classList.remove('hide');
      S.classList.add('hide');
      a.classList.remove('hide');
      A.classList.add('hide');
    }
    else if (input.value == 'i') {
      i.classList.remove('hide');
      I.classList.add('hide');
    }
    else if (input.value == 'c') {
      c.classList.remove('hide');
      C.classList.add('hide');
    }
  }
  else {
    img.classList.add('hide');
    finish.classList.remove('hide');
}}
button.onclick = submit;
