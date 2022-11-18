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
  
  button1.style.display = "block";
  button1.textContent = "ja";
  button1.onclick = loadChooseSnowboardOrSkisScene;
  // <button onclick="loadChooseSnowboardOrSkisScene()">ja</button>
  
  button2.style.display = "block"
  button2.textContent = "nej";
  button2.onclick = showYouSureInformation;
}

function showYouSureInformation() {
  alert("är du säker?");
}

function loadChooseSnowboardOrSkisScene() {
  informationText.textContent = "Nu ska du får välja snowboard eller skidor";
  
  button1.textContent = "Snowboard";
  button1.onclick = LoadOnWayToLiftScene;
  
  button2.textContent = "Skidor";
  button2.onclick = loadSkiNotWaxedScene;
}

function loadSkiNotWaxedScene() {
  informationtext.textContent = "Attans skidorna är inte vallade ännu, du får ta snowboard istället. *Du börjar gå mot liften*";
  
  button1.textContent = "Fortsätt";
  button1.onclick = LoadOnWayToLiftScene;

  button2.style.display = "none";
}

function LoadOnWayToLiftScene() {
  informationtext.textContent = "*Du börjar gå mot liften och ser ett rep och en lavinspade* Vilken plockar du upp?";
  
  button1.textContent = "Repet";
  button1.onclick = loadGoUpTheLiftScene;
  
  button2.style.display = "block";
  button2.textContent = "Spaden";
  button2.onclick = loadGoUpTheLiftScene;
}

function loadGoUpTheLiftScene() {
  informationtext.textContent = "*Nu är du framme vid liften och åker upp i liften. Väl i liften så stannar maskineriet. Du har suttit i liften i 10 minuter* Vad gör du?";
  
  button1.textContent = "Använder repet och klättrar ner";
  button1.onclick = loadGetDownFromLiftScene;
  
  button2.textContent = "Sitter kvar";
  button2.onclick = LoadLiftStartsMoveForward;
}

function loadGetDownFromLiftScene() {
  informationtext.textContent = "*Du tänker för dig själv vilken tur att jag tog med mig repet och inte spaden och åker nerför berget.*"

  button1.textContent = "Fortsätt";
  button1.onclick = loadSnowMonsterScene;
  
  button2.style.display = "none";
}

function LoadLiftStartsMoveForward() {
  informationtext.textContent = "*Liften börjar rulla igen. Väl uppe kliver du av liften och ska precis bege dig neråt när ett UFO plötsligt dyker upp!! UFOT skjuter ut en ljusstråla och börjar suga upp människor. Stråler fortsätter mot dig.* Vad gör du?"

  button1.textContent = "Börjar åka utför";
  button1.onclick = loadLiemannenScene;
  
  button2.textContent = "Står helt lamslagen";
  button2.onclick = LoadInsideSpaceShipScene;
}

function loadSnowMonsterScene() {
  informationtext.textContent = "*På vägen ner dyker plötsligt det lokala snömonstret upp. Han säger att han kommer ta ditt liv om du inte svarar rätt på hans fråga* 'Vad kallas en inverterad snurr i slopestyle?'"

  button1.textContent = "Cork";
  button1.onclick = LoadGoToAfterskiScene;
  
  button2.style.display = "block";
  button2.textContent = "Vert";
  button2.onclick = loadGameOverScene;
}

function LoadInsideSpaceShipScene() {
  informationtext.textContent = '*Du blir uppsugen i UGO:t. Där uppe befinner sig varleser som ser exakt ut som oss förutom att deras huvuden är "alien"-formade. Dom har också snowboards och genstikulerar och visar med kroppsspåk "Hur för man??" Aliensen parkerar UFO:t och alla kliver ut och börjar åka tillsammans nerför. Helt plötsligt utbryter en lavin och en alien fastnar under snön*'

  button1.textContent = "Använd spaden";
  button1.onclick = LoadGoToAfterskiScene;
  
  button2.textContent = "Gräver för hand";
  button2.onclick = loadAlienDeadScene;
}

function LoadGoToAfterskiScene() {
  informationtext.textContent = "*Ni lyckas gräva fram alien. Alla är superglada och vill fira* Hur ska ni fira?"

  button1.textContent = "Afterski";
  button1.onclick = LoadGoToAfterskiScene;
  
  button2.textContent = "Tar ett sista åk";
  button2.onclick = loadSistaÅkText;
}

function loadSistaÅkText() {
  informationtext.textContent = "Man ska ALDRIG ta ett sista åk"

  button1.textContent = "Fortsätt";
  button1.onclick = loadGameOverScene;
  
  button2.style.display = "none"
}

function loadAlienDeadScene() {
  informationtext.textContent = "*Alien dör. De andra aliensen blir förtvivlade och förbannade och skjuter ihjäl alla med alienpistol* Lose"

  button1.style.display = "block";
  
  button1.textContent = "Fortsätt";
  button1.onclick = loadGameOverScene;
}

function loadGameOverScene() {
  informationtext.textContent = "Game Over"

  button1.textContent = "Börja om"
  button1.onclick = loadStartScene;

  button2.style.display = "none";
}

