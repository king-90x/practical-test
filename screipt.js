let fm = document.querySelector('form')
let emailInp = document.querySelector('#email')
let passInp = document.querySelector('#pass')

fm.addEventListener('submit', function(det){
console.log(det);

    det.preventDefault()

    if(emailInp.value.trim() === ''){
        emailInp.style.border = '2px solid red'
    }
    else if(passInp.value.trim() === ''){
        passInp.style.border = '2px solid red'
    }
    else{
        emailInp.style.border = '2px solid black'
        passInp.style.border = '2px solid black'
    }
}
)


