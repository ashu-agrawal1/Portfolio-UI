const backendUrl = "https://vast-blue-piranha-slip.cyclic.app"
let tablinks = document.getElementsByClassName("tab-links")
let tabcontents = document.getElementsByClassName("tab-contents")
function openTab(tab) {
    for (tablink of tablinks) {
        tablink.classList.remove('active-link')
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tab).classList.add("active-tab")
}

let sidemenu = document.getElementById("sidemenu")

function openMenu() {
    sidemenu.style.right = 0
}

function closeMenu() {
    if (getComputedStyle(sidemenu).position == "fixed") {
        sidemenu.style.right = "-200px"
    }
}

function sendMail(event) {
    event.preventDefault()
    let form = document.getElementById("mailform")
    let formdata = new FormData(form)
    let data = {}
    for (var [key, value] of formdata.entries()) {
        data[key] = value
    }
    let msg = document.getElementById("msg")
    let submitBtn = document.getElementById("submit-btn")
    submitBtn.disabled = true
    fetch(backendUrl + '/visitor-mail', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            submitBtn.disabled = false
            msg.innerHTML = "Message sent successfully!!!"
            setTimeout(() => {
                msg.innerHTML = ""
            }, 5000);
            form.reset()
        })
        .catch(err => {
            console.log(err)
            submitBtn.disabled = false
            alert("Sorry we encountered error while sending your message!!")
        })
}