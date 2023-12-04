// Navbar session //
document.addEventListener("DOMContentLoaded", function () {
  var nav = document.querySelector("nav");

  // Add an event listener to detect scrolling
  window.addEventListener("scroll", function () {
    // Check if the page has been scrolled down
    if (window.scrollY > 0) {
      // Add a class to the navbar when scrolled
      nav.classList.add("scrolled");
    } else {
      // Remove the class when back to the top
      nav.classList.remove("scrolled");
    }
  });
});
// End Navbar Session //

//Slide Session //
function changeSlide(slideNumber) {
  document.getElementById("radio" + slideNumber).checked = true;
}

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000); // Pergantian slide setiap 5 detik
// End Slide Session //

/* login.html dan login.css */
const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
// End Login //

// Popup Session //
function openPopup(popupId) {
  document.getElementById(popupId).style.display = "block";
}

function closePopup(popupId) {
  document.getElementById(popupId).style.display = "none";
}
// End Popup Session //