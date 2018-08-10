
var pseudoName="";
var result = document.getElementById("result");
var affichageEndGame = document.getElementById("endGame");
affichageEndGame.style.display = "none";

function getPseudoAndHideGameLaucher() {
  pseudoName = document.getElementById("pseudo").value.toUpperCase();
  document.getElementById("beforeGameStart").style.display = "none";

}



var nbPointsJoueur = 0;
var nbPointsOrdi = 0;

function choice(element) {

  var tableauOrdi = ["PIERRE", "PAPIER", "CISEAUX"];
  var choixOrdi = tableauOrdi[Math.floor(Math.random()*tableauOrdi.length)];
  var choixJoueur = element.id;

//Gère la bataille

  if (choixJoueur === choixOrdi) {
    result.innerHTML = "Egalité : " + pseudoName + " joue " + choixJoueur + " et l'ordinateur joue " + choixOrdi;
  }

  else if (((choixJoueur === "PIERRE") && (choixOrdi === "PAPIER")) || ((choixJoueur === "PAPIER") && (choixOrdi === "CISEAUX")) || ((choixJoueur === "CISEAUX") && (choixOrdi === "PIERRE"))) {

    result.innerHTML = pseudoName + " joue " + choixJoueur + " et l'ordinateur joue " + choixOrdi + "L'ordinateur gagne !";
    nbPointsOrdi++;
    document.getElementById("updateComputerScore").innerHTML = nbPointsOrdi;

  }else{
    result.innerHTML = pseudoName + " joue " + choixJoueur + " et l'ordinateur joue " + choixOrdi + pseudoName + " gagne !";
    nbPointsJoueur++;
    document.getElementById("updatePlayerScore").innerHTML = nbPointsJoueur;
  }

//Gère la fin de la partie

  if (nbPointsOrdi === 3) {
    document.getElementById("insideGame").style.display = "none";
    affichageEndGame.style.display = "block";
    document.getElementById("finalMessage").innerHTML = "Vous avez perdu la partie !";

  }
  else if (nbPointsJoueur === 3) {
    document.getElementById("insideGame").style.display = "none";
    affichageEndGame.style.display = "block";
    document.getElementById("finalMessage").innerHTML = "Vous avez gagné la partie !";

  }

}
