const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show")
        }
    })
})

const hiddenElemnts = document.querySelectorAll(".hidden2")
hiddenElemnts.forEach(el => observer.observe(el))


const hiddenElemnts2 = document.querySelectorAll(".hidden")
window.addEventListener("scroll", animate)

function animate() {
    let windowHeight = window.innerHeight;
    let revealPoint = 150;
    hiddenElemnts2.forEach(el => {
        if (el.getBoundingClientRect().top < windowHeight - revealPoint) {
            el.classList.add("show")
        }
        else {
            el.classList.remove("show")
        }
    });
}