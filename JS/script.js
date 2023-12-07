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
    // Add your logic for what should happen when "Go to Destination" is clicked
    alert('Navigating to the destination...');
    // You can replace the alert with your actual navigation logic
}

window.onload = () => {
  // getDestinations();
  mappingDestinations();
};

async function getDestinations() {
  const res = await fetch("url/asdas/"); // urlnya dideploy team BE
  const resJson = await res.json();
}

const form = document.querySelector('.form-field');

form.addEventListener('submit', postMessage);

async function postMessage() {
  const name = document.querySelector('.name-field');
  const email = document.querySelector('.email-field');
  const message = document.querySelector('.message-field');
  const data = {
    name: name.value,
    email: email.value,
    message: message.value
  }
  const res = await fetch("url", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }); // urlnya dideploy team BE
  const resJson = await res.json();
}

// hardcode response BE
const datas = [
  {
    title: "Lawang Sewu",
    location: "Semarang",
    image:
      "https://kampus-merdeka-software-engineering.github.io/FE-2-Bandung-2/Assets/lawang_sewu.png",
    id_popup: "pop-lawang"
  },
  {
    title: "Kuil Sam Poo Kong",
    location: "Semarang",
    id_popup: "pop-candi",
    image:
      "https://kampus-merdeka-software-engineering.github.io/FE-2-Bandung-2/Assets/kuil_sam.png",
  },
  {
    title: "Candi Gedong Songo",
    location: "Semarang",
    id_popup: "pop-kuil",
    image:
      "https://kampus-merdeka-software-engineering.github.io/FE-2-Bandung-2/Assets/candi_gedong.png",
  },
  {
    title: "Taman Bunga Celosia",
    location: "Semarang",
    id_popup: "pop-taman",
    image:
      "https://kampus-merdeka-software-engineering.github.io/FE-2-Bandung-2/Assets/taman_celosia.png",
  },
  {
    title: "Curug Lawe Benowo",
    location: "Semarang",
    id_popup: "pop-curug",
    image:
      "https://kampus-merdeka-software-engineering.github.io/FE-2-Bandung-2/Assets/curug_lawe.png",
  },
  {
    title: "Dusun Semilir",
    location: "Semarang",
    id_popup: "pop-dusun",
    image:
      "https://kampus-merdeka-software-engineering.github.io/FE-2-Bandung-2/Assets/dusun_semilir.png",
  },
  {
    title: "Kopeng Treetop Adventure",
    location: "Semarang",
    id_popup: "pop-kopeng",
    image:
      "https://kampus-merdeka-software-engineering.github.io/FE-2-Bandung-2/Assets/kopeng.png",
  },
  {
    title: "Museum Ambarawa",
    location: "Semarang",
    id_popup: "pop-museum",
    description: "Kopeng Treetop Adventure is an adventure park located in Kopeng, Central Java, Indonesia. The park is located in the middle of the forest and offers various adventure activitie such as treetop walking, flying fox, and various other challenges at high altitude.",
    image:
      "https://kampus-merdeka-software-engineering.github.io/FE-2-Bandung-2/Assets/museum_ambarawa.png",
  },
];

// looping response data
const boxContainer = document.querySelector(".box-container");

function mappingDestinations() {
  for (let i = 0; i < datas.length; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    const card = `
      <div class="image">
        <img src="${datas[i].image}" alt="" />
      </div>
      <div class="content">
        <h3>${datas[i].title}</h3>
        <p>${datas[i].location}</p>
        <button onclick="openPopup('${datas[i].id_popup}')">
          <p3>Read More > </p3>
        </button>
      </div>`;
    div.innerHTML = card;
    boxContainer.append(div);
  }
}