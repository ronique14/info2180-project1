/* Add your JavaScript to this file */
function validate(email) {

    var email = document.getElementById("email").value;
    var message = document.querySelector("message");
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(pattern)) {
        message.classList.add("valid");
        message.classList.remove("invalid");
        text.innerHTML = "Thank you! Your email address has been added to our mailing list";



    }
    else {
        message.classList.remove("valid");
        message.classList.add("invalid");
        text.innerHTML = "Please enter a valid email address";

    }

}


