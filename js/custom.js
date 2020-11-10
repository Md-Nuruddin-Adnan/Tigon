$(document).ready(function(){
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }

  $('.feedback-slide').slick({
    // prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-left"></i></span>',
    // nextArrow: '<span class="next-arrow"><i class="fas fa-angle-right"></i></span>',
    arrows: false,
    dots: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
  });
});

