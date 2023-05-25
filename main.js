const currentLocation = location.href;
const menuItems = document.querySelectorAll("a");

for (let i = 0; i < menuItems.length; i++) {
  if (menuItems[i].href === currentLocation) {
    menuItems[i].classList.add("active");
  }
}

//Mengatur menu toggle pada navbar
const menuToggle = document.querySelector(".menu-toggle");
menuToggle.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

//Berganti tahun secara otomatis pada bagian footer
const tahun = new Date().getFullYear();
document.getElementById("tahun").innerHTML += tahun;
