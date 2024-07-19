'use strict'

const itemSanfona = document.querySelectorAll('.item-sanfona');
const iconeSanfona = document.querySelectorAll('.icone-sanfona')
const modal = document.querySelector('.modal');
const disclaimer = document.querySelector('.container--disclaimer');
const overlay = document.querySelector('.overlay');
const queroAprender = document.querySelector('.destaque');
const btnModalFechar = document.querySelector('.modal-fechar');
const btnModalFechar2 = document.querySelector('.copy');
const signup = document.querySelector('.signup');
const burguer = document.querySelector('.burguer');
const xburguer = document.querySelector('.closeburguer');
const header = document.querySelector('header');
const nav = document.querySelector('nav');



queroAprender.addEventListener('click', abrirModal);
btnModalFechar.addEventListener('click', abrirModal);
btnModalFechar2.addEventListener('click', () => {
    fecharDisclaimer(disclaimer)
});
overlay.addEventListener('click', abrirModal);
signup.addEventListener('click', abrirModal);
burguer.addEventListener('click', abrirNavMobile);
xburguer.addEventListener('click', abrirNavMobile);


for (let i = 0; i < itemSanfona.length; i++) {
    itemSanfona[i].addEventListener('click', function () {
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
    header.classList.toggle('mobile');

}


function mostrarDisclaimer(el) {
    overlay.classList.remove('escondido')
    document.body.classList.add('travar')
    el.classList.remove("escondido")
    setTimeout(() => btnModalFechar2.classList.remove("escondido"), 5000)
}

function fecharDisclaimer(el) {
    overlay.classList.add('escondido')
    document.body.classList.remove('travar')
    el.classList.add("escondido")
}

function manejarPrimeiroAcesso() {
    if (!localStorage.getItem("primeiroAcesso")) {
        localStorage.setItem("primeiroAcesso", true)
        mostrarDisclaimer(disclaimer);
    }

}

document.addEventListener("DOMContentLoaded", manejarPrimeiroAcesso)

