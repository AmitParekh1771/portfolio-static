console.log("Are you a developer? Check out this site performance and let me know what do you think");

const fragmentObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio >= 0.25) {
            document.querySelector(`[href='#${entry.target.getAttribute("id")}']`).style.opacity = 1;
        }
        else {
            document.querySelector(`[href='#${entry.target.getAttribute("id")}']`).style.opacity = 0.25;
        }
    })
}, {
    root: null,
    rootMargin: '0px',
    threshold: 0.25
});

document.querySelectorAll("[data-fragment]").forEach(item => fragmentObserver.observe(item));

const themes = ["morning", "evening", "night"];
const themeColors = ["#fff6e2", "#ffffa8", "#f3f4f6"];
let currentThemeIndex = 0;

const themeBtn = document.getElementById("theme-btn");
const heroContainer = document.getElementById("hero-container");
const skyGrads = document.querySelectorAll("[data-sky-grad]");

themeBtn.addEventListener("click", (ev) => {
    let prevThemeIndex = currentThemeIndex;
    currentThemeIndex = (currentThemeIndex + 1) % 3;

    themeBtn.style.animation = `set-and-rise 500ms ease-in-out 0s 1 forwards`;
    themeBtn.style.color = themeColors[currentThemeIndex];

    for(let index = 0 ; index < skyGrads.length ; ++index) {
        if(currentThemeIndex > index) skyGrads[skyGrads.length - index - 1].style.opacity = 0;
        else skyGrads[skyGrads.length - index - 1].style.opacity = 1;
    };

    if(themes[currentThemeIndex] == "night") heroContainer.classList.add("dark");
    else heroContainer.classList.remove("dark");
});

themeBtn.addEventListener("animationend", (ev) => {
    themeBtn.style.animation = 'unset';
})