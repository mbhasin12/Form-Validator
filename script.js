
const form = document.getElementById('form');
const username = document.getElementById('username');
const email  = document.getElementById('Email');
const password = document.getElementById('Password');
const password2 = document.getElementById('password2');

// Show input error message
function showError (input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess (input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
    
}



function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        }
        else {
            showSuccess(input);
        }
    });

}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    }
    else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} can be at most ${max} characters`)
    }
    else {
        showSuccess(input);
    }
}

function checkEqual(password, password2) {
    if (password2.value != password.value) {
        showError(password2, `Passwords must match`)
        showError(password, `Passwords must match`)
    } 

}


function getFieldName (input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listener
form.addEventListener('submit', function(e) {
    e.preventDefault();
    //console.log(username.value);
    

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkLength(password2, 6, 25);
    checkEqual(password, password2)

});

