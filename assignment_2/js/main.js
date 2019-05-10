function validateForm(){

    let name_form = $('#Name').children().last().val();
    const letter_regex = /^[a-zA-Z ]+$/;

    let city_form = $('#City').children().last().val();

    let age_form = $('#Age').children().last().val();
    const age_regex = /^[0-9]+$/;

    let number_form = $('#Number').children().last().val();
    const number_regex = /^[0-9+]+$/;

    let email_form = $('#Email').children().last().val();
    const email_regex = /^[^ ]+@[a-zA-Z.]+\.[a-zA-Z]+$/;

    let fail_message = $('#form-alert');

    if (!(letter_regex.test(name_form))){
        fail_message.html('Name is incorrect');
        fail_message.show();
        return 0;
    } else if (!(age_regex.test(age_form))){
        fail_message.html('Age is incorrect');
        fail_message.show();
        return 0;
    } else if (!(letter_regex.test(city_form))){
        fail_message.html('City is incorrect');
        fail_message.show();
        return 0;
    } else if (!(email_regex.test(email_form))){
        fail_message.html('Email address is incorrect');
        fail_message.show();
        return 0;
    } else if (!(number_regex.test(number_form))){
        fail_message.html('Phone number is incorrect');
        fail_message.show();
        return 0;
    } else{
        return 1;
    };
}

function writeFormData(){
    if (validateForm()){
        let fail_message = $('#form-alert');
        name_value = $('#Name').children().last().val();
        age_value = $('#Age').children().last().val();
        city_value = $('#City').children().last().val();
        email_value = $('#Email').children().last().val();
        number_value = $('#Number').children().last().val();
        var info = {
            name:name_value,
            age:age_value,
            city:city_value,
            email:email_value,
            number:number_value
        };
        fail_message.hide();
    }
}

function EraseFormData(){
    $('#Contact_form')[0].reset();
    let fail_message = $('#form-alert');
    fail_message.hide();

}


function activeContactTab(){
    $('#links').attr('class', 'tab-pane')
    $('#contact').attr('class', 'tab-pane active')
    $('#link-tab').attr('class', 'nav-link')
    $('#contact-tab').attr('class', 'nav-link active')
}

function activeLinkTab(){
    $('#links').attr('class', 'tab-pane active')
    $('#contact').attr('class', 'tab-pane')
    $('#link-tab').attr('class', 'nav-link active')
    $('#contact-tab').attr('class', 'nav-link')
}

$(function() {
    $('#Submit').on('click', writeFormData);
    $('#Erase').on('click', EraseFormData);
    $('#myTab').children().first().on('click', activeLinkTab);
    $('#myTab').children().last().on('click', activeContactTab);
});