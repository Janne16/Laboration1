// window.chooseSkisOrSnowboard('DOMContentLoaded', main);
window.main('DOMContentLoaded', main);


// FRÅGA DAVID hur det funkar med main/chooseSkisOrSnowboard
// FRÅGA DAVID om debugen, funkar ej

function main() {
    const introductionOfAdventureAlert = alert("Välkommen till Johans snöiga äventyr!")
    const descriptionOfAdventureAlert = alert("Vi befinner oss i st. Anton. Det är mitt i vintern, -10 och strolande sol.")
    const firstQuestionOfAdventureAlert = alert("Vi ska börja med att ta oss upp i liften och här kommer det första, och absolut viktigaste, valet, skidor eller snowboard:")
    chooseSkisOrSnowboard();
    chooseJumpOrStay();
    // call other function in future....
    
}

function chooseSkisOrSnowboard() {

    const questionSkisOrSnowboard = prompt("Skriv 'skidor' eller 'snowboard' (eller 'börja om' för att börja)");

    if (questionSkisOrSnowboard == "skidor") {
        alert("Rackars! Skidorna har inte hunnit vallas än... Du får tyvärr välja snowboard. Tryck 'ok' för att välja snowboard");
    }
    else if (questionSkisOrSnowboard == "snowboard") {
        alert("Bra val! Nu ska vi ta oss upp i liften");
    }
    else if (questionSkisOrSnowboard == "börja om") {
        const confirmationQuestion = prompt("är du säkert? 'ja' eller 'nej'");
        if (confirmationQuestion == "ja") {
            main();
        }
        else if (confirmationQuestion == "nej") {
            alert("okej då väljer vi skidor eller snowboard!");
            chooseSkisOrSnowboard();
        }
    }

    else {
        alert("Testa igen! Någonting blev fel");
        chooseSkisOrSnowboard();
    }
}

function chooseJumpOrStay() {
    let questionJumpOrStay = prompt("'hoppa' eller 'sitta kvar");
    if (questionJumpOrStay == 'hoppa') {
        alert("Ajdå, du dog.");
    }
    else if (questionJumpOrStay == "sitt kvar") {
        alert("Liften börjar rulla efter 5 minuter");
    }
    else {
        alert("Testa igen! Någonting blev fel");
        chooseJumpOrStay();
    }
}




















// window.addEventListener('DOMContentLoaded', main);

// function main() {
//   addEventListeners();
//   // call other function in future....
// }

// function addEventListeners() {
//   const burgerMenuButton = document.getElementById('burger-menu');
//   burgerMenuButton.onclick = toggleMenu;
//   // burgerMenuButton.addEventListener('click', toggleMenu);
// }
 
// function toggleMenu() {
//   const header = document.querySelector("header");
//   header.classList.toggle("open");
// }