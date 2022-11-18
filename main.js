window.addEventListener('DOMContentLoaded', main);


/** Start of program */
function main() {
  loadHtmlElements();
  loadStartScene();
}
/** Puts elements on variables so i can change their value and reuse them */
function loadHtmlElements() {
  informationText = document.getElementById('informationtext');
  button1 = document.getElementById('answer-1');
  button2 = document.getElementById('answer-2');
}
/** loads start scene*/
function loadStartScene() {
  informationtext.textContent = "Välkommen till ett snöigt äventyr! Vill du påbörja äventyret?";
  
  button1.textContent = "ja";
  button1.onclick = loadChooseSnowboardOrSkisScene;
  // <button onclick="loadChooseSnowboardOrSkisScene()">ja</button>
  
  button2.textContent = "nej";
  button2.onclick = showFuckYouInformation;
}

function showFuckYouInformation() {
  alert("är du säker?");
}

function loadChooseSnowboardOrSkisScene() {
  informationText.textContent = "Nu ska du får välja snowboard eller skidor"
  
  button1.textContent = "Snowboard";
  button1.onclick = loadGoUpTheLiftScene;
  
  button2.textContent = "Skidor";
  button2.onclick = loadSkiNotWaxedScene;
}

function loadSkiNotWaxedScene() {
  informationtext.textContent = "Attans skidorna är inte vallade ännu, du får ta snowboard istället. Vill du åka upp i liften?";
  
  button1.textContent = "ja";
  button1.onclick = loadGoUpTheLiftScene;
  
  button2.textContent = "nej";
  button2.onclick = loadGoUpTheLiftScene;
}

function loadGoUpTheLiftScene() {
  informationtext.textContent = "Nu ska vi åka upp i liften. Väl i liften så stannarmaskineriet. Du har suttit i liften i 10 minuter. Vad gör du?";
  
  button1.textContent = "Hoppar ur liften";
  button1.onclick = loadYouDiedScene;
  
  button2.textContent = "Sitter kvar";
  button2.onclick = LoadLiftStartingToMoveBackwards;
}

function loadYouDiedScene() {
  informationtext.textContent = "Du dog. The End"

  button1.style.display = "none";

  button2.style.display = "none";

  // button1.textContent = "Hoppar ur liften";
  // button1.onclick = loadYouDiedScene;
  
  // button2.textContent = "Sitter kvar";
  // button2.onclick = LoadLiftStartingToMoveBackwards;
}

function LoadLiftStartingToMoveBackwards() {
  informationtext.textContent = "Liften börjar sakna rulla baklänges. Vad gör du?"

  button1.textContent = "Hoppar ur liften";
  button1.onclick = loadYouDiedScene;
  
  button2.textContent = "Sitter kvar";
  button2.onclick = LoadLiftStopsAndStartsMoveForward;
}

function LoadLiftStopsAndStartsMoveForward() {
  informationtext.textContent = "Lifter stannar och börjar sedan rulla framåt. Du kliver av liften och ska precis bege dig neråt när ett UFO plötsligt dyker upp!!"

  button1.textContent = "inget"
  button1.onclick = ""
  
  button2.textContent = ""
  button2.onclick = ""
}