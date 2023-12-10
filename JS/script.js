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

const head = document.getElementById('menu');
const burger = document.getElementById('tombol-menu');

burger.addEventListener('click', function () {
  head.classList.toggle('menu-active');
});

/* login.html dan login.css */
const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
// registerBtn.addEventListener("click", () => {
//   container.classList.add("active");
// });

// loginBtn.addEventListener("click", () => {
//   container.classList.remove("active");
// });
// End Login //

//popup icon gantinya disini <===

var popupOpen = false; // Status popup, awalnya ditutup

function togglePopup() {
  popupOpen = !popupOpen; // Mengganti status

  if (popupOpen) {
    showPopup();
  } else {
    hidePopup();
  }
}

function showPopup() {
  var popup = document.getElementById('popupmenuicon');
  popup.style.display = 'block';

  // Menutup popup jika pengguna mengklik di luar popup
  function closePopup(event) {
    if (event.target !== popup && !popup.contains(event.target)) {
      hidePopup();
    }
  }

  // Menambahkan event listener untuk menutup popup
  window.addEventListener('click', closePopup);

  // Tambahkan event listener untuk menutup popup saat ikon user diklik
  document.querySelector('.icon-user i').addEventListener('click', function (event) {
    event.stopPropagation(); // Mencegah event sampai ke window
  });
}

function hidePopup() {
  var popup = document.getElementById('popupmenuicon');
  popup.style.display = 'none';

  // Hapus event listener setelah popup ditutup
  window.removeEventListener('click', closePopup);
}

function handleFavorite() {
  // Implementasi logika untuk fungsi Favorite di sini
  alert("Favorite clicked!");
}

function handleLogout() {
  // Implementasi logika untuk fungsi Log Out di sini
  alert("Log Out clicked!");
}

// Your existing JavaScript code

function handleFavorite() {
    // Show the new popup for "Favorite"
    document.getElementById("popup-favorite").style.display = "block";
}

function closeFavoritePopup() {
    // Close the new popup for "Favorite"
    document.getElementById("popup-favorite").style.display = "none";
}

// Button fav di pop up destinasi
function toggleFavorite(button) {
  button.classList.toggle('favorite');
  if (button.classList.contains('favorite')) {
    button.innerHTML = '<i class="fas fa-heart"></i> Favorite';
  } else {
    button.innerHTML = '<i class="far fa-heart"></i> Favorite';
  }
  button.style.backgroundColor = button.classList.contains('favorite') ? '#3498db' : '#fff';
  button.style.borderColor = button.classList.contains('favorite') ? '#3498db' : '#3498db'; 

  button.style.color = button.classList.contains('favorite') ? '#fff' : '#3498db';
}

// Tombol Goto destinasi di dalam pop up user
function goToDestination() {
    alert('Navigating to the destination...');
}

// get destination fron db
window.onload = () => {
  getDestinations();
  handleSearch();
};

let destinations = [];

async function getDestinations() {
  try {
    const res = await fetch("https://be-2-bandung-2-production.up.railway.app/destination/get");
    const resJson = await res.json();
    destinations = resJson;
    mappingDestinations(destinations);
  } catch (error) {
    console.error('Error fetching destinations:', error);
  }
}

// mapping destinations
async function mappingDestinations(destinations) {
  boxContainer.innerHTML = ''; // Clear existing content

  for (let i = 0; i < destinations.length; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    const card = `
      <div class="image">
        <img src="${destinations[i].image}" alt="" />
      </div>
      <div class="content"> 
      <h3>${destinations[i].title}</h3>
      <p>${truncateText(destinations[i].location, 30)}</p>
      <button class="read-more-button" onclick="openPopup(${destinations[i].id})">
        <p3>Read More > </p3>
      </button>
    </div>`;
    div.innerHTML = card;
    boxContainer.append(div);
  }
}

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
}

// fitur search
function handleSearch() {
  const searchTerm = searchBox.value.toLowerCase();

  const filteredDestinations = destinations.filter(destination =>
    destination.title.toLowerCase().includes(searchTerm) ||
    destination.location.toLowerCase().includes(searchTerm)
  );

  mappingDestinations(filteredDestinations);
}

const searchBox = document.getElementById('search-box');
const boxContainer = document.querySelector(".box-container");

searchBox.addEventListener('input', handleSearch);

// popup pkonya 
function openPopup(id) {
  const destination = findDestinationById(id);

  if (destination) {
    document.getElementById('popup-title').innerText = destination.title;
    document.getElementById('popup-time').innerHTML = `<i class="far fa-clock time-icon"></i> ${destination.time}`;
    document.getElementById('popup-location').innerHTML = `<i class="fas fa-map-marker-alt location-icon"></i> ${destination.location}`;
    document.getElementById('popup-description').innerText = destination.description;

    const popupImage = document.getElementById('popup-img');
    popupImage.src = destination.image; // Set the image source directly

    document.getElementById('popup').style.display = 'block';
  } else {
    console.error(`Destination with id ${id} not found.`);
  }
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function findDestinationById(id) {
  // Assume destinations is an array containing all destination data
  return destinations.find(destination => destination.id === id);
}

// fitur contact us
async function postMessage() {
  const nameField = document.getElementById('nameField');
  const emailField = document.getElementById('emailField');
  const messageField = document.getElementById('messageField');
 
  const body = 
     {
       fullname: nameField.value,
       email: emailField.value,
       message: messageField.value,
     };
 
  const response = await fetch('https://be-2-bandung-2-production.up.railway.app/contactus/create', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(body),
  });
 
  if (response.ok) {
     alert('Pesan terkirim');
  } else {
     alert('Gagal mengirim pesan. Silakan coba lagi');
  }
 }