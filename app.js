var activePlayer ;
var scores ;
var roundScore;
// Шоог шидэх эвент листенер
var diceDom = document.querySelector(".dice");
initGame();
function initGame(){
  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;
   document.getElementById("score-0").textContent = "0";
   document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  diceDom.style.display = "none";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}

document.querySelector(".btn-roll").addEventListener("click", function() {
  //1-6 доторх санамсаргүй нэг тоо гаргаж авна
    var diceNumber = Math.floor(Math.random() * 6) + 1;
//Шооны зургийг веб дээр гаргаж ирнэ. 
  diceDom.style.display = "block";
  //Буусан санамсаргүй тоонд харгалзах шооны зургийг веб дээр гаргаж ирнэ.
  diceDom.src = "dice-" + diceNumber + ".png";
  // Буусан тоо нь 1-ээс ялгаатай бол идэвхитэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ. 
if(diceNumber!==1){
    //1-ээс ялгаатай тоо буулаа. Буусан тоог энд нэмнэ. 
    roundScore = roundScore+ diceNumber;
    document.getElementById("current-" +activePlayer).textContent= roundScore;
}else{
    switchToNextPlayer();
}
});
document.querySelector(".btn-hold").addEventListener("click",function(){
  //Уг тоглогчийн цуглуулсан ээлжний оноог глобаль дээр нь нэмж өгнө. 
  scores[activePlayer]=scores[activePlayer]+roundScore;
  document.getElementById("score-"+activePlayer).textContent=scores[activePlayer];
  //Хожсон эсэхийг шалгах
  if(scores[activePlayer]>=20){document.getElementById("name-"+activePlayer).textContent= "Winner!!!";
  document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
  document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
}
  else{;
    switchToNextPlayer() };
});

function switchToNextPlayer(){
    roundScore=0;
    document.getElementById("current-"+activePlayer).textContent= 0;
    //Тоглогчийн 
    activePlayer === 0?(activePlayer =1):(activePlayer =0);
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceDom.style.display = "none";
}
document.querySelector(".btn-new").addEventListener("click", initGame);
