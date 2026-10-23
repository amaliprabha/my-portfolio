
/* 1. Create the Dark Mode button */
const themeButton = document.createElement("button");

themeButton.id = "theme-toggle";
themeButton.textContent = "🌙 Dark Mode";
themeButton.setAttribute("aria-label", "Toggle dark mode");

/* Add the button to the navigation bar */
const navigation = document.querySelector("nav");
navigation.appendChild(themeButton);

/* Change between light mode and dark mode */
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }
});

/* 2. Create the Back to Top button */
const topButton = document.createElement("button");

topButton.id = "back-to-top";
topButton.textContent = "↑";
topButton.setAttribute("aria-label", "Back to top");

document.body.appendChild(topButton);

/* Show the button when the user scrolls down */
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }
});

/* Scroll to the top when clicked */
topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* Reveal sections when scrolling */
const portfolioSections = document.querySelectorAll("main > section");

const sectionObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-section");
                sectionObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

portfolioSections.forEach(function (section) {
    sectionObserver.observe(section);
});
console.log("Scroll animation script is working!");
