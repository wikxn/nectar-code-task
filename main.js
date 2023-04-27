document.addEventListener('DOMContentLoaded', () => {
  const headerWrap = document.querySelector('.header')
  const hamburger = headerWrap.querySelector('.header__hamburger-wrap')
  const navMenu = headerWrap.querySelector('.header__nav');

  const faqAccordions = document.querySelector('.faq__content')
  const faqQuestions = faqAccordions.querySelectorAll('.faq__accordion-wrap')

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active')
  })

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      question.classList.toggle('active')
    })
  })

  new Splide( '#awards-slider', {
    arrows: false,
    autoplay: true,
    gap: '8px'
  } ).mount();

  new Splide('#products-slider', {
    perPage: 2,
    gap: '7px'
  }).mount()

  var main = new Splide('#image-slider', {
    arrows: false,
    autoplay: true,
    gap: '8px',
    pagination: false,
    breakpoints: {
      992: {
        pagination: true
      }
    }
  });


  var thumbnails = new Splide( '#thumbnail-slider', {
    fixedWidth  : 77,
    fixedHeight : 58,
    gap         : 8,
    rewind      : true,
    pagination  : false,
    cover       : true,
    isNavigation: true,
    arrows: false,
  } );

  main.sync( thumbnails );
  main.mount();
  thumbnails.mount();

})