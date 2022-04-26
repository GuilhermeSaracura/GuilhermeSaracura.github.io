import {portugueseLanguage} from './languages/portuguese.js'
import {portugueseLanguagesoft} from './languages/portuguese.js'
import {portugueseLanguageweb} from './languages/portuguese.js'
import {englishLanguage} from './languages/english.js'
import {englishLanguagesoft} from './languages/english.js'
import {englishLanguageweb} from './languages/english.js'

$(function() {
    $(".br").click(function() {
        const language = portugueseLanguage
        Object.values(language).forEach(field => { document.querySelector(field.id).textContent = field.value })
    });
});

$(function() {
    $(".en").click(function() {
        const language = englishLanguage
        Object.values(language).forEach(field => { document.querySelector(field.id).textContent = field.value })
    });
});

$(function() {
    $(".br-software").click(function() {
        const language = portugueseLanguagesoft
        Object.values(language).forEach(field => { document.querySelector(field.id).textContent = field.value })
    });
});

$(function() {
    $(".en-software").click(function() {
        const language = englishLanguagesoft
        Object.values(language).forEach(field => { document.querySelector(field.id).textContent = field.value })
    });
});

$(function() {
    $(".br-web").click(function() {
        const language = portugueseLanguageweb
        Object.values(language).forEach(field => { document.querySelector(field.id).textContent = field.value })
    });
});

$(function() {
    $(".en-web").click(function() {
        const language = englishLanguageweb
        Object.values(language).forEach(field => { document.querySelector(field.id).textContent = field.value })
    });
});


function typeWrite(element,time){
    const textArray = element.innerHTML.split('')
    element.innerHTML='';
    textArray.forEach((letter, i) =>{
        setTimeout(function(){
            element.innerHTML+=letter;
        },time*i)
    });
}

const script = document.querySelector('#typed-script');
typeWrite(script,50);
