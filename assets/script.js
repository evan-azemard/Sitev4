const FormateurH1 = document.querySelector("#containerFormateur > h1");
const FormateurForm = document.querySelector("#containerFormateur > form");
const btnFormateurForm = document.querySelector("#Contact");
const btnFormateurAvis = document.querySelector("#Avis");
const containerFormateurAvis = document.querySelector("#containerFormateurAvis");

const formateurA = document.querySelector("#h1Formateur")
const SiteA = document.querySelector("#h1Site")
const DevA = document.querySelector("#h1Dev")
const CoursA = document.querySelector("#h1Cours")


formateurA.classList.add("highlightForm");
SiteA.classList.add("highlightSite");
DevA.classList.add("highlightDev");
CoursA.classList.add("highlightCours");

setTimeout(() => {
    formateurA.classList.add("aTransition");
    SiteA.classList.add("aTransition");
    DevA.classList.add("aTransition");
    CoursA.classList.add("aTransition");

    formateurA.classList.remove("highlightForm");
    SiteA.classList.remove("highlightSite");
    DevA.classList.remove("highlightDev");
    CoursA.classList.remove("highlightCours");
}, 1000);
setTimeout(() => {
    formateurA.classList.remove("aTransition");
    SiteA.classList.remove("aTransition");
    DevA.classList.remove("aTransition");
    CoursA.classList.remove("aTransition");
}, 2000);



btnFormateurForm.addEventListener("click",()=> {
    containerFormateurAvis.style.display = "none";
    FormateurForm.style.display = FormateurForm.style.display === "block" ? "none" : "block";
    if(FormateurForm.style.display === "block") {
        FormateurH1.style.display = "none";
    } else {
        if(FormateurH1.style.display === "none"){
            FormateurH1.style.display = "block";
        }
    }
});

btnFormateurAvis.addEventListener("click",()=> {
    FormateurForm.style.display = "none"
    containerFormateurAvis.style.display = containerFormateurAvis.style.display === "block" ? "none" : "block";
    if(containerFormateurAvis.style.display === "block") {
        FormateurH1.style.display = "none";
    } else {
        if(FormateurH1.style.display === "none"){
            FormateurH1.style.display = "block";
        }
    }
});




const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const paragraphs = document.querySelectorAll(".itemParagrapheFormateur");
let currentParagraph = 0;

nextBtn.addEventListener("click", () => {
    paragraphs[currentParagraph].style.opacity = "0";
    if (currentParagraph === paragraphs.length - 1) {
        currentParagraph = 0;
    } else {
        currentParagraph++;
    }
    paragraphs[currentParagraph].style.opacity  = "1";
});

prevBtn.addEventListener("click", () => {
    paragraphs[currentParagraph].style.opacity  = "0";
    if (currentParagraph === 0) {
        currentParagraph = paragraphs.length - 1;
    } else {
        currentParagraph--;
    }
    paragraphs[currentParagraph].style.opacity  = "1";
});



