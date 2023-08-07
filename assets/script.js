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

/* ========================================================================= */
/* ========================================================================= */
/* ========================================================================= */

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
