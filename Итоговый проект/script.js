let boton = document.querySelector('.block');
boton.addEventListener('click', () => {
    let element = document.querySelector('.shad');
    element.style.display = 'contents';
});


$('.bxslider').bxSlider({
    minSlides: 3,
    maxSlides: 7,
    slideWidth: 400,
    slideMargin: 10,
    infiniteLoop: true,
    hideControlOnEnd: true,
  });

