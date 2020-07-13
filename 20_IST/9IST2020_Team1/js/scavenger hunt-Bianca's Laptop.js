var hunton = true;
hunt1text.classList.add("hidden");
hunt2text.classList.add("hidden");


function firstpart() {
  if (hunton == true){
    hunt1text.classList.remove("hidden");
  }
}

hunt1.onclick = firstpart;

//function secondpart() {
  //if (hunton == true) {
    //hunt2text.classList.remove("hidden");
//  }
//}

//hunt2.onclick = secondpart;
