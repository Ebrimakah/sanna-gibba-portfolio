// Smooth scrolling

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e){
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (!target) return;
            target.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
        if (themeToggle) {
            themeToggle.querySelector(".toggle-icon").textContent = "🌙";
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            body.classList.toggle("dark-theme");
            const isDark = body.classList.contains("dark-theme");
            localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
            themeToggle.querySelector(".toggle-icon").textContent = isDark ? "🌙" : "☀️";
        });
    }
});

// Fade animation

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity=0;

card.style.transform="translateY(50px)";

card.style.transition=".8s";

observer.observe(card);

});