document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('nav ul li a:not(:only-child)');
    var navDropdowns = document.querySelectorAll('.nav-dropdown');
    var html = document.querySelector('html');
    var navToggle = document.getElementById('nav-toggle');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            var dropdown = this.nextElementSibling;
            if (dropdown.classList.contains('nav-dropdown')) {
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                e.stopPropagation();
            }
        });
    });

    html.addEventListener('click', function () {
        navDropdowns.forEach(function (dropdown) {
            dropdown.style.display = 'none';
        });
    });

    navToggle.addEventListener('click', function () {
        var navUl = document.querySelector('nav ul');
        if (navUl.style.display === 'none' || navUl.style.display === '') {
            navUl.style.display = 'block';
        } else {
            navUl.style.display = 'none';
        }
        navToggle.classList.toggle('active');
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}

