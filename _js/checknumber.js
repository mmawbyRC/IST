function pos_neg(){
  var n = document.getElementById('mynum').value;
  var output = document.getElementById('result');
  if (n > 0  ){
    output.innerHTML = n.toString() + " is positive";
  }
  else {
    output.innerHTML = n.toString() + " is negative";
  }
}
function odd_even(){
  var n = document.getElementById('mynum').value;
  var output = document.getElementById('result');
  if (n % 2 == 0 ){
    output.innerHTML = n.toString() + " is even";
  }
  else {
    output.innerHTML = n.toString() + " is odd";
  }
}
function to_binary(){
  var n = document.getElementById('mynum').value;
  var output = document.getElementById('result');
  output.innerHTML = "Sorry, I can't convert " + n.toString() + " to binary yet.";
}
function to_hex(){
  var n = document.getElementById('mynum').value;
  var output = document.getElementById('result');
  output.innerHTML = "Sorry, I can't convert " + n.toString() + " to hex yet.";
}
