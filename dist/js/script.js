


document.addEventListener('DOMContentLoaded', function(){ 

  
  
  const navClose = document.querySelector('#nav-close')
  const menuBtn = document.querySelector('.menu__btn')
  const menuList =document.querySelector('.menu__list')
  const menuBg= document.querySelector('.bg-invisible')
 
  function toogle() {
    menuList.classList.toggle('active')
    menuBg.classList.toggle('active')
    if(menuList.classList.contains('active')){
      document.body.style.overflow = "hidden";
    }
    else{
      document.body.style.overflow = "inherit";
    }

  }

  menuBtn.addEventListener('click', toogle)
  navClose.addEventListener('click',toogle)
  menuBg.addEventListener('click', toogle)




  function testWebP(callback) {
    var webP = new Image()
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2)
    }
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
  }
  
  testWebP(function (support) {
    if (support == true) {
      document.querySelector("body").classList.add("webp")
    } else {
      document.querySelector("body").classList.add("no-webp")
    }
  })
  
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    slidesPerGroup: 1,
      spaceBetween: 30,
      freeMode: false,
      // autoplay: {
      //   delay: 1500,
      //   disableOnInteraction: false,
      // },
    
  });


  const links = document.querySelectorAll(".hero-anchor ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
  

})


