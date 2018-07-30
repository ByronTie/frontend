"use strict";

$(document).ready(function () {

    $("#cother").on('click', function (event) {
        $("#other")[0].disabled = !this.checked;
    });

    $("#signup").on('reset', function (event) {
        $("label.error").hide();
        event.target.reset();
    });

    $("#signup").validate({
        // Specify validation rules
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                pwdcheck: true
            },
            confirmPassword: {
                required: true,
                equalTo: password
            },
            referrer: {
                required: true
            },
            tos: {
                required: true
            },
            other: {
                required: function required() {
                    return !!$("#cother:checked");
                }
            }
        },
        // Specify validation error messages
        messages: {
            name: "Please enter your firstname",
            email: "Please enter a valid email address",
            password: {
                required: "Please provide a password",
                pwdcheck: "Please include an uppercase, lowercase, number and two non-alphanumeric characters in the password"
            },
            confirmPassword: {
                required: "Please provide a password",
                equalTo: "Please enter the same password as above"
            },
            referrer: {
                required: "Please select a referrer"
            },
            other: {
                required: "Please provide a referrer in the 'other' field"
            },
            tos: {
                required: "Please accept the Terms of Service before signing up"
            }
        },

        submitHandler: function submitHandler(form) {
            // form.submit();
            var memberName = $('#name').val();
            $('.alert').text("Thanks for signing up, " + memberName).show();
        }

    });

    $.validator.addMethod("pwdcheck", function (value, element) {
        return (/[A-Z]/.test(value) && //uppercase
            /[a-z]/.test(value) && //lowercase
            /\d/.test(value) && //numeric
            value.match(/[^A-Za-z\d]/g).length > 1
        ); //two non-alphanumeric
    });
});