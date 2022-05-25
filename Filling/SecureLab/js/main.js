$(function(){
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="/images/arrow-prev.svg" alt="prev"></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="/images/arrow-next.svg" alt="next"></button>',
    });
    
    //Tabs
    $('.tab').on('click', function(e) {
        e.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

        $('.product-slider').slick('setPosition');

    });

    $('.product-item__favourite').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('product-item__favourite--active');
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product__slider-btn product__slider-btnprev"><img src="/images/arrow-dark-prev.svg" alt="prev"></button>',
        nextArrow: '<button class="product__slider-btn product__slider-btnnext"><img src="/images/arrow-dark-next.svg" alt="next"></button>'
    });

    //JqueryFormStyler
    $('.filter-style').styler();

    //Drop-down
    $('.filter__item-drop, .filter__extra').on('click', function() {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('200');
    });

    //JS Range Slider
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100000,
        max: 500000,
        hide_from_to: true
    });

    //Buttons toggle grid/line cards view
    $('.catalog__filter-btngrid').on('click', function() {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').removeClass('product-item__wrapper--list');
    });

    $('.catalog__filter-btnline').on('click', function() {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
        
        $('.product-item__wrapper').addClass('product-item__wrapper--list');
        $('.catalog__filter-btnline')
    });

    //Rate

    $(".rate-yo").rateYo({
        normalFill: "#c4c4c4",
        ratedFill: "#1c62cd",
        spacing: "7px"
    });
});