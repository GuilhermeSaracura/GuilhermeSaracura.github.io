
import {portugueseLanguage} from './languages/portuguese.js'
import {portugueseLanguagesoft} from './languages/portuguese.js'
import {portugueseLanguageweb} from './languages/portuguese.js'
import {englishLanguage} from './languages/english.js'
import {englishLanguagesoft} from './languages/english.js'
import {englishLanguageweb} from './languages/english.js'

if(window.sessionStorage.getItem("index")===null){
    window.sessionStorage.setItem("index", JSON.stringify(portugueseLanguage));
    window.sessionStorage.setItem("soft", JSON.stringify(portugueseLanguagesoft));
    window.sessionStorage.setItem("web", JSON.stringify(portugueseLanguageweb));
}

function changeLanguage(id){
    if(id=='br'){
        window.sessionStorage.setItem("index", JSON.stringify(portugueseLanguage));
        window.sessionStorage.setItem("soft", JSON.stringify(portugueseLanguagesoft));
        window.sessionStorage.setItem("web", JSON.stringify(portugueseLanguageweb));
    }
    if(id=='us'){
        window.sessionStorage.setItem("index", JSON.stringify(englishLanguage));
        window.sessionStorage.setItem("soft", JSON.stringify(englishLanguagesoft));
        window.sessionStorage.setItem("web", JSON.stringify(englishLanguageweb));
    }
}

$(function() {
    $(".br").click(function() {
        changeLanguage('br');
        Object.values(JSON.parse(window.sessionStorage.getItem("index"))).forEach(field => { document.querySelector(field.id).textContent = field.value });
    });
});

$(function() {
    $(".en").click(function() {
        changeLanguage('us');
        Object.values(JSON.parse(window.sessionStorage.getItem("index"))).forEach(field => { document.querySelector(field.id).textContent = field.value });
    });
});

$(function() {
    $(".br-software").click(function() {
        changeLanguage('br');
        Object.values(JSON.parse(window.sessionStorage.getItem("soft"))).forEach(field => { document.querySelector(field.id).textContent = field.value });
    });
});

$(function() {
    $(".en-software").click(function() {
        changeLanguage('us');
        Object.values(JSON.parse(window.sessionStorage.getItem("soft"))).forEach(field => { document.querySelector(field.id).textContent = field.value });
    });
});

$(function() {
    $(".br-web").click(function() {
        changeLanguage('br');
        Object.values(JSON.parse(window.sessionStorage.getItem("web"))).forEach(field => { document.querySelector(field.id).textContent = field.value });
    });
});

$(function() {
    $(".en-web").click(function() {
        changeLanguage('us');
        Object.values(JSON.parse(window.sessionStorage.getItem("web"))).forEach(field => { document.querySelector(field.id).textContent = field.value });
    });
});

$(function() {
    $("#nav-list").click(function() {
        var nav = document.getElementById("navbar");
        if (nav.style.display === "block") {
            nav.style.display = "none";
        } else {
            nav.style.display = "block";
        }
    });
});