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

function openPopup(popupId) {
  document.getElementById(popupId).style.display = "block";
}

function closePopup(popupId) {
  document.getElementById(popupId).style.display = "none";
}
