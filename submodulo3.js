// Obtener el menú flotante y sus elementos
const menuFlotante = document.getElementById("menu-flotante");
const menuToggle = document.getElementById("menu-toggle");
const menuList = document.querySelector("#menu-flotante ul");

// Alternar visibilidad de la lista cuando se haga clic en el título
menuToggle.addEventListener("click", () => {
  menuList.style.display = menuList.style.display === "block" ? "none" : "block";
});

// Hacer que el menú flotante sea arrastrable
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

// Iniciar el arrastre (para mouse)
menuFlotante.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - menuFlotante.offsetLeft;
  offsetY = e.clientY - menuFlotante.offsetTop;
  menuFlotante.style.cursor = "grabbing"; // Cambiar cursor
});

// Iniciar el arrastre (para pantallas táctiles)
menuFlotante.addEventListener("touchstart", (e) => {
  isDragging = true;
  const touch = e.touches[0];
  offsetX = touch.clientX - menuFlotante.offsetLeft;
  offsetY = touch.clientY - menuFlotante.offsetTop;
});

// Mover el menú (para mouse)
document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    menuFlotante.style.left = `${e.clientX - offsetX}px`;
    menuFlotante.style.top = `${e.clientY - offsetY}px`;
  }
});

// Mover el menú (para pantallas táctiles)
document.addEventListener("touchmove", (e) => {
  if (isDragging) {
    const touch = e.touches[0];
    menuFlotante.style.left = `${touch.clientX - offsetX}px`;
    menuFlotante.style.top = `${touch.clientY - offsetY}px`;
  }
});

// Finalizar el arrastre (para mouse)
document.addEventListener("mouseup", () => {
  isDragging = false;
  menuFlotante.style.cursor = "move"; // Restaurar cursor
});

// Finalizar el arrastre (para pantallas táctiles)
document.addEventListener("touchend", () => {
  isDragging = false;
});

// Obtener elementos del menú de navegación
const menuNav = document.getElementById("menu-navegacion");
const menuNavToggle = document.getElementById("menu-nav-toggle");
const menuNavList = document.querySelector("#menu-navegacion ul");

// Alternar visibilidad de la lista cuando se haga clic en el título
menuNavToggle.addEventListener("click", () => {
  menuNavList.style.display = menuNavList.style.display === "block" ? "none" : "block";
});

// Hacer que el menú de navegación sea arrastrable
let isDraggingNav = false;
let offsetXNav = 0;
let offsetYNav = 0;

// Iniciar el arrastre (para mouse)
menuNav.addEventListener("mousedown", (e) => {
  isDraggingNav = true;
  offsetXNav = e.clientX - menuNav.offsetLeft;
  offsetYNav = e.clientY - menuNav.offsetTop;
  menuNav.style.cursor = "grabbing";
});

// Iniciar el arrastre (para pantallas táctiles)
menuNav.addEventListener("touchstart", (e) => {
  isDraggingNav = true;
  const touch = e.touches[0];
  offsetXNav = touch.clientX - menuNav.offsetLeft;
  offsetYNav = touch.clientY - menuNav.offsetTop;
});

// Mover el menú (para mouse)
document.addEventListener("mousemove", (e) => {
  if (isDraggingNav) {
    menuNav.style.left = `${e.clientX - offsetXNav}px`;
    menuNav.style.top = `${e.clientY - offsetYNav}px`;
  }
});

// Mover el menú (para pantallas táctiles)
document.addEventListener("touchmove", (e) => {
  if (isDraggingNav) {
    const touch = e.touches[0];
    menuNav.style.left = `${touch.clientX - offsetXNav}px`;
    menuNav.style.top = `${touch.clientY - offsetYNav}px`;
  }
});

// Finalizar el arrastre (para mouse)
document.addEventListener("mouseup", () => {
  isDraggingNav = false;
  menuNav.style.cursor = "move";
});

// Finalizar el arrastre (para pantallas táctiles)
document.addEventListener("touchend", () => {
  isDraggingNav = false;
});

