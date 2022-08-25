// click wa text
const element = document.createElement('a');
const attr = document.createAttribute("href");
const attr3 = document.createAttribute("class");
attr3.value = "text-decoration-none text-white";
attr.value = "https://api.whatsapp.com/send?phone=6280000000000&text=Assalamualaikum,%20Saya%20ingin%20bertanya";
const attr2 = document.createAttribute("target");
attr2.value = "_blank";
const x = window.matchMedia("(min-width: 992px)")
const navright = document.querySelector("#nav-right");
const navbar = document.querySelector("#navbarOverlay");
const footer = document.querySelector("footer button");
const svg = footer.querySelectorAll("svg");
const text = document.createTextNode("Wa+");
// const text = document.createTextNode("click to +Wa");
// media min-width
function myFunction(x) {
  if (x.matches) { // If media query matches
    navright.classList.remove('d-none');
    navbar.classList.add('d-none');
  } else {
    navright.classList.add('d-none');
    navbar.classList.remove('d-none');
  }
}
element.appendChild(text);
element.setAttributeNode(attr);
element.setAttributeNode(attr2);
element.setAttributeNode(attr3);
function openWa() {
  svg[0].addEventListener('click', function() {
    footer.classList.replace('w-10', 'w-25');
    footer.appendChild(element);
    svg[0].classList.add('d-none');
    svg[1].classList.remove('d-none');
    svg[1].classList.add('ms-1');
  });
}
function closeWa() {
  svg[1].addEventListener('click', function() {
    footer.classList.replace('w-25', 'w-10');
    footer.removeChild(element);
    svg[0].classList.remove('d-none');
    svg[1].classList.add('d-none');
    svg[1].classList.remove('ms-1');
  });
}
openWa();
closeWa();
myFunction(x) // Call listener function at run time
x.addListener(myFunction)