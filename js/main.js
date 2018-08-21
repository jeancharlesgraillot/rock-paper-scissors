
var pseudoName="";
var result = document.getElementById("result");
var affichageEndGame = document.getElementById("endGame");
affichageEndGame.style.display = "none";



function getPseudoAndHideGameLaucher() {
  pseudoName = document.getElementById("pseudo").value.toUpperCase();
  document.getElementById("beforeGameStart").style.display = "none";
  document.getElementById("gameCanStart").style.display = "block";
  document.getElementById("pseudoJoueur").innerHTML = pseudoName;
}



var nbPointsJoueur = 0;
var nbPointsOrdi = 0;
var pierre = document.getElementById("PIERRE");
var papier = document.getElementById("PAPIER");
var ciseaux = document.getElementById("CISEAUX");

function choice(element) {

  var tableauOrdi = ["PIERRE", "PAPIER", "CISEAUX"];
  var choixOrdi = tableauOrdi[Math.floor(Math.random()*tableauOrdi.length)];
  var choixJoueur = element.id;

//Gère la bataille

  if (choixJoueur === choixOrdi) {

    result.innerHTML = "Egalité ! : " + pseudoName + " joue " + choixJoueur + " et l'ordinateur joue " + choixOrdi + ".";
  }

  else if (((choixJoueur === "PIERRE") && (choixOrdi === "PAPIER")) || ((choixJoueur === "PAPIER") && (choixOrdi === "CISEAUX")) || ((choixJoueur === "CISEAUX") && (choixOrdi === "PIERRE"))) {

    result.innerHTML = pseudoName + " joue " + choixJoueur + " et l'ordinateur joue " + choixOrdi + ", l'ordinateur gagne !.";
    nbPointsOrdi++;
    document.getElementById("updateComputerScore").innerHTML = nbPointsOrdi;

  }else{
    result.innerHTML = pseudoName + " joue " + choixJoueur + " et l'ordinateur joue " + choixOrdi + ", " + pseudoName + " gagne !.";
    nbPointsJoueur++;
    document.getElementById("updatePlayerScore").innerHTML = nbPointsJoueur;
  }

  switch (choixJoueur) {
    case "PIERRE":
      if (choixOrdi === "PIERRE") {
        papier.style.display ="none";
        ciseaux.style.display ="none";

        setTimeout(function () {
          papier.style.display ="block";
          ciseaux.style.display ="block";
        }, 2000);

      }
      else if (choixOrdi === "PAPIER") {
        ciseaux.style.display ="none";
        document.getElementById("handsImgContainer").classList.add("justify-content-between");
        setTimeout(function () {
          ciseaux.style.display ="block";
          document.getElementById("handsImgContainer").classList.remove("justify-content-between");
        }, 2000);

      }
      else if (choixOrdi === "CISEAUX") {
        papier.style.display ="none";
        document.getElementById("handsImgContainer").classList.add("justify-content-between");
        setTimeout(function () {
          papier.style.display ="block";
          document.getElementById("handsImgContainer").classList.remove("justify-content-between");
        }, 2000);

      }
      break;

    case "PAPIER":
      if (choixOrdi === "PAPIER") {
        pierre.style.display ="none";
        ciseaux.style.display ="none";
        setTimeout(function () {
          pierre.style.display ="block";
          ciseaux.style.display ="block";
        }, 2000);

      }
      else if (choixOrdi === "CISEAUX") {
        pierre.style.display ="none";
        document.getElementById("handsImgContainer").classList.add("justify-content-between");
        setTimeout(function () {
          pierre.style.display ="block";
          document.getElementById("handsImgContainer").classList.remove("justify-content-between");
        }, 2000);

      }
      else if (choixOrdi === "PIERRE") {
        ciseaux.style.display ="none";
        document.getElementById("handsImgContainer").classList.remove("justify-content-center");
        document.getElementById("handsImgContainer").classList.add("justify-content-between");
        document.getElementById("handsImgContainer").classList.add("flex-row-reverse");
        setTimeout(function () {
          ciseaux.style.display ="block";
          document.getElementById("handsImgContainer").classList.add("justify-content-center");
          document.getElementById("handsImgContainer").classList.remove("justify-content-between");
          document.getElementById("handsImgContainer").classList.remove("flex-row-reverse");
        }, 2000);

      }
      break;

    case "CISEAUX":
      if (choixOrdi === "CISEAUX") {
        pierre.style.display ="none";
        papier.style.display ="none";
        setTimeout(function () {
          pierre.style.display ="block";
          papier.style.display ="block";
        }, 2000);

      }
      else if (choixOrdi === "PIERRE") {
        papier.style.display ="none";
        document.getElementById("handsImgContainer").classList.remove("justify-content-center");
        document.getElementById("handsImgContainer").classList.add("justify-content-between");
        document.getElementById("handsImgContainer").classList.add("flex-row-reverse");

        setTimeout(function () {
          papier.style.display ="block";
          document.getElementById("handsImgContainer").classList.add("justify-content-center");
          document.getElementById("handsImgContainer").classList.remove("justify-content-between");
          document.getElementById("handsImgContainer").classList.remove("flex-row-reverse");
        }, 2000);

      }
      else if (choixOrdi === "PAPIER") {
        pierre.style.display ="none";
        document.getElementById("handsImgContainer").classList.remove("justify-content-center");
        document.getElementById("handsImgContainer").classList.add("justify-content-between");
        document.getElementById("handsImgContainer").classList.add("flex-row-reverse");
        setTimeout(function () {
          pierre.style.display ="block";
          document.getElementById("handsImgContainer").classList.add("justify-content-center");
          document.getElementById("handsImgContainer").classList.remove("justify-content-between");
          document.getElementById("handsImgContainer").classList.remove("flex-row-reverse");
        }, 2000);

      }
      break;
    default:

  }

//   function myMove(name) {
//   var kirby = document.getElementById("kirby");
//   var metaKnight = document.getElementById("kirby");
//   var pos = 0;
//   var id = setInterval(frame, 5);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       kirby.style.top = pos + 'px';
//       kirby.style.left = pos + 'px';
//     }
//   }
// }



//Gère la fin de la partie
  if (nbPointsOrdi === 3) {
    setTimeout(function () {
      document.getElementById("insideGame").style.display = "none";
      affichageEndGame.style.display = "block";
      document.getElementById("finalMessage").innerHTML = "Vous avez perdu la partie !";
    }, 2000);


  }
  else if (nbPointsJoueur === 3) {
    setTimeout(function functionName() {
      document.getElementById("insideGame").style.display = "none";
      affichageEndGame.style.display = "block";
      document.getElementById("finalMessage").innerHTML = "Vous avez gagné la partie !";
    }, 2000);
  }
}
