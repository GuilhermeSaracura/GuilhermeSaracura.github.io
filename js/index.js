
import {portugueseLanguage} from './languages/portuguese.js'
import {portugueseLanguagesoft} from './languages/portuguese.js'
import {portugueseLanguageweb} from './languages/portuguese.js'
import {englishLanguage} from './languages/english.js'
import {englishLanguagesoft} from './languages/english.js'
import {englishLanguageweb} from './languages/english.js'

if(window.localStorage.getItem("index")===null){
    window.localStorage.setItem("index", JSON.stringify(portugueseLanguage));
    window.localStorage.setItem("soft", JSON.stringify(portugueseLanguagesoft));
    window.localStorage.setItem("web", JSON.stringify(portugueseLanguageweb));
}

function changeLanguage(id){
    if(id=='br'){
        window.localStorage.setItem("index", JSON.stringify(portugueseLanguage));
        window.localStorage.setItem("soft", JSON.stringify(portugueseLanguagesoft));
        window.localStorage.setItem("web", JSON.stringify(portugueseLanguageweb));
    }
    if(id=='us'){
        window.localStorage.setItem("index", JSON.stringify(englishLanguage));
        window.localStorage.setItem("soft", JSON.stringify(englishLanguagesoft));
        window.localStorage.setItem("web", JSON.stringify(englishLanguageweb));
    }
}

$(function() {
    $(".br").click(function() {
        changeLanguage('br');
        Object.values(JSON.parse(window.localStorage.getItem("index"))).forEach(field => { document.querySelector(field.id).textContent = field.value });
    });
});

$(function() {
    $(".en").click(function() {
        changeLanguage('us');
        Object.values(JSON.parse(window.localStorage.getItem("index"))).forEach(field => { document.querySelector(field.id).textContent = field.value });
    });
});

$(function() {
    $(".br-software").click(function() {
        changeLanguage('br');
        Object.values(JSON.parse(window.localStorage.getItem("soft"))).forEach(field => { document.querySelector(field.id).textContent = field.value });
    });
});

$(function() {
    $(".en-software").click(function() {
        changeLanguage('us');
        Object.values(JSON.parse(window.localStorage.getItem("soft"))).forEach(field => { document.querySelector(field.id).textContent = field.value });
    });
});

$(function() {
    $(".br-web").click(function() {
        changeLanguage('br');
        Object.values(JSON.parse(window.localStorage.getItem("web"))).forEach(field => { document.querySelector(field.id).textContent = field.value });
    });
});

$(function() {
    $(".en-web").click(function() {
        changeLanguage('us');
        Object.values(JSON.parse(window.localStorage.getItem("web"))).forEach(field => { document.querySelector(field.id).textContent = field.value });
    });
});