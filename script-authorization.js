'use strict';

function showHidePassword(target, input){
    if (input.getAttribute('type') == 'password') {
        target.classList.add('view');
        input.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        input.setAttribute('type', 'password');
    }
    return false;
}

//Вход
let inputUserLogin = document.getElementById('inputUserLogin');
let inputUserPassword = document.getElementById('inputUserPassword');

let warningUserLogin = document.getElementById("warningUserLogin");
let warningUserPassword = document.getElementById("warningUserPassword");

let enterBtnUser = document.getElementById('enterBtnUser');
let warningEnterBtnUser = document.getElementById('warningEnterBtnUser');

showWarningMinMax(inputUserLogin, warningUserLogin, "Логин", 4, 12);
showWarningMinMax(inputUserPassword, warningUserPassword, "Пароль", 6, 16);


let inputAdminLogin = document.getElementById('inputAdminLogin');
let inputAdminPassword = document.getElementById('inputAdminPassword');
let inputAdminAccessCode = document.getElementById('inputAdminAccessCode');

let warningAdminLogin = document.getElementById("warningAdminLogin");
let warningAdminPassword = document.getElementById("warningAdminPassword");
let warningAdminAccessCode = document.getElementById('warningAdminAccessCode');

let enterBtnAdmin = document.getElementById('enterBtnAdmin');
let warningEnterBtnAdmin = document.getElementById('warningEnterBtnAdmin');

showWarningMinMax(inputAdminLogin, warningAdminLogin, "Логин", 4, 12);
showWarningMinMax(inputAdminPassword, warningAdminPassword, "Пароль", 6, 16);
showWarningMinMax(inputAdminAccessCode, warningAdminAccessCode, "Код доступа", 3, 6);


//Регистрация
let inputUserLoginReg = document.getElementById('inputUserLoginReg');
let inputUserEmailReg = document.getElementById('inputUserEmailReg');
let inputUserPasswordReg = document.getElementById('inputUserPasswordReg');
let inputUserPasswordRepeatReg = document.getElementById('inputUserPasswordRepeatReg');

let warningUserLoginReg = document.getElementById("warningUserLoginReg");
let warningUserEmailReg = document.getElementById("warningUserEmailReg");
let warningUserPasswordReg = document.getElementById("warningUserPasswordReg");
let warningUserPasswordRepeatReg = document.getElementById("warningUserPasswordRepeatReg");

let enterBtnUserReg = document.getElementById('enterBtnUserReg');
let warningEnterBtnUserReg = document.getElementById('warningEnterBtnUserReg');

showWarningEmail(inputUserEmailReg, warningUserEmailReg);
showWarningMinMax(inputUserLoginReg, warningUserLoginReg, "Логин", 4, 12);
showWarningMinMax(inputUserPasswordReg, warningUserPasswordReg, "Пароль", 6, 16);
showWarningSamePassword(inputUserPasswordReg, inputUserPasswordRepeatReg, warningUserPasswordRepeatReg);


function showWarningMinMax(input, warning, textType, min, max, noCheck) {
    if(noCheck) {
        if(input.value.length < min){
            warning.innerHTML = textType+" должен содержать не менее "+min+" символов.";
            warning.style.display = "block";
        }
    } else {
        input.addEventListener('blur', () => {
            if (input.value != '') {
                if (input.value.length < min) {
                    warning.innerHTML = textType+" должен содержать не менее "+min+" символов.";
                    warning.style.display = "block";
                } else if(input.value.length > max){
                    warning.innerHTML = textType+" должен содержать не более "+max+" символов.";
                    warning.style.display = "block";
                }
            }
        });
        input.addEventListener('keyup', () => {
            if (input.value.length >= min) {
                warning.style.display = "none";
            } else if (input.value.length <= max) {
                warning.style.display = "none";
            }
        });
    }
}

function showWarningEmail(input, warning, noCheck) {
    let emailConditions = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if(noCheck) {
        if(!(emailConditions.test(input.value))){
            warning.innerHTML = 'Должно соответствовать формату "address@example.com".';
            warning.style.display = "block";
        }
    } else {
        input.addEventListener('blur', () => {
            if (input.value != '') {
                if (!(emailConditions.test(input.value))) {
                    warning.innerHTML = 'Должно соответствовать формату "address@example.com".';
                    warning.style.display = "block";
                }
            }
        });
        input.addEventListener('keyup', () => {
            if (emailConditions.test(input.value)) {
                warning.style.display = "none";
            }
        });
    }
}



function showWarningSamePassword(input, inputRepeat, warning, noCheck) {
    if(noCheck) {
        if(inputRepeat.value != input.value){
            warning.innerHTML = 'Пароли не совпадают.';
            warning.style.display = "block";
        } 
    } else {
        inputRepeat.addEventListener('blur', () => {
            if (inputRepeat.value != '') {
                if (inputRepeat.value != input.value) {
                    warning.innerHTML = 'Пароли не совпадают.';
                    warning.style.display = "block";
                }
            }
        });
        inputRepeat.addEventListener('keyup', () => {
            if (inputRepeat.value == input.value) {
                warning.style.display = "none";
            }
        });
    }
}



enterBtnUser.addEventListener('click', () => {

    showWarningMinMax(inputUserLogin, warningUserLogin, "Логин", 4, 12, true);

    if (warningUserLogin.style.display == "none") {
        showWarningMinMax(inputUserPassword, warningUserPassword, "Пароль", 6, 16, true);
    } else return;

    if (warningUserPassword.style.display == "none") {
            setTimeout(() => {
                warningEnterBtnUser.innerHTML = "Неверный логин или пароль!";
                warningEnterBtnUser.style.display = "block";
            }, 300);
            setTimeout(() => {
                warningEnterBtnUser.style.display = "none";
            }, 4000);
    }
})


enterBtnAdmin.addEventListener('click', () => {

    showWarningMinMax(inputAdminLogin, warningAdminLogin, "Логин", 4, 12, true);

    if (warningAdminLogin.style.display == "none") {
        showWarningMinMax(inputAdminPassword, warningAdminPassword, "Пароль", 6, 16, true);
    } else return;

    if (warningAdminPassword.style.display == "none") {
        showWarningMinMax(inputAdminAccessCode, warningAdminAccessCode, "Код доступа", 3, 6, true);
    } else return;
    
    if (warningAdminAccessCode.style.display == "none") {
        setTimeout(() => {
            warningEnterBtnAdmin.innerHTML = "Неверный логин, пароль или код доступа!";
            warningEnterBtnAdmin.style.display = "block";
        }, 300);
        setTimeout(() => {
            warningEnterBtnAdmin.style.display = "none";
        }, 4000);
    }
})


enterBtnUserReg.addEventListener('click', () => {

    showWarningMinMax(inputUserLoginReg, warningUserLoginReg, "Логин", 4, 12, true);

    if (warningUserLoginReg.style.display == "none") {
        showWarningEmail(inputUserEmailReg, warningUserEmailReg, true);
    } else return;

    if (warningUserEmailReg.style.display == "none") {
        showWarningMinMax(inputUserPasswordReg, warningUserPasswordReg, "Пароль", 6, 16, true);
    } else return;

    if (warningUserPasswordReg.style.display == "none") {
        showWarningSamePassword(inputUserPasswordReg, inputUserPasswordRepeatReg, warningUserPasswordRepeatReg, true);
    } else return;

    if (warningUserPasswordRepeatReg.style.display == "none") {
        setTimeout(() => successfulAuthorization(), 300);
    }
})

function successfulAuthorization() {
    window.open('index.html#authorization-pop-up', "_self");
}


let formUserLogin = document.getElementById("form-user-login");
let formUserRegistration = document.getElementById("form-user-registration");
let btnRegistration = document.getElementById("btn-registration");
let btnLogin = document.getElementById("btn-login");

btnRegistration.addEventListener('click', () => {
    formUserLogin.style.display = "none";
    formUserRegistration.style.display = "block";
})

btnLogin.addEventListener('click', () => {
    formUserRegistration.style.display = "none";
    formUserLogin.style.display = "block";
})





