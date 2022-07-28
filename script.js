'use strict'

const itemSanfona = document.querySelectorAll('.item-sanfona');
const iconeSanfona = document.querySelectorAll('.icone-sanfona')
const modal = document.querySelector('.modal');
const overlay =  document.querySelector('.overlay');
const queroAprender = document.querySelector('.destaque');
const btnModalFechar = document.querySelector('.modal-fechar');
const signup = document.querySelector('.signup');



queroAprender.addEventListener('click', abrirModal);
btnModalFechar.addEventListener('click', abrirModal);
overlay.addEventListener('click', abrirModal);
signup.addEventListener('click', abrirModal);

for (let i = 0; i < itemSanfona.length; i++) {
    itemSanfona[i].addEventListener('click', function() {
        itemSanfona[i].classList.toggle('ativa');
        iconeSanfona[i].classList.toggle('fa-chevron-down')
        iconeSanfona[i].classList.toggle('fa-chevron-right')
    })
}

function abrirModal() {
    modal.classList.toggle('escondido')
    overlay.classList.toggle('escondido')
    document.body.classList.toggle('travar')    
}




