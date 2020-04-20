$(document).ready(function() {
  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - 75
    }, 750)
  })
});

// About-me section
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    target.classList.add('active')
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
});

// Fade in and out
const faders = document.querySelectorAll('.fade-in');
const sliders =document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  })
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider)
});

// Navigation bar
$(function() {
  $(".toggle").on("click", function() {
    if($(".item").hasClass("active")) {
      $(".item").removeClass("active");
    }
    else {
      $(".item").addClass("active");
    }
  })
});

// For making the anchor go a little bit above the desired output
function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 75);
  }
}

$(document).on('click', 'a[href^="#"]', function(event) {
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

window.setTimeout(offsetAnchor, 0);
