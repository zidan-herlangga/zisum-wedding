/* ========================================================================= */
/* ========================================================================= */
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
/* ========================================================================= */
/* ========================================================================= */

simplyCountdown(".simply-countdown", {
  year: 2023, // required
  month: 11, // required
  day: 20, // required
  hours: 8, // Default is 0 [0-23] integer
  words: {
    //words displayed into the countdown
    days: { singular: "hari", plural: "hari" },
    hours: { singular: "jam", plural: "jam" },
    minutes: { singular: "menit", plural: "menit" },
    seconds: { singular: "detik", plural: "detik" },
  },
});

/* ========================================================================= */
/* ========================================================================= */
/* ========================================================================= */

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

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
