function login(y) {
    document.getElementsByClassName('form-login')[0].style.left = '25%';
    document.getElementsByClassName('form-login')[0].style.opacity = '0';
    document.getElementsByClassName('form-register')[0].style.left = '50%';
    document.getElementsByClassName('form-register')[0].style.opacity = '1';
}

function register() {
    document.getElementsByClassName('form-login')[0].style.left = '50%';
    document.getElementsByClassName('form-login')[0].style.opacity = '1';
    document.getElementsByClassName('form-register')[0].style.left = '75%';
    document.getElementsByClassName('form-register')[0].style.opacity = '0';
}