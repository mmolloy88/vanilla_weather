const widgetBackground = document.getElementById("theme-background");

// white theme

const whiteButton = document.getElementById("whiteButton");

whiteButton.addEventListener("click", switchWhite);

function switchWhite() {
  widgetBackground.classList.remove("dark-theme");
  widgetBackground.classList.remove("theme-blue");
  widgetBackground.classList.remove("theme-orange");
  widgetBackground.classList.add("light-theme");
}

// black theme

const blackButton = document.getElementById("blackButton");

blackButton.addEventListener("click", switchBlack);

function switchBlack() {
  widgetBackground.classList.remove("light-theme");
  widgetBackground.classList.remove("theme-blue");
  widgetBackground.classList.remove("theme-orange");
  widgetBackground.classList.add("dark-theme");
}
// blue theme

const blueButton = document.getElementById("blueButton");

blueButton.addEventListener("click", switchBlue);

function switchBlue() {
  widgetBackground.classList.remove("light-theme");
  widgetBackground.classList.remove("dark-theme");
  widgetBackground.classList.remove("theme-orange");
  widgetBackground.classList.add("theme-blue");
}

// orange theme

const orangeButton = document.getElementById("orangeButton");

orangeButton.addEventListener("click", switchOrange);

function switchOrange() {
  widgetBackground.classList.remove("light-theme");
  widgetBackground.classList.remove("dark-theme");
  widgetBackground.classList.remove("theme-blue");
  widgetBackground.classList.add("theme-orange");
}
