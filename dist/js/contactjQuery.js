"use strict";

$(document).ready(() => {
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    const cellPattern = /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/;
    const zipPattern = /([0-9]{4})/;

    const TFIR = "This field is required.";
    const IR = " is required.";
    const MBVE = "This field must be valid email.";

    //Move Focus to the arrival date textbox
    $("#first_name").focus();
    $("#state").val("MO");

    $("#email_form input:radio").change(function () {
        if ($(this).val() == "No") {
            $(".contactVia").attr('checked', false);
            $(".contactVia").attr('disabled', true);
            $(".wrap").css('opacity', '.2');

        }
        // Else Enable radio buttons.
        else {
            $(".contactVia").attr('disabled', false);
            $(".wrap").css('opacity', '1');

        }
    });


    $("#email_form").submit(evt => {
        let isValid = true;



        // validate the email entry with a regular expression
        const email = $("#email_1").val().trim();
        if (email == "") {
            $("#email_1").next().text(TFIR);
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#email_1").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email_1").next().text("");
        }
        $("#email_1").val(email);


        // prevent the submission of the form if any entries are invalid 
        if (!isValid) {
            evt.preventDefault();
        }
    });// end function






    const errors = [];

    function displayImage(src, width, height) {
        var img = document.createElement("img");
        img.src = src;
        img.width = width;
        img.height = height;

        document.querySelector('.thanksIMG').append(img);


    }

    const joinList = () => {
        // get user entries from text boxes
        const email1 = $("#email_1").value;
  
        // check user entries
        let isValid = true;

        

        if (email1 == "") {
            errors[errors.length] = "Email is required.";

            isValid = false;
        } else {
            $("#email_1_error").textContent = "";
        }






        // submit the form if user entries are valid
        if (isValid) {
            clearError();
            displayImage('/dist/images/thankYou.png', 331, 152);
            $("#email_form").submit();
        }
    };


    const displayError = () => {
        let errorDisplay = "";
        for (let i = 0; i < errors.length; ++i) {
            errorDisplay += errors[i] + "\n";
        }

        $("#error_display").value = errorDisplay;
        errors.length = 0;

    }

    const clearError = () => {
        let errorDisplay = "";
        for (let i = 0; i < errors.length; ++i) {
            errors[i] = "";
        }

        $("#error_display").value = "";
        errors.length = 0;
    }

   











});
