const form = document.getElementById('form'); //! chama a div com ID de form
const input = document.querySelectorAll('.required'); //! chama os campos de input
const error = document.querySelectorAll('.error');
const span = document.querySelectorAll('.error-span')
const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


function nomeValidate() {
    checkform();
}

function checkform() {
    for (let i = 0; i < 4; i++) {
        if(i == 2) {
            emailValidate()
        } 

        if(input[i].value.length < 4) {
            setError(i)
        } else {
            validate(i)
        }
    }
    
    const teste = form.querySelectorAll('.required')
    const isValid = [...teste].every((item) => {
        return item.className === 'required'
    })

    if(isValid) {
        alert('Successfuly registered')
    }

}

function setError(index) {
    input[index].className = "required not-pass"
    input[index].style.border = '2px solid hsl(0, 100%, 74%)';
    error[index].style.display = 'block';
    span[index].style.display = 'block';

}

function validate(index) {
    input[index].className = 'required'
    input[index].style.border = "";
    error[index].style.display = 'none'
    span[index].style.display = 'none'
}


function emailValidate() {
    if(!emailRegex.test(input[2].value)) {
        setError(2)
    } else {
        validate(2)
    }
}