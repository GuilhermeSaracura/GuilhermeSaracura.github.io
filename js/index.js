import {
  portugueseLanguage,
  portugueseLanguagesoft,
  portugueseLanguageweb,
  portugueseLanguagemobile,
} from "./languages/portuguese.js";
import {
  englishLanguage,
  englishLanguagesoft,
  englishLanguageweb,
  englishLanguagemobile,
} from "./languages/english.js";
import {
  spanishLanguage,
  spanishLanguagesoft,
  spanishLanguageweb,
  spanishLanguagemobile,
} from "./languages/spanish.js";

if (window.sessionStorage.getItem("index") === null) {
  window.sessionStorage.setItem("lang", "br");
  window.sessionStorage.setItem("index", JSON.stringify(portugueseLanguage));
  window.sessionStorage.setItem("soft", JSON.stringify(portugueseLanguagesoft));
  window.sessionStorage.setItem("web", JSON.stringify(portugueseLanguageweb));
  window.sessionStorage.setItem(
    "mobile",
    JSON.stringify(portugueseLanguagemobile)
  );
}

function changeLanguage(id) {
  window.sessionStorage.setItem("lang", id);
  if (id == "br") {
    window.sessionStorage.setItem("index", JSON.stringify(portugueseLanguage));
    window.sessionStorage.setItem(
      "soft",
      JSON.stringify(portugueseLanguagesoft)
    );
    window.sessionStorage.setItem("web", JSON.stringify(portugueseLanguageweb));
    window.sessionStorage.setItem(
      "mobile",
      JSON.stringify(portugueseLanguagemobile)
    );
  }
  if (id == "us") {
    window.sessionStorage.setItem("index", JSON.stringify(englishLanguage));
    window.sessionStorage.setItem("soft", JSON.stringify(englishLanguagesoft));
    window.sessionStorage.setItem("web", JSON.stringify(englishLanguageweb));
    window.sessionStorage.setItem(
      "mobile",
      JSON.stringify(englishLanguagemobile)
    );
  }
  if (id == "es") {
    window.sessionStorage.setItem("index", JSON.stringify(spanishLanguage));
    window.sessionStorage.setItem("soft", JSON.stringify(spanishLanguagesoft));
    window.sessionStorage.setItem("web", JSON.stringify(spanishLanguageweb));
    window.sessionStorage.setItem(
      "mobile",
      JSON.stringify(spanishLanguagemobile)
    );
  }
}

$(function () {
  $(".br").click(function () {
    changeLanguage("br");
    Object.values(JSON.parse(window.sessionStorage.getItem("index"))).forEach(
      (field) => {
        document.querySelector(field.id).textContent = field.value;
      }
    );
  });
});

$(function () {
  $(".en").click(function () {
    changeLanguage("us");
    Object.values(JSON.parse(window.sessionStorage.getItem("index"))).forEach(
      (field) => {
        document.querySelector(field.id).textContent = field.value;
      }
    );
  });
});

$(function () {
  $(".sp").click(function () {
    changeLanguage("es");
    Object.values(JSON.parse(window.sessionStorage.getItem("index"))).forEach(
      (field) => {
        document.querySelector(field.id).textContent = field.value;
      }
    );
  });
});

$(function () {
  $(".br-software").click(function () {
    changeLanguage("br");
    Object.values(JSON.parse(window.sessionStorage.getItem("soft"))).forEach(
      (field) => {
        document.querySelector(field.id).textContent = field.value;
      }
    );
  });
});

$(function () {
  $(".en-software").click(function () {
    changeLanguage("us");
    Object.values(JSON.parse(window.sessionStorage.getItem("soft"))).forEach(
      (field) => {
        document.querySelector(field.id).textContent = field.value;
      }
    );
  });
});

$(function () {
  $(".sp-software").click(function () {
    changeLanguage("es");
    Object.values(JSON.parse(window.sessionStorage.getItem("soft"))).forEach(
      (field) => {
        document.querySelector(field.id).textContent = field.value;
      }
    );
  });
});

$(function () {
  $(".br-web").click(function () {
    changeLanguage("br");
    Object.values(JSON.parse(window.sessionStorage.getItem("web"))).forEach(
      (field) => {
        document.querySelector(field.id).textContent = field.value;
      }
    );
  });
});

$(function () {
  $(".en-web").click(function () {
    changeLanguage("us");
    Object.values(JSON.parse(window.sessionStorage.getItem("web"))).forEach(
      (field) => {
        document.querySelector(field.id).textContent = field.value;
      }
    );
  });
});

$(function () {
  $(".sp-web").click(function () {
    changeLanguage("es");
    Object.values(JSON.parse(window.sessionStorage.getItem("web"))).forEach(
      (field) => {
        document.querySelector(field.id).textContent = field.value;
      }
    );
  });
});

$(function () {
  $(".br-mobile").click(function () {
    changeLanguage("br");
    Object.values(JSON.parse(window.sessionStorage.getItem("mobile"))).forEach(
      (field) => {
        document.querySelector(field.id).textContent = field.value;
      }
    );
  });
});

$(function () {
  $(".en-mobile").click(function () {
    changeLanguage("us");
    Object.values(JSON.parse(window.sessionStorage.getItem("mobile"))).forEach(
      (field) => {
        document.querySelector(field.id).textContent = field.value;
      }
    );
  });
});

$(function () {
  $(".sp-mobile").click(function () {
    changeLanguage("es");
    Object.values(JSON.parse(window.sessionStorage.getItem("mobile"))).forEach(
      (field) => {
        document.querySelector(field.id).textContent = field.value;
      }
    );
  });
});

$(function () {
  $("#nav-list").click(function () {
    var nav = document.getElementById("navbar");
    var nav_icon = document.getElementById("nav-list-icon");
    if (nav.style.display === "block") {
      nav.style.display = "none";
      nav_icon.className = "bi bi-list";
    } else {
      nav.style.display = "block";
      nav_icon.className = "bi bi-x-lg";
    }
  });
});

$(function () {
  $("#navbar-open-cv").click(function () {
    var brCurriculum = "../documents/currículo.pdf";
    var usCurriculum = "../documents/curriculum.pdf";
    var esCurriculum = "../documents/currículum.pdf";

    switch (window.sessionStorage.getItem("lang")) {
      case "br":
        window.open(brCurriculum, "_blank");
        break;
      case "us":
        window.open(usCurriculum, "_blank");
        break;
      case "es":
        window.open(esCurriculum, "_blank");
        break;
      default:
        break;
    }
  });
});

window.addEventListener("orientationchange", function () {
  switch (window.orientation) {
    case -90:
    case 90:
      var nav = document.getElementById("navbar");
      nav.style.display = "block";
      break;

    default:
      var nav = document.getElementById("navbar");
      nav.style.display = "none";
      break;
  }
});

function animationContainers() {
  var containers = document.querySelectorAll(".container");

  for (var i = 0; i < containers.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = containers[i].getBoundingClientRect().top;
    var elementVisible = 75;

    if (elementTop < windowHeight - elementVisible) {
      containers[i].classList.add("active");
    } else {
      containers[i].classList.remove("active");
    }
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 81) + 40;
}

function getRandomClass() {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  return `light-type-${randomNumber}`;
}
function createSpans(amount, id) {
  const container = document.querySelector("#background-effect-" + id);
  for (let i = 0; i < amount; i++) {
    const span = document.createElement("span");
    const randomClass = getRandomClass();
    span.classList.add("light");
    span.classList.add(randomClass);
    const randomValue = getRandomNumber();
    span.style.setProperty("--i", randomValue);
    container.appendChild(span);
  }
}

createSpans(48, 1);
createSpans(51, 2);

animationContainers();
window.addEventListener("scroll", animationContainers);
