var newnote = document.querySelector(".btn-newnote");
var savenote = document.querySelector(".btn-savenote");
var filesave = document.querySelector(".btn-filesave");
var about = document.querySelector(".btn-about");
var fullscreen = document.querySelector(".btn-fullscreen");

var div = document.getElementById('about');
var memo = document.getElementById('memo');

window.onload = onloadFunction;
function onloadFunction(e){
  if (localStorage.length != 0) {
    memo.value = localStorage.getItem(1);
  }
}

newnote.addEventListener('click', clickedNewnote);
function clickedNewnote(e){
    memo.value = '';
}

savenote.addEventListener('click', clickedSavenote);
function clickedSavenote(e){
  if (typeof(localStorage) == 'undefined') {
    alert('localStorage .')
  }else {
    try {
      localStorage.setItem("1", memo.value);
    } catch (e) {
      if (e == QUATA_EXCEEDED_ERR) {
        alert('localStorage .')
      }
    }
  }
}

filesave.addEventListener('click', clickedFilesave);
function clickedFilesave(e){
  var blob = new Blob([localStorage.getItem(1)], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "note-content-download.txt");
}

var flag = false;
about.addEventListener('click', clickedAbout);
function clickedAbout(e){
  flag = !flag;

  if (flag) {
    div.innerHTML = "<span>기말고사, 백기훈 작<span>";
  }else {
    div.innerHTML = "";
  }
}

fullscreen.addEventListener('click', clickedFullscreen);
function clickedFullscreen(e){
  if (screenfull.enabled) {
		screenfull.request();
	}
}
