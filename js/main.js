const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "images/burger-open.svg"
    } else {
        navBtnImg.src = "images/burger-open.svg"
    }
}


$(document).ready(function(){
    $('.header-slider').slick({
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 500,
    });
  });

  $(document).ready(function(){
    $('.benefits-slider').slick({
        arrows: false,
        dots: true,
    });
  });

  // $('.how-order-slider').slick({
  //   centerMode: true,
  //   centerPadding: '30px',
  //   slidesToShow: 1,
  //   dots: false,
  // });

  // $('.how-order-slider ').slick({
  //   slidesToShow: 1,
  //   arrows: false,
  //   dots: false,
  //   infinite: true,
  //   centerMode: true,
  //   speed: 500,
  // });

  
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.border = "none"; // скрыть бордер, когда аккордеон свернут
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.border = "1px solid black"; // отобразить бордер, когда аккордеон раскрыт
    } 
  });
}