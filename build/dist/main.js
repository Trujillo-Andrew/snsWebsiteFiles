document.getElementById("copyYear").innerHTML = new Date().getFullYear();

// 

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      // reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Reveal Left Function

function revealLeft() {
  var reveals = document.querySelectorAll(".revealLeft");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      // reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealLeft);

// Reveal Right Function

function revealRight() {
  var reveals = document.querySelectorAll(".revealRight");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      // reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealRight);

// Reveal Bottom Function

function revealBottom() {
  var reveals = document.querySelectorAll(".revealBottom");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      // reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealBottom);

// scrollbar animation


var nav = document.querySelector('#nav');
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 800) {
    nav.classList.add('bg-desertSand', 'shadow');
  } else {
    nav.classList.remove('bg-desertSand', 'shadow')
  }
} )







