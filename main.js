import './style.css'

const buttonIga = document.getElementById("button_iga")
const buttonSabalenka = document.getElementById("button_sabalenka")
const pointsIga = document.getElementById("points_iga")
const pointsSabalenka = document.getElementById("points_sabalenka")
const gemPointsIga = document.getElementById('gem_points_iga')
const gemPointsSabalenka = document.getElementById("gem_points_sabalenka")

const pointSequence = [0, 15, 30, 40, "EQL", "ADV", "GEM"];
const pointGemSequence = [0, 1, 2, 3, 4, 5, 6];

let clickCounterIga = 0;
let clickGemCounterIga = 0;
let clickCounterSabalenka = 0;
let clickGemCounterSabalenka = 0;

const clickPlusOneIga = () => {
  
    clickCounterIga++; 
   
    if (clickCounterIga > 3 && clickCounterSabalenka < 3) {
      clickCounterIga = 0;
      clickCounterSabalenka = 0;
      clickGemCounterIga++
      pointsSabalenka.innerHTML = "0";
    }
    //ciepło!!!!!
    /* pointsSabalenka.innerHTML = 0;
    gemPointsSabalenka.innerHTML = pointGemSequence[clickGemCounterSabalenka];
    clickGemCounterSabalenka = clickGemCounterSabalenka; */
    if (pointSequence[clickCounterIga] === 40 && pointSequence[clickCounterSabalenka] === 40) {
      pointSequence[clickCounterIga++]
    } if(pointSequence[clickCounterIga] === "GEM") {
      clickCounterIga = 0;
      clickGemCounterIga++
    }
      
    pointsIga.innerHTML = pointSequence[clickCounterIga];
    gemPointsIga.innerHTML= pointGemSequence[clickGemCounterIga];
    
}

 const clickPlusOneSabalenka = () => {
    clickCounterSabalenka++
    
    if (clickCounterSabalenka > 3 && clickCounterIga < 3){
      clickCounterSabalenka = 0;
      clickCounterIga = 0;
      clickGemCounterSabalenka++;
      pointsIga.innerHTML = "0";
    }

  pointsSabalenka.innerHTML = pointSequence[clickCounterSabalenka];
  gemPointsSabalenka.innerHTML = pointGemSequence[clickGemCounterSabalenka];

  
}


document.getElementById("points_sabalenka")
 
buttonIga.addEventListener("click", () => clickPlusOneIga())
buttonSabalenka.addEventListener("click", () => clickPlusOneSabalenka())


  

/* const fullGemPoint = () => {
  const pointGemSequence = [0, 1, 2, 3, 4, 5, 6];
  let pointGemCounter = 0;
  const clickPlusOneGem = (clickGemCounter) => {
    clickGemCounter = pointGemCounter;
  }
gemPointsIga.innerHTML = 

} */


