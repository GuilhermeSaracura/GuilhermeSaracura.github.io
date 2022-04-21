const englishLanguage = {
    //Navbar texts
    NAVBAR_HOME: { id: "#navbar-home", value: "Home" },
    NAVBAR_ABOUT: { id: "#navbar-about", value: "About" },
    NAVBAR_RESUME: { id: "#navbar-resume", value: "Resume" },
    NAVBAR_SKILLS: { id: "#navbar-skills", value: "Skills" },
    NAVBAR_PORTFOLIO: { id: "#navbar-portfolio", value: "Portfolio" },
    NAVBAR_CONTACTS: { id: "#navbar-contacts", value: "Contacts" },
    
    //Home Script
    NAVBAR_TYPED_SCRIPT: { id: "#typed-script", value: "Computer Engineering student, looking to become a Software and Web Developer." },

    //About Section
    ABOUT_TITTLE: { id: "#about-title", value: "About" },
    ABOUT_OBJECTIVE: { id: "#about-objective", value: "Professional Objective: Work as a Software and Web Developer." },
    ABOUT_DESCRIPTION: { id: "#about-description", value: "Currently pursuing a degree in Computer Engineering at FACENS. Working as an intern in Software Development at FIT-Instituto de Tecnologia, where I participate in software development using C#.NET and WPF. One year and six months of experience in the IT area, performing in the management of activities, maintenance and assembly of equipment, Windows operating system users support and network infrastructure maintenance and support." },
    ABOUT_BIRTH_DATE: { id: "#about-birth-date", value: "Birth Date:" },
    ABOUT_DATE: { id: "#about-date", value: "May 27, 1996" },
    ABOUT_CELLPHONE: { id: "#about-cellphone", value: "Cell phone:" },
    ABOUT_CITY: { id: "#about-city", value: "City:" },
    ABOUT_CITY_INFO: { id: "#about-city-info", value: "Sorocaba-SP Brazil" },
    ABOUT_DEGREE: { id: "#about-degree", value: "Academic background:" },
    ABOUT_DEGREE_INFO: { id: "#about-degree-info", value: "Computer Engineering" },

}

const portugueseLanguage = {
    //Navbar texts
    NAVBAR_HOME: { id: "#navbar-home", value: "Home" },
    NAVBAR_ABOUT: { id: "#navbar-about", value: "Sobre" },
    NAVBAR_RESUME: { id: "#navbar-resume", value: "Resumo" },
    NAVBAR_SKILLS: { id: "#navbar-skills", value: "Habilidades" },
    NAVBAR_PORTFOLIO: { id: "#navbar-portfolio", value: "Portfólio" },
    NAVBAR_CONTACTS: { id: "#navbar-contacts", value: "Contactos" },

    //Home Script
    TYPED_SCRIPT: { id: "#typed-script", value: "Estudante de Engenharia da Computação, buscando me tornar Desenvolvedor de Software e Web." },

    //About Section
    ABOUT_TITTLE: { id: "#about-title", value: "Sobre" },
    ABOUT_OBJECTIVE: { id: "#about-objective", value: "Objetivo Profissional: Atuar no mercado como Desenvolvedor de Software e Web." },
    ABOUT_DESCRIPTION: { id: "#about-description", value: "Atualmente cursando graduação em Engenharia da Computação na FACENS. Atuando como estagiário em Desenvolvimento de Software na FIT-Instituto de Tecnologia, onde participo do desenvolvimento de softwares utilizando C#.NET e WPF. Um ano e seis meses de experiência na área de TI, exercendo como atividades gestão, manutenção e montagem de equipamentos, suporte aos usuários do sistema operacional Windows e manutenção e suporte a infraestrutura de redes." },
    ABOUT_BIRTH_DATE: { id: "#about-birth-date", value: "Data de Nascimento:" },
    ABOUT_DATE: { id: "#about-date", value: "27 de Maio de 1996" },
    ABOUT_CELLPHONE: { id: "#about-cellphone", value: "Celular:" },
    ABOUT_CITY: { id: "#about-city", value: "Cidade:" },
    ABOUT_CITY_INFO: { id: "#about-city-info", value: "Sorocaba-SP Brasil" },
    ABOUT_DEGREE: { id: "#about-degree", value: "Formação:" },
    ABOUT_DEGREE_INFO: { id: "#about-degree-info", value: "Engenharia da Computação" },

}

$(function() {
    $(".br").click(function() {
        const language = portugueseLanguage
        Object.values(language).forEach(field => { $(field.id).text(field.value) })
    });
});

$(function() {
    $(".en").click(function() {
        const language = englishLanguage
        Object.values(language).forEach(field => { $(field.id).text(field.value) })
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
