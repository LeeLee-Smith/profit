let timer;
let title = "Topky";
let titleSwitch = [
  'SKROLUJTE, BOHATSTVO VÁS ČAKÁ!',
  'SKVELÝ ŽIVOT TU >>>',
  '5 MINÚT OD BOHATSTVA!'
];
let faviconID = "#favicon";
let faviconNormal = "images/favicon.ico";
let faviconSwitch = "images/faviconSwitch.ico";
let TabIsActive = false;


function changeFav(fav, text) {
  document.title = text;
  $(faviconID).attr('href', fav)
  // $("link[rel='shortcut icon']").attr('href', fav)
}

window.onblur = () => {
  TabIsActive = false;
  setTimeout(() => {
    blink();
  }, 1000);
}

window.onfocus = () => {
  TabIsActive = true;
  blink();
}

let BlinkIsActive = false;


function blink() {
  if (TabIsActive == false) {
    timer = setInterval(function () {
      if (BlinkIsActive == false) {
        var attentionMessage = titleSwitch[Math.floor(Math.random() * titleSwitch.length)];
        changeFav(faviconSwitch, attentionMessage);
        BlinkIsActive = true;
      }
      else {
        changeFav(faviconNormal, title);
        BlinkIsActive = false;
      }
    }, 500);
  }
  else {
    changeFav(faviconNormal, title);
    clearInterval(timer);
  }
}
