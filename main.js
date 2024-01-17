const email = document.querySelector('#correo');
const label = document.querySelector('.invalid');
const send = document.querySelector('#send');
const firstart = document.querySelector('#first-article');
const success = document.querySelector('#success');
const emailconf = document.querySelector('#emailconf')


async function validar(){
    if (email.checkValidity()) {
        firstart.classList.remove('flex');
        firstart.classList.add('hidden');
        success.classList.remove('hidden');
        emailconf.innerText =email.value;
        success.classList.add('flex')
    }
    else {
        label.classList.remove('hidden');
        email.classList.remove('border-grey');
        email.classList.add('bg-invalid');
        return false;
}
}

send.addEventListener('click', (e)=>{
    e.preventDefault()
    validar();
      
})


