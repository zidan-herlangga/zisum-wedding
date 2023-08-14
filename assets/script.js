/* ========================================================================= */
// Smooth Scroll
// var scroll = new SmoothScroll('a[href*="#"]');

/* ========================================================================= */
// Navbar Hidden or Visible
const hamburger = document.querySelector(".navbar-toggler");
const stickyTop = document.querySelector(".sticky-top");

hamburger.addEventListener("click", function () {
  stickyTop.style.overflow = "visible";
});

const offcanvas = document.querySelector(".offcanvas");

offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});

/* ========================================================================= */
// Backsound Music
var track = document.getElementById("track");
var controlBtn = document.getElementById("play-pause");

function playPause() {
  if (track.paused) {
    track.play();
    //controlBtn.textContent = "Pause";
    controlBtn.className = "pause";
  } else {
    track.pause();
    //controlBtn.textContent = "Play";
    controlBtn.className = "play";
  }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function () {
  controlBtn.className = "play";
});

// Backsound Website
// function playSound(audioName, loop, pause) {
//   let audio = new Audio(audioName);
//   audio.pause = false;
//   audio.loop = true;
//   audio.play();
// }
// playSound("/music.mp3");

/* ========================================================================= */
// RSVP
function gotoWhatsapp() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let url =
    "https://wa.me/6285157066514?text=" + // Masukan no whatsapp kalian agar para tamu dapat mengirim pesan
    "Nama : " +
    name +
    "%0a" +
    +"Email : " +
    email +
    "%0a";
  "Phone : " + phone + "%0a" + "%0a" + "Pesan : " + "%0a" + message;

  window.open(url, "_black").focus();
}

/* ========================================================================= */
// CopyText-Gifts
let copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click", () => {
  let input = document.querySelector("input.text");
  input.select();
  document.execCommand("copy");
  copyText.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(function () {
    copyText.classList.remove("active");
  }, 2000);
});
