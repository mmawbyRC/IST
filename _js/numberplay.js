//Check if number is positive or negative
function pos_neg(){
  var n = document.getElementById('mynum').value;
  var output = document.getElementById('result');
  output.innerHTML = "Sorry. I can't do that yet.";
}
//Check if number is odd or even
function odd_even(){
  var n = document.getElementById('mynum').value;
  var output = document.getElementById('result');
  output.innerHTML = "Sorry, I can't convert do that yet.";

}
//Convert decimal number (base 10) to binary (base 2)
function to_binary(){
  var n = document.getElementById('mynum').value;
  var output = document.getElementById('result');
  output.innerHTML = "Sorry, I can't convert " + n.toString() + " to binary yet.";
}
//Convert decimal number (base 10) to hexadecimal (base 16)
function to_hex(){
  var n = document.getElementById('mynum').value;
  var output = document.getElementById('result');
  output.innerHTML = "Sorry, I can't convert " + n.toString() + " to hex yet.";
}
