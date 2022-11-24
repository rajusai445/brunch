$('.navbar').on('mouseenter focusin', '.navbar-item > a', function (e) {
    $(this)
        .parent('.navbar-item')
        .addClass('active')
        .siblings('.navbar-item')
        .removeClass('active')
});