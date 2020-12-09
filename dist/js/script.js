


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
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
    
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
  
const modalTriggers = document.querySelectorAll('.popup-trigger')
const bodyBlackout = document.querySelector('.body-blackout')
const body = document.body
const popup = document.querySelector('.popup')

modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const { popupTrigger } = trigger.dataset
    const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`)


  const close = () =>{
    popupModal.classList.remove('is--visible')
    body.classList.remove('overflow')
  }


    popupModal.classList.add('is--visible')
    body.classList.add('overflow')
    
    popupModal.querySelector('.popup-modal__close').addEventListener('click', close)
    popup.addEventListener('click', (e)=>{
      if(e.target===popup || e.keyCode === 27 ){
        close()
      }
    })



    bodyBlackout.addEventListener('click', close)
    document.addEventListener('keydown',(e)=>{
  if(e.code ==="Escape"){
    close()
  }
})
  })
})



const spyScrolling = () => {
  const sections = document.querySelectorAll(".section");

  window.onscroll = () => {
    const scrollPos =
      document.documentElement.scrollTop || document.body.scrollTop;

    for (let s in sections)
      if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos) {
        const id = sections[s].id;
        document.querySelector(".active-link").classList.remove("active-link");
        document
          .querySelector(`a[href*=${id}]`)
          .parentNode.classList.add("active-link");
      }
  };
};


spyScrolling();

})

