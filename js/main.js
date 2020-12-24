$(function(){

$('.header__slider').slick({
	infinite: true,
	slidesToShow: 1,
  slidesToScroll: 1,
	// fade: true,
	prevArrow: '<img class="slider-arrows slider-arrows__left" src="../img/arrows-left.svg" alt="Стрелка влево">',
	nextArrow: '<img class="slider-arrows slider-arrows__right" src="../img/arrows-right.svg" alt="Стрелка вправо">',
	asNavFor: '.slider-dots' // связываем с .slider-dots
});

$('.slider-dots').slick({
	slidesToShow: 4,
	slidesToScroll: 4,
	asNavFor: '.header__slider' // связываем с .header-slider
});

  
});