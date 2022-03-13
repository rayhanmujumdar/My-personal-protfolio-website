window.addEventListener("scroll",() => {
    const navbar = document.querySelector("#nav-toggle");
    navbar.classList.toggle("sticky",window.scrollY > 0);
})
// contact modal add
document.getElementById("contact").addEventListener("click",() => {
    console.log("hello")
    const banner = document.getElementById("banner")
    const div = document.createElement("div")
    div.innerHTML =  `
    
    `
    banner.appendChild(div)
})