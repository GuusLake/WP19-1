$(document).ready(function () {
    // These variables will be true if all fields are entered correctly
    let name_check, age_check, mail_check, place_check;

    $('#name').on('input', function () {

        let name_form = $('#name').val();
        const letter_regex = /^[a-zA-Z ]+$/;

        if (name_form !== '') {
            if (!(letter_regex.test(name_form))) {
                // Make form invalid
                $('#name').addClass('is-invalid');
                $('#name').removeClass('is-valid');
                name_check = false;
                // Change submit button to div
                $('#form_btn').replaceWith('<div type="submit" class="btn btn-primary" id="form_btn">Submit</div>');
            } else {
                // Make form valid
                $('#name').addClass('is-valid');
                $('#name').removeClass('is-invalid');
                name_check = true;
                // Check if all fields are entered correctly and change the div back to a button
                if (name_check && age_check && mail_check && place_check){
                    $('#form_btn').replaceWith('<button type="submit" class="btn btn-primary" id="form_btn">Submit</button>');
                }
            }
        }
    })

    $('#age').on('input', function () {
        let age_form = $('#age').val();
        const number_regex = /^[0-9+]+$/;

        if (age_form !== '') {
            if (!(number_regex.test(age_form))) {
                // Make form invalid
                $('#age').addClass('is-invalid');
                $('#age').removeClass('is-valid');
                age_check = false;
                // Change submit button to div
                $('#form_btn').replaceWith('<div type="submit" class="btn btn-primary" id="form_btn">Submit</div>');
            } else {
                // Make form valid
                $('#age').addClass('is-valid');
                $('#age').removeClass('is-invalid');
                age_check = true;
                // Check if all fields are entered correctly and change the div back to a button
                if (name_check && age_check && mail_check && place_check){
                    $('#form_btn').replaceWith('<button type="submit" class="btn btn-primary" id="form_btn">Submit</button>');
                }            }
        }
    })

    $('#mail').on('input', function () {
        let mail_form = $('#mail').val();
        const mail_regex = /^[^ ]+@[a-zA-Z.]+\.[a-zA-Z]+$/;

        if (mail_form !== '') {
            if (!(mail_regex.test(mail_form))) {
                // Make form invalid
                $('#mail').addClass('is-invalid');
                $('#mail').removeClass('is-valid');
                mail_check = false;
                // Change submit button to div
                $('#form_btn').replaceWith('<div type="submit" class="btn btn-primary" id="form_btn">Submit</div>');
            } else {
                // Make form valid
                $('#mail').addClass('is-valid');
                $('#mail').removeClass('is-invalid');
                mail_check = true;
                // Check if all fields are entered correctly and change the div back to a button
                if (name_check && age_check && mail_check && place_check){
                    $('#form_btn').replaceWith('<button type="submit" class="btn btn-primary" id="form_btn">Submit</button>');
                }            }
        }
    })

    $('#place').on('input', function () {
        let place_form = $('#place').val();
        const letter_regex = /^[a-zA-Z ]+$/;

        if (place_form !== '') {
            if (!(letter_regex.test(place_form))) {
                // Make form invalid
                $('#place').addClass('is-invalid');
                $('#place').removeClass('is-valid');
                place_check = false;
                // Change submit button to div
                $('#form_btn').replaceWith('<div type="submit" class="btn btn-primary" id="form_btn">Submit</div>');
            } else {
                // Make form valid
                $('#place').addClass('is-valid');
                $('#place').removeClass('is-invalid');
                place_check = true;
                // Check if all fields are entered correctly and change the div back to a button
                if (name_check && age_check && mail_check && place_check){
                    $('#form_btn').replaceWith('<button type="submit" class="btn btn-primary" id="form_btn">Submit</button>');
                }            }
        }
    })
});