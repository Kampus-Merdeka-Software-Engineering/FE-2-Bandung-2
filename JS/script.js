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
// registerBtn.addEventListener("click", () => {
//   container.classList.add("active");
// });

// loginBtn.addEventListener("click", () => {
//   container.classList.remove("active");
// });
// End Login //

// Popup Session //
function openPopup(popupId) {
  document.getElementById(popupId).style.display = "block";
}

function closePopup(popupId) {
  document.getElementById(popupId).style.display = "none";
}
// End Popup Session //

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
    description: " Kopeng Treetop Adventure is an adventure park located in Kopeng, Central Java, Indonesia. The park is located in the middle of the forest and offers various adventure activitie such as treetop walking, flying fox, and various other challenges at high altitude.",
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
