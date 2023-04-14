$(function(){
    $('.directions__filter-item').on('click', function(){
        $('.directions__filter-item').removeClass('directions__filter-item--active')
        $(this).addClass('directions__filter-item--active')
    })
})