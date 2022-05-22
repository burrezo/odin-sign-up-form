
let inputs = document.querySelectorAll('input:not([type="submit"])');

inputs.forEach((input) => {
    input.addEventListener("keyup", () => {
        input.style.backgroundColor = "white";
    })

    input.addEventListener("blur", () => {
        if (input.checkValidity()) input.style.backgroundColor = "white";
        else input.style.backgroundColor = "lightcoral";
    })
}, false);

let confirmPasswInput = document.getElementById("confirmpassw");

confirmPasswInput.addEventListener("blur", () => {

    let psw1 = document.getElementById("passw").value;
    let psw2 = document.getElementById("confirmpassw").value;

    if (psw1.length !== psw2.length) confirmPasswInput.style.backgroundColor = "lightcoral"
}, false);

confirmPasswInput.addEventListener("keyup", () => {

    let btnsubmit = document.getElementById("btn-submit");

    let psw1 = document.getElementById("passw").value;
    let psw2 = document.getElementById("confirmpassw").value;

    if (psw1 !== psw2) {
        btnsubmit.disabled = true;
        if ((psw1.length === psw2.length) && (psw1.length > 0) && (psw2.length > 0)) confirmPasswInput.style.backgroundColor = "lightcoral";
    }

    else {
        btnsubmit.disabled = false;
        confirmPasswInput.style.backgroundColor = "white";
    } 

}, false);