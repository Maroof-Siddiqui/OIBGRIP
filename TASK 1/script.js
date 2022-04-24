let searchbox = document.querySelector('.search_form');

document.querySelector('#search-btn').onclick = () => {
  searchbox.classList.toggle('active');
}

let loginform = document.querySelector('.login_form_container');

document.querySelector('#login-btn').onclick = () => {
  loginform.classList.add('active');
  searchbox.classList.remove('active');
}

document.querySelector('#close-btn').onclick = () => {
  loginform.classList.remove('active');
}

window.onload = () =>{
  fadeOut();
}

function loader(){
  document.querySelector('.loader_container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader , 4000);
}


var swiper = new Swiper(".book_slider", {
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured_slider", {
  spaceBetween: 10,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals_slider", {
  spaceBetween: 10,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  }, pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review_slider", {
  spaceBetween: 10,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  }, 
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blog_slider", {
  spaceBetween: 10,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  }, 
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});