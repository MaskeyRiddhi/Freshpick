// Date Set up
const dateElement = document.getElementById('date');
if (dateElement) {
  dateElement.innerHTML = new Date().getFullYear();
}

// Add hovered class to selected list item
let listItems = document.querySelectorAll('.navigation li');

function activeLink() {
  listItems.forEach((item) => {
    item.classList.remove('hovered');
  });
  this.classList.add('hovered');
}

listItems.forEach((item) => item.addEventListener('mouseover', activeLink));

// Menu Toggle
let toggleButton = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

if (toggleButton) {
  toggleButton.onclick = function () {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
  };
}
