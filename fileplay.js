////////////////////////////////////////////////////////////////////////////////////////
// AUTHOR: Malyn Mawby
//Heavily adapted from work of Kristin Goodman (www.kgoodmanwebsolutions.com)                             //
// DATE: June 2018                                                              //
// DESCRIPTION: These files receive a CSV file of names (one column of data) and will //
// randomly pick a winner and display the winner's name. Additionally, it removes the //
// winner so they can't win again. This also keeps track of who has already been      //
// called.                                                                            //
////////////////////////////////////////////////////////////////////////////////////////

//SOURCE FOR READING CSV FILE CODE: https://mounirmesselmeni.github.io/2012/11/20/reading-csv-file-with-javascript-and-html5-file-api/

let namesList = [];
let currentWinner;
let pickedNames = [];
let fileUploaded = false;


function fileLoad() {
  // Check for the various File API support.
  var f = document.querySelector("#fileItem");
  var myfiles =f.files;
  var myfile = myfiles.item(0);

  if (window.FileReader) {
    // FileReader are supported.
    getAsText(myfile);
    fileUploaded = true;

  } else {
    alert('FileReader are not supported in this browser.');
  }
}

function getAsText(fileToRead) {
  let reader = new FileReader();
  // Read file into memory as UTF-8
  reader.readAsText(fileToRead);
  // Handle errors load
  reader.onload = loadHandler;
  reader.onerror = errorHandler;
}

function loadHandler(event) {
  let csv = event.target.result;
  processData(csv);
}

function processData(csv) {
    let allTextLines = csv.split(/\r\n|\n/);
    for (let i=1; i<allTextLines.length; i++) {
      if (allTextLines[i] != ''){
        namesList.push(allTextLines[i].replace(","," "));
      }
    }
  arrayCreated = true;
  let output = document.getElementById('result');

  }

function errorHandler(evt) {
  if(evt.target.error.name == "NotReadableError") {
      alert("Cannot read file!");
  }
}

function displayList() {
  if(!fileUploaded) {
      alert('errorModal');
    } else if (namesList.length === 0) {
      alert('emptyList');
    } else {

    let content = "<h2>List of Names</h2>"
    content +="<ul>";
    for (var i = 0; i < namesList.length; i++) {
        content += "<li>";
        content += namesList[i];
        content += "</li>";
    }
    content +="</ul>";
    let output = document.getElementById('result');
    output.innerHTML = content;
  }
}
function pickOne() {
    if(!fileUploaded) {
      openModal('errorModal');
    } else if (namesList.length === 0) {
      openModal('emptyList');
    } else {
      let min = 0;
      let max = namesList.length;
      let winnerIndex = Math.floor(Math.random() * (max - min)) + min;

      currentWinner = namesList[winnerIndex];
      let otpt = document.getElementById('picked');
      otpt.innerHTML = currentWinner;
      pickedNames.push(namesList[winnerIndex]);
      removeName(winnerIndex);
      showAllpicked();
      displayList();
    }

}


function removeName(winnerIndex) {
    namesList.splice(winnerIndex, 1);
}

function showAllpicked() {
    let content = "<h2>Previously Called Names</h2>";
    content += "<ul>";
    for (let i = 0; i < pickedNames.length; i++) {
      content += "<li>";
      content += pickedNames[i];
      content += "</li>";
    }
    content += "</ul>";
    content += "<br><br><p><a onClick=\"location.reload()\" class=\"btn btn-info\" href=\"#\" role=\"button\">Reset</a></p>";
    let otpt = document.getElementById('pickedlist');
    otpt.innerHTML = content;

}
