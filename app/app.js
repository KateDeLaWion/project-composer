let musicStore = [

  {
    composer: "Mozart",
    movement: "audio/Little_Night.mp3"
  },
  {
    composer: "Beethoven",
    movement: "audio/Fifth_Bee.mp3"
  },
  {
    composer: "Mozart",
    movement: "audio/RondoAllaTurcaMoz.mp3"
  },
  {
    composer: "Bach",
    movement: "audio/Cello_Bach.mp3"
  },
  {
    composer: "Bach",
    movement: "audio/Air.mp3"
  }, 
  {
    composer: "Beethoven",
    movement: "audio/Fur_Elise.mp3"
  },
  {
    composer: "Mozart",
    movement: "audio/Figaro.mp3"
  },
  {
    composer: "Bach",
    movement: "audio/ToccataFugueBach.mp3"
  },
  {
    composer: "Mozart",
    movement: "audio/lullabyMoz.mp3"
  },
  {
    composer: "Beethoven",
    movement: "audio/moonlightBeeth.mp3"
  },
  {
    composer: "Beethoven",
    movement: "audio/OdeToJoyBeeth.mp3"
  },
  {
    composer: "Bach",
    movement: "audio/JoyManDesiringBach.mp3"
  },
  {
    composer: "Beethoven",
    movement: "audio/EgmontBeeth.mp3"
  },
  {
    composer: "Mozart",
    movement: "audio/Symph40Moz.mp3"
  },
  {
    composer: "Mozart",
    movement: "audio/LucioSillaMoz.mp3"
  },
  {
    composer: "Bach",
    movement: "audio/BrandenburgBach.mp3"
  },
  {
    composer: "Bach",
    movement: "audio/StMathewBach.mp3"
  },
  {
    composer: "Beethoven",
    movement: "audio/Concerto5Beeth.mp3"
  },

]


$("#round").html("Round 1   ");

let i = 0;

let userScore = 0;

let compScore = 0;


// let myVar;       it is optional

function playMusic() {
  if (i == 3 || i == 6 || i == 9 || i == 12 || i == 15) {
    console.log("RESET HIT with i being " + i);
    userScore = 0;
    compScore = 0;
  }
  let song = musicStore[i].movement;
  document.getElementById('myAudio').src = song;
  document.getElementById('myAudio').play();
  $("#grade").html("");
  $("#roundReport").html("");
  myVar = setTimeout(musicEnd, 15000);
}

function musicEnd() {
  document.getElementById('myAudio').pause();
  alert("Music ended. Please guess the composer.");

}


function match() {
  let answerJ = document.getElementById('answer').value;
  if (answerJ == musicStore[i].composer) {
    $("#grade").html("You got it! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hit Start the music button again for the next song");
    userScore++;

  }
  if (answerJ !== musicStore[i].composer) {
    $("#grade").html("You missed this song! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hit Start the music button again for the next song");
    compScore++;

  }

  whoWin();

  i++;

  if (i >= 3 && i <= 5) {
    $("#round").html("Round 2  ");
  }
  if (i >= 6 && i <= 8) {
    $("#round").html("Round 3  ");
  }
  if (i >= 9 && i <= 11) {
    $("#round").html("Round 4  ");
  }
  if (i >= 12 && i <= 14) {
    $("#round").html("Round 5  ");
  }
  if (i >= 15 && i <= 17) {
    $("#round").html("Round 6  ");
  }


  document.getElementById('answer').value = "";

}

function whoWin() {
  console.log("the user score is: " + userScore);
  console.log("the comp score is: " + compScore);

  if (userScore == 3) {
    $("#roundReport").html("You won this round. &nbsp;&nbsp;&nbsp; Score 3 to 0.  Well done! &nbsp;&nbsp;&nbsp; Hit Start button for next round.");

  }
  if (userScore == 2 && compScore == 1) {
    $("#roundReport").html("You won this round. &nbsp;&nbsp;&nbsp; Score 2 to 1.  Well done! &nbsp;&nbsp;&nbsp; Hit Start button for next round");

  }
  if (compScore == 3) {
    $("#roundReport").html("You lost this round. &nbsp;&nbsp;&nbsp; Score 0 to 3.  Sorry! &nbsp;&nbsp;&nbsp; Hit Start button for next round");

  }
  if (compScore == 2 && userScore == 1) {
    $("#roundReport").html("You lost this round. &nbsp;&nbsp;&nbsp; Score 1 to 2.  Sorry! &nbsp;&nbsp;&nbsp; Hit Start button to go to next round");

  }
}
