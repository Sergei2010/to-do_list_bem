$(function () {

    $('.list__item_hide').on('click', function () {
            $(this).parent('.list__item-open').css('display', 'none');
            $(this).parent('.list__item-close').css('display', 'none');
            if(($('.list__item_hide').is(':visible'))) {
            console.clear();
            console.log('Ещё есть видимые элементы!');
            }
            else if(($(this).is(':hidden'))) {
                    $('.list').append($('<article class="list__item-empty"><p class="list__item_text">' +
                    'Список' + ' пуст' + ' ...</p></article>')).css('display', 'block');
            console.clear();
            console.log('Теперь нет видимых элементов!');

            }
    });

    $(".open").on('click', function () {
        if ($(this).parent('.to_do_open').attr('class') === 'to_do_open') {
            $(this).attr('src', 'style/img/close_icon.png');
            $(this).parent('.to_do_open').attr('class', 'to_do_close');
        } else if ($(this).parent('.to_do_close').attr('class') === 'to_do_close') {
            $(this).attr('src', 'style/img/open_icon.png');
            $(this).parent('.to_do_close').attr('class', 'to_do_open');
        }
    });

    $('#add_to_do').on('click', function () {
        $('#to_do_next').attr('id','');
        $("#to_do_1")
            .clone(true)
            .appendTo("#to_do_list")
            .attr({id: 'to_do_next', class: 'to_do_open'})
            .css('display', 'block');
        $('#to_do_next h3').text($('#name_field').val());
        $('#to_do_next p').text($('#desc_field').val());
        $('.to_do_new textarea').val('');
        $('.list_is_empty').remove();
    });
});
