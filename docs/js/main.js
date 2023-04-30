$(function(){
    $(".header__nav-list a, .header__top-btn, .footer__madewith-gotop").on("click", function (e) {
        //отменяем стандартную обработку нажатия по ссылке
        e.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
$('.burger , .overlay').on('click', function(e){
e.preventDefault()
$('.burger__menu').toggleClass('burger__menu--open')
$('.overlay').toggleClass('overlay--show')
})
setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.burger__menu').hasClass('burger__menu--open') === false) {
$('.burger').addClass('burger--follow')
    } else {
$('.burger').removeClass('burger--follow')
    }
}, 0)

})