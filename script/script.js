// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

const button = document.getElementById('interactive-button');
const container = document.querySelector('.button-container');

container.addEventListener('mousemove', moveButton);
requestAnimationFrame(moveButton);

function moveButton(event) {
  const mouseX = event.clientX;
  const buttonRect = button.getBoundingClientRect();
  const buttonX = buttonRect.left + buttonRect.width / 2;
  const distanceX = mouseX - buttonX;

  const moveX = distanceX > 0 ? -150 : 150;
  button.style.transform = `translateX(${moveX}px)`;
}

function handleButtonClick() {
  // Handle button click event
}


navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})


const form = document.getElementById('contact-form');
 
form.addEventListener('submit', function (event) {
  const formValues = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      message: form.elements.message.value
  };

  const errors = validate(formValues, constraints);

  if (errors) {
    event.preventDefault();
    const errorMessage = Object
        .values(errors)
        .map(function (fieldValues) { return fieldValues.join(', ')})
        .join("\n");

    //alert(errorMessage);
  }
}, false);