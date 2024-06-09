function bgChanger() {
  let navbar = document.getElementById("navbar");
  let scrollvalue = window.scrollY;
  if(scrollvalue < 150) {
    navbar.classList.remove('bgColor')
  } else {
    navbar.classList.add('bgColor')
  }
}

window.addEventListener("scroll", bgChanger);
