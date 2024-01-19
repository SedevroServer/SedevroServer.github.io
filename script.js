
let light = document.getElementById("light");
let info = document.getElementById("contact-info");
let infoClose = document.getElementById("info-close");
let rulesI = document.getElementById("rules-info");
let faqI = document.getElementById("FAQ-info");
let startI = document.getElementById("start-info");
let startBtn = document.getElementById("start-btn");
let menuBtn = document.getElementById("minBtn");
let menu = document.getElementById("min-menu");

function contacts(){
  light.className = "light-off";
  info.className = "info";
  menu.classList = "hidden";

}

function rules(){
  light.className = "light-off";
  rulesI.className = "info";
  menu.classList = "hidden";

}

function faq(){
  light.className = "light-off";
  faqI.className = "info";
  menu.classList = "hidden";

}

function Close(){
  if(info.className == "info"){
    light.className = "light-on";
    info.className = "hidden";

  }

  if(rulesI.className == "info"){
    light.className = "light-on";
    rulesI.className = "hidden";

  }

  if(faqI.className == "info"){
    light.className = "light-on";
    faqI.className = "hidden";

  }

  if(startI.className == "info"){
    light.className = "light-on";
    startI.className = "hidden";

  }

}
function start(){
  light.className = "light-off";
  startI.className = "info";
  menu.classList = "hidden";
}
function menuClose(){
  menu.classList = "hidden";
  light.className = "light-on";
}
function menuCloseL(){
  if(menu.className == "min-menu"){
  menu.classList = "hidden";
  light.className = "light-on";
  }
}
menuBtn.addEventListener('click', event => {
  light.className = "light-off";
  menu.className = "min-menu";
});
