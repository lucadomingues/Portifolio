/*Efeito Digitação*/
var paragrafo = document.getElementById("efeito");
var texto = paragrafo.innerHTML;
var index = 0;

const escrever = () => {
    paragrafo.innerHTML = paragrafo.innerHTML.replace('|', '');

    if(texto.length > index){
        if(index == 0){
            paragrafo.innerHTML = texto.charAt(index);
        }
        else{
            paragrafo.innerHTML += texto.charAt(index);
        }

        paragrafo.innerHTML += '|';

        index ++;
        setTimeout(escrever, 50);
    }
}
escrever();

/*==================== CHANGE BACKGROUND HEADER ====================*/
/*
function scrollHeader(){
    const header = document.getElementById('header');
    //when the scrill is greater than 50 viewport height, add the scroll-header class to header tag
    if(this.scrolly >= 80){
        header.classList.add('scroll-header');
    }
    else{
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);
*/
/*==================== SHOW SCROLL UP ====================*/
/*
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //when the scrill is greater than 350 viewport height, add the show-scroll class to scrool-top class
    if(this.scrolly >= 350){
        scrollUp.classList.add('show-scroll');
    }
    else{
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);
*/
/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');
    
tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        //console.log(target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active');
        });

        target.classList.add('tab__active');

        tabs.forEach((tab) => {
            tab.classList.remove('tab__active');
        });

        tab.classList.add('tab__active');
    });
});

/*CARROSEL*/
const imagensCarrosel = document.getElementById("imgs-carrossel");
const imgCarrossel = document.querySelectorAll("#imgs-carrossel img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > imgCarrossel.length - 1){
        idx = 0;
    }

    imagensCarrosel.style.transform = `translateX(${-idx * 500}px)`;
}
setInterval(carrossel, 2000);

/*=============== CONTACT FORM =============== */
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactSubject = document.getElementById('contact-subject'),
contactMessage = document.getElementById('contact-message'),
errorMessage = document.getElementById('error-message');

const sendEmail = (e) => {
    e.preventDefault();

    //check if the field has a value
    if(contactName.value === '' || contactEmail.value === '' || contactSubject.value === '' || contactMessage.value === ''){
        //show message
        errorMessage.textContent = 'Preencha todos os campos.';
    }
    else{
        //serviceID - templateID - #form - publickey
        emailjs.sendForm(
            'service_kzux9u6',
            'template_e77b2a5',
            '#contact-form',
            'sSpN49Dga0YQrcxVk'
        ).then(() => {
            //show message and add color, window + dot to open emoji
            errorMessage.classList.add('color-first');
            errorMessage.textContent = 'Mensagem Enviada';

            //remove message after 5 seconds
            setTimeout(() => {
                errorMessage.textContent = '';
            }, 5000);
        }, (error) => {
            alert('OOPs! ALGO DEU ERRADO...', error);
        });

        //clear input fiedls
        contactName.value = '';
        contactEmail.value = '';
        contactSubject.value = '';
        contactMessage.value = '';
    }
}

contactForm.addEventListener('submit', sendEmail);


/* ABRIR MODAL */
function abrirModal(){
    const modal = document.getElementById("janela-modal");
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal'){
            modal.classList.remove('abrir');
        }
    })
}