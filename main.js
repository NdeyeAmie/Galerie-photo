/*==========================toggle icon navbar==================== */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".header");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*==========================scroll sections active link ==================== */