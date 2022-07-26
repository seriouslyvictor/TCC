'use strict'

const itemSanfona = document.querySelectorAll('.item-sanfona');
const iconeSanfona = document.querySelectorAll('.icone-sanfona')

for (let i = 0; i < itemSanfona.length; i++) {
    itemSanfona[i].addEventListener('click', function() {
        itemSanfona[i].classList.toggle('ativa');
        iconeSanfona[i].classList.toggle('fa-chevron-down')
        iconeSanfona[i].classList.toggle('fa-chevron-right')
    })
}



