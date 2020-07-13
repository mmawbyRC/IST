//Defining pin+ballpark vars
var pin1 = 6;
var pin2 = 9;
var pin3 = 4;
var pin4 = 3;
var lock1pin1c1 = 5;
var lock1pin1c2 = 5;
var lock1p1g = false;
var lock1p2g = false;
var lock1p3g = false;
var lock1p4g = false;

//Hiding stuff
lock1.classList.add('hidden');
goodly.classList.add('hidden');
//Lock1.1.1.classList.add('hidden');
//check1.classList.add('hidden');

function beginGame() {
   lock1.classList.add('show_inlineblock');
   BeginOne.classList.add('hidden');
   check1.classList.add('show_inlineblock');
}

//Calling the functions when the game begins
BeginOne.onclick = beginGame;

//Changing user input into a number
//var lock1pin1input = parseInt(lock1.1.1);

function lock1check() {
  if (lock1_pin1.value == 6){
    lock1Pin1.classList.add('correct');
    lock1Pin1.classList.remove('close');
    lock1Pin1.classList.remove('wrong');
    lock1p1g = true;
  }
   else if (lock1_pin1.value == 5 || lock1_pin1.value == 7) {
     lock1Pin1.classList.add('close');
     lock1Pin1.classList.remove('wrong');
     lock1Pin1.classList.remove('correct');
   }
  else {
    lock1Pin1.classList.add('wrong');
    lock1Pin1.classList.remove('close');
    lock1Pin1.classList.remove('correct');
  }

  if (lock1_pin2.value == 9){
    lock1Pin2.classList.add('correct');
    lock1Pin2.classList.remove('close');
    lock1Pin1.classList.remove('wrong');
    lock1p2g = true;
  }
   else if (lock1_pin2.value == 8) {
     lock1Pin2.classList.add('close');
     lock1Pin2.classList.remove('wrong');
     lock1Pin2.classList.remove('correct');
   }
  else {
    lock1Pin2.classList.add('wrong');
    lock1Pin2.classList.remove('close');
    lock1Pin2.classList.remove('correct');
  }
  if (lock1_pin3.value == 4){
    lock1Pin3.classList.add('correct');
    lock1Pin3.classList.remove('wrong');
    lock1Pin3.classList.remove('close');
    lock1p3g = true;
  }
   else if (lock1_pin3.value == 5 || lock1_pin3.value == 3) {
     lock1Pin3.classList.add('close');
     lock1Pin3.classList.remove('correct');
     lock1Pin3.classList.remove('wrong');
   }
  else {
    lock1Pin3.classList.add('wrong');
    lock1Pin3.classList.remove('correct');
    lock1Pin3.classList.remove('close');
  }
  if (lock1_pin4.value == 3){
    lock1Pin4.classList.add('correct')
    lock1Pin4.classList.remove('wrong');
    lock1Pin4.classList.remove('close');
    lock1p4g = true;
  }
   else if (lock1_pin4.value == 4 || lock1_pin4.value == 2) {
     lock1Pin4.classList.add('close');
     lock1Pin4.classList.remove('wrong');
     lock1Pin4.classList.remove('correct');
   }
  else {
    lock1Pin4.classList.add('wrong');
    lock1Pin4.classList.remove('close');
    lock1Pin4.classList.remove('correct');
  }
  if (lock1Pin1.hasClass('correct') == true && lock1Pin2.hasClass('correct') == true && lock1Pin3.hasClass('correct') == true && lock1Pin4.hasClass('correct') == true){
    lock1.classList.add('hidden');
    lock1.classList.remove('show_inlineblock');
    check1.classList.add('hidden');
    check1.classList.add('show_inlineblock');
    goodly.classList.remove('hidden');
    goodly.classList.add('show_inlineblock');
  }
}

check1.onclick = lock1check;
