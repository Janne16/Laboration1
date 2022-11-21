window.addEventListener('DOMContentLoaded', main);


/** Start of program */
function main() {
  loadHtmlElements();
  loadStartScene();
}
/** Declares 3 elements that will be used throughout the hole game*/
function loadHtmlElements() {
  informationText = document.getElementById('informationtext');
  button1 = document.getElementById('answer-1');
  button2 = document.getElementById('answer-2');
}
/** Loads start scene.*/
function loadStartScene() {
  informationtext.textContent = "Välkommen till ett snöigt äventyr! Vill du påbörja äventyret?";
  
  button1.style.display = "block";
  button1.textContent = "Ja";
  button1.onclick = loadChooseSnowboardOrSkisScene;
  
  button2.style.display = "block"
  button2.textContent = "Nej";
  button2.onclick = showYouSureInformation;
}

// Shows alert that asks you if you are sure /** Loads start scene.*/
function showYouSureInformation() {
  alert("är du säker?");
}

/** Loads ChooseSnowboardOrSkisScene*/
function loadChooseSnowboardOrSkisScene() {
  informationText.textContent = "Du och ett gäng vänner är i Bad Gastein och ska åka utför. Nu ska du får välja snowboard eller skidor";
  
  button1.textContent = "Snowboard";
  button1.onclick = loadGoUpTheLiftScene;
  
  button2.textContent = "Skidor";
  button2.onclick = loadSkiNotWaxedScene;
}

/** Loads SkiNotWaxedScene*/
function loadSkiNotWaxedScene() {
  informationtext.textContent = "Attans skidorna är inte vallade ännu, du får ta snowboard istället.";
  
  button1.textContent = "Fortsätt";
  button1.onclick = loadGoUpTheLiftScene;

  button2.style.display = "none";
}

/** Loads GoUpTheLiftScene*/
function loadGoUpTheLiftScene() {
  
  informationtext.textContent = "*Ni börjar gå mot liften. Nu är ni framme vid liften och åker upp i liften. Väl i liften så stannar maskineriet. Ni har suttit i liften i 10 minuter* Vad gör ni?";
  
  button1.textContent = "Hoppar ner";
  button1.onclick = loadGetDownFromLiftScene;
  
  button2.style.display = "block";
  button2.textContent = "Sitter kvar";
  button2.onclick = LoadLiftStartsMoveForward;
}

/** Loads GetDownFromLiftScene*/
function loadGetDownFromLiftScene() {
  informationtext.textContent = "*Ni landar mjuk i en snöhög, ställer er upp och åker nerför berget.*"

  button1.textContent = "Fortsätt";
  button1.onclick = loadSnowMonsterScene;
  
  button2.style.display = "none";
}

/** Loads LiftStartsMoveForward.*/
function LoadLiftStartsMoveForward() {
  informationtext.textContent = "*Liften börjar rulla igen. Väl uppe kliver ni av liften och ska precis bege dig neråt när ett UFO plötsligt dyker upp!! UFOT skjuter ut en ljusstråle och börjar suga upp människor. Strålen fortsätter mot er.* Vad gör ni?"

  button1.textContent = "Börjar åka utför";
  button1.onclick = loadSnowMonsterScene;
  
  button2.textContent = "Står helt lamslagen";
  button2.onclick = LoadInsideSpaceShipScene;
}

/** Loads SnowMonsterScene*/
function loadSnowMonsterScene() {
  informationtext.textContent = "*På vägen ner dyker plötsligt det lokala snömonstret upp. Han säger att han kommer ta era liv om ni inte svarar rätt på hans fråga* 'Vad kallas en inverterad snurr i slopestyle?'"

  button1.textContent = "Cork";
  button1.onclick = LoadGoToAfterskiScene;
  
  button2.style.display = "block";
  button2.textContent = "Vert";
  button2.onclick = loadGameOverScene;
}

/** Loads InsideSpaceShipScene*/
function LoadInsideSpaceShipScene() {
  informationtext.textContent = '*Ni blir uppsugna i UFO:t. Där uppe befinner sig varleser som ser exakt ut som oss förutom att deras huvuden är "alien"-formade. Dom har också snowboards och gestikulerar och visar med kroppsspåk "Hur för man??" Aliensen parkerar UFO:t och alla kliver ut och börjar åka tillsammans nerför. Helt plötsligt utbryter en lavin och en alien fastnar under snön*'

  button1.textContent = "Ni börjar gräva";
  button1.onclick = LoadGoToAfterskiScene;
  
  button2.textContent = "Ni börjar åka därifrån";
  button2.onclick = loadAlienShootYouInHeadScene;
}

/** Loads GoToAfterskiScene.*/
function LoadGoToAfterskiScene() {
  informationtext.textContent = "*Ni lyckades. Alla är superglada och vill fira* Hur ska ni fira?"

  button1.textContent = "Afterski";
  button1.onclick = loadTheEndScene;
  
  button2.textContent = "Tar ett sista åk";
  button2.onclick = loadSistaÅkText;
}

/** Loads SistaÅkText*/
function loadSistaÅkText() {
  informationtext.textContent = "Man ska ALDRIG ta ett sista åk"

  button1.textContent = "Fortsätt";
  button1.onclick = loadGameOverScene;
  
  button2.style.display = "none"
}

/** Loads AlienShootYouInHeadScene*/
function loadAlienShootYouInHeadScene() {
  informationtext.textContent = "*Alien ser er smita och skjuter alla med sin laserpistol*"

  button1.style.display = "block";
  
  button1.textContent = "Fortsätt";
  button1.onclick = loadGameOverScene;
  
  button2.style.display = "none"
}

/** Loads GameOverScene*/
function loadGameOverScene() {
  informationtext.textContent = "Game Over"

  button1.textContent = "Börja om"
  button1.onclick = loadStartScene;

  button2.style.display = "none";
}

/** Loads TheEndScene*/
function loadTheEndScene() {
  informationtext.textContent = "Väl på afterskin har alla så kul att äventyret tar slut. The End!"

  button1.style.display = "none";
  button2.style.display = "none";
}

