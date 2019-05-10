let del_mode = 0;

$(document).on('click', '#fade', function() {
    $('.link_div').fadeToggle('slow');
    console.log('fade clicked')
});

$(document).on('click', '#addLink', function () {
    let name = $('#linkName').val();
    let link = $('#linkUrl').val();
    if (name.length > 0 && link.length > 0) {
        $('.linkUl').append(
            $('<li>').attr('class', 'list-group-item').append(
                $('<a>').attr('href', link).append(
                    name
                )
            )
        )
    }
    console.log('addLink clicked')
});

$(document).on('click', '#del', function() {
    if (del_mode){
        del_mode = 0;
    } else{
        del_mode = 1;
    }
    console.log('del clicked')
})

$(document).on('click', function (event) {
    console.log('clicked')
    $target = $(event.target)
    if (del_mode && $target.attr('id') != 'del'){
        $target.hide();
    }
});

console.log('links.js loaded')