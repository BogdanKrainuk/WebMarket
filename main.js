$(document).ready(function() {

    function resizeDivs() {
        let search = $('.search-form');
        let logo = $('.header-container > .logo')
        if ($('.max-width-1439px').is(':visible')) {
            $('.btn-order').after(search);
        } else {
            $('.h-container-menu').before(search)
        }
        if ($('.max-width-1023px').is(':visible')) {
            $('.btn-order').before(logo);
        } else {
            $('.header-container').prepend(logo);
        }
    }
    $(resizeDivs);
    $(window).resize(resizeDivs);

    var button = $('#btn-up');
    $(window).scroll (function () {
        if ($(this).scrollTop () > 500) {
            button.css('display', 'flex');
        } else {
            button.fadeOut();
        }
    });
    button.on('click', function(){
        $('body, html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    $('#description-field').keyup(function () {
        $('#description-field').attr({ minLength : 20 });
        var max = 5000;
        var min = 20;
        $('#simbol').css('color', 'red');
        let number = $(this).val().length;
        if (number <= min) {
            $('#simbol').text(+number + '/ 5000 символов (минимум 20)');
        }
        else if (number >= max) {
            $('#description-field').attr({ maxLength : 5000 });
            $('#simbol').text(+number + '/ 5000 символов (минимум 20)');
        }
        else {
            $('#simbol').css('color', '#A6A6A6');
            $('#simbol').text(+number + '/ 5000 символов (минимум 20)');
        }
    });

    $('.field-budget').keyup(function () {
        this.value = this.value.replace(/[^0-9.]/g, '');
    });

    $("#quantity").on("input", function(){
        $("#day").val(this.value);
    });

    let page1 = $('.page-1');
    let page2 = $('.page-2');
    let page3 = $('.page-3');
    let form = $('form');
    let line = $('.progress-line');

    page2.remove();
    page3.remove();

    form.on('click', '#next-1', function () {
        form.append(page2);
        page1.remove();
        $('.num-2').addClass('active');
        line.css('background', 'linear-gradient(to right,#d1de52 70%,#ececec 0');
        line.removeClass('done-33');
        line.addClass('done-66');
    });
    form.on('click', '#prev-2', function () {
        page2.remove();
        form.append(page1);
    });
    form.on('click', '#prev-3', function () {
        page3.remove();
        form.append(page2);
    });
    form.on('click', '#next-2', function () {
        page2.remove();
        form.append(page3);
        $('.num-3').addClass('active');
        line.css('background', 'linear-gradient(to right,#d1de52 100%,#ececec 0');
        line.removeClass('done-66');
        line.addClass('done-100');
    });

});