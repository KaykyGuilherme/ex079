const hamburguer = document.querySelector(".nav_hamburguer");

hamburguer.addEventListener('click', () =>{
    const navALL = document.querySelector(".nav_ALL");
    navALL.classList.toggle("active")
})