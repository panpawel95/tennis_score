import './style.css'
const buttonIga = document.getElementById("button_iga");
const buttonSabalenka = document.getElementById("button_sabalenka");
const pointsIga = document.getElementById("points_iga");
const pointsSabalenka = document.getElementById("points_sabalenka");
const gemPointsIga = document.getElementById('gem_points_iga');
const gemPointsSabalenka = document.getElementById("gem_points_sabalenka");

const pointSequence = [0, 15, 30, 40, "EQL", "ADV"];
const pointGemSequence = [0, 1, 2, 3, 4, 5, 6];

let clickCounterIga = 0;
let clickGemCounterIga = 0;
let clickCounterSabalenka = 0;
let clickGemCounterSabalenka = 0;

const clickPlusOneIga = () => {
    if (pointSequence[clickCounterIga] === 40 && pointSequence[clickCounterSabalenka] === 40) {
        // Obsłuż sytuację "40:40"
        if (pointSequence[clickCounterIga + 1] === "EQL") {
            pointSequence[clickCounterIga + 1] = "ADV";
        } else if (pointSequence[clickCounterIga + 1] === "ADV") {
            // Jeśli już jest "ADV", oznacz jako "EQL" i zwiększ licznik dla obu zawodników
            pointSequence[clickCounterIga + 1] = "EQL";
            clickCounterIga++;
            clickCounterSabalenka++;
        } else {
            clickCounterIga++;
        }
    } else {
        clickCounterIga++;
    }

    if (clickCounterIga > 3) {
        clickCounterIga = 0;
        clickGemCounterIga++;
    }

    pointsIga.innerHTML = pointSequence[clickCounterIga];
    gemPointsIga.innerHTML = pointGemSequence[clickGemCounterIga];
};

const clickPlusOneSabalenka = () => {
    if (pointSequence[clickCounterIga] === 40 && pointSequence[clickCounterSabalenka] === 40) {
        // Obsłuż sytuację "40:40"
        if (pointSequence[clickCounterSabalenka + 1] === "EQL") {
            pointSequence[clickCounterSabalenka + 1] = "ADV";
        } else if (pointSequence[clickCounterSabalenka + 1] === "ADV") {
            // Jeśli już jest "ADV", oznacz jako "EQL" i zwiększ licznik dla obu zawodników
            pointSequence[clickCounterSabalenka + 1] = "EQL";
            clickCounterIga++;
            clickCounterSabalenka++;
        } else {
            clickCounterSabalenka++;
        }
    } else {
        clickCounterSabalenka++;
    }

    if (clickCounterSabalenka > 3) {
        clickCounterSabalenka = 0;
        clickGemCounterSabalenka++;
    }

    pointsSabalenka.innerHTML = pointSequence[clickCounterSabalenka];
    gemPointsSabalenka.innerHTML = pointGemSequence[clickGemCounterSabalenka];
};

buttonIga.addEventListener("click", () => clickPlusOneIga());
buttonSabalenka.addEventListener("click", () => clickPlusOneSabalenka());