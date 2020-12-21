jQuery(document).ready(function ($) {

    $('#submit').on('click', function () {

        var email1 = $('#email1').val();
        var email2 = $('#email2').val();
        var password1 = $('#password1').val();
        var password2 = $('#password2').val();

        if (email1 != '' && email2 != '' && password1 != ' ' && password2 != '') {

            if (email1 == email2 && password1 == password2) {
                alert('Successfully Login');
            } else {
                alert('Email or Password Not matched');
            }

        } else {
            alert('Insert Your Email and Password');
        }

    })

});