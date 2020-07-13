// Hey Am, if at some point you could
//make a button that goes back to the homepage when you
//finish the game, that would be great! Thanks!
//                                            - Bank



// instructions screen
function begin() {
  instructions.classList.add('hidden');
  roundOne.classList.remove('hidden');
}
start.onclick = begin;

// round one
function guess1() {
  if (oneInput.value == 'crybaby') {
    roundOne.classList.add('hidden');
    correctOne.classList.remove('hidden');
  } else {
    roundOne.classList.add('hidden');
    wrong.classList.remove('hidden');
  }
}
function correct1() {
  roundTwo.classList.remove('hidden');
  correctOne.classList.add('hidden');
}
correctOne.onclick = correct1;
oneButton.onclick = guess1;

// round two
function guess2() {
  if (twoInput.value == 'snowman') {
    roundTwo.classList.add('hidden');
    correctTwo.classList.remove('hidden');
  } else {
    roundTwo.classList.add('hidden');
    wrong.classList.remove('hidden');
  }
}
function correct2() {
  roundThree.classList.remove('hidden');
  correctTwo.classList.add('hidden');
}
twoButton.onclick = guess2;
to3.onclick = correct2;

// round 3
function guess3() {
  if (threeInput.value == 'best friend') {
    roundThree.classList.add('hidden');
    correctThree.classList.remove('hidden');
  } else {
    roundThree.classList.add('hidden');
    wrong.classList.remove('hidden');
  }
}
function correct3() {
  correctThree.classList.add('hidden');
  roundFour.classList.remove('hidden');
}
threeButton.onclick = guess3;
to4.onclick = correct3;

//round 4
function guess4() {
  if (fourInput.value == 'finding dory') {
    roundFour.classList.add('hidden');
    correctFour.classList.remove('hidden');
  } else {
    roundFour.classList.add('hidden');
    wrong.classList.remove('hidden');
  }
}
function correct4() {
  correctFour.classList.add('hidden');
  roundFive.classList.remove('hidden');
}
fourButton.onclick = guess4;
to5.onclick = correct4;

// round 5
function guess5() {
  if (fiveInput.value == 'musical chairs') {
    roundFive.classList.add('hidden');
    correctFive.classList.remove('hidden');
  } else {
    roundFive.classList.add('hidden');
    wrong.classList.remove('hidden');
  }
}
function endgame() {
  correctFive.classList.add('hidden');
  congrats.classList.remove('hidden');
}
fiveButton.onclick = guess5;
end.onclick = endgame;
//try again
function restart() {
  roundOne.classList.remove('hidden')
  wrong.classList.add('hidden')
}
tryagain.onclick = restart;
