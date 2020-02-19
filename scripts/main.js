function login(y) {
    document.getElementsByClassName('form-login')[0].style.left = '25%';
    document.getElementsByClassName('form-login')[0].style.visibility = 'hidden';
    document.getElementsByClassName('form-register')[0].style.left = '50%';
    document.getElementsByClassName('form-register')[0].style.visibility = 'visible';
}

function register() {
    document.getElementsByClassName('form-login')[0].style.left = '50%';
    document.getElementsByClassName('form-login')[0].style.visibility = 'visible';
    document.getElementsByClassName('form-register')[0].style.left = '75%';
    document.getElementsByClassName('form-register')[0].style.visibility = 'hidden';
}