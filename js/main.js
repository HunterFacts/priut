M.AutoInit();

$('.login-button-container .btn').click(function(){
    $('.section-login').removeClass('hidden')
});

$('.close-card .material-icons').click(function(){
    $('.section-login').addClass('hidden')
});

$(".dropdown-trigger").dropdown({
    constrainWidth: false,
    coverTrigger: false
});

const swiperDog = new Swiper('.swiper-container-dogs', {
    speed: 400,
    spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination-main',
        type: 'bullets',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next-main',
        prevEl: '.swiper-button-prev-main',
    },
    loop: true
});

$(".dropdown-trigger-dog").dropdown();

$('.sidenav').sidenav();

$('select').formSelect();
$('.nav-block-container .collection-item .btn').click(function(){
    let currentBtn = $(this);
    let collectionObject = currentBtn.parent();
    let collection = collectionObject.parent();
    $(collection).find('.btn').html('Занять до');
})

var swiper = new Swiper(".swiper-partner", {
    slidesPerView: 3,
    spaceBetween: 0,
    freeMode: true, 
  });

const swiperNewsMain = new Swiper('.swiper-news', {
    speed: 400,
    slidesPerView: 2,
    spaceBetween: 100,
    navigation: {
        nextEl: '.swiper-button-next-main',
        prevEl: '.swiper-button-prev-main',
    },
    loop: true
});

