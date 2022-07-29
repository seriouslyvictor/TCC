'use strict'

const itemSanfona = document.querySelectorAll('.item-sanfona');
const iconeSanfona = document.querySelectorAll('.icone-sanfona')
const modal = document.querySelector('.modal');
const overlay =  document.querySelector('.overlay');
const queroAprender = document.querySelector('.destaque');
const btnModalFechar = document.querySelector('.modal-fechar');
const signup = document.querySelector('.signup');
const burguer = document.querySelector('.burguer');
const xburguer = document.querySelector('.closeburguer');
const header = document.querySelector('header');
const nav = document.querySelector('nav');



queroAprender.addEventListener('click', abrirModal);
btnModalFechar.addEventListener('click', abrirModal);
overlay.addEventListener('click', abrirModal);
signup.addEventListener('click', abrirModal);
burguer.addEventListener('click', abrirNavMobile);
xburguer.addEventListener('click', abrirNavMobile);


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


function abrirNavMobile() {
    console.log('usuário clicou');
    nav.classList.toggle('nav-aberto');
    header.classList.toggle('mobile');
    
}




