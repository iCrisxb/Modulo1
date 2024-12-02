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


function mostrarContenido(tipo) {
    const contenedor = document.getElementById("contenedor");
    const texto = document.getElementById("texto");
    const imagen = document.getElementById("imagen-dinamica");

    // Información dinámica
    let contenidoTexto = "";
    let rutaImagen = "";

    if (tipo === "variables") {
        contenidoTexto = `
            <h2>Variables</h2>
            <p>Las variables son como "contenedores" en los que puedes guardar información para usarla más tarde. Piensa en ellas como en un cajón con una etiqueta. Por ejemplo, si tienes un cajón etiquetado como "edad", puedes poner un número dentro de ese cajón, como "8". Luego, cada vez que necesites saber la edad, solo miras el contenido de ese cajón sin tener que recordar o escribir "8" cada vez.</p>
        `;
        rutaImagen = "https://wilsonquispe.vercel.app/assets/blog/variables/variablesVisualmente.png";
    } else if (tipo === "condicionales") {
        contenidoTexto = `
            <h2>Condicionales</h2>
            <p>Las condicionales son como preguntas que le haces a tu programa para decidir qué hacer según la respuesta. Es como decirle:

<strong>"Si pasa esto, haz esto otro; y si no pasa, haz algo diferente."</strong>

Por ejemplo, imagina que estás viendo el clima antes de salir de casa. Podrías pensar algo como:

Si está lloviendo, entonces llevo un paraguas.
Si no está lloviendo, entonces salgo sin paraguas.</p>
        `;
        rutaImagen = "https://roa.cedia.edu.ec/webappscode/55/14.png";
    } else if (tipo === "ciclos") {
        contenidoTexto = `
            <h2>Ciclos</h2>
            <p>Los ciclos son como repetir una tarea varias veces de manera automática, sin tener que escribirla una y otra vez. Es como decirle a alguien:

<strong>"Haz esto una y otra vez hasta que te diga que pares", o también, "Haz esto tantas veces como te lo indique."</strong>

Por ejemplo, imagina que necesitas contar del 1 al 10. En lugar de escribir "1, 2, 3…" manualmente cada vez, un ciclo lo haría por ti: le dices que empiece en 1, luego pase al siguiente número, y que pare cuando llegue al 10.</p><br>
        `;
        rutaImagen = "https://static.platzi.com/media/user_upload/ciclo%20for-d31940f9-1002-43a9-becf-6f02ff6c1bb0.jpg";
    }

    

    // Actualizar contenido dinámico
    texto.innerHTML = contenidoTexto;
    imagen.src = rutaImagen;

    // Mostrar contenedor con animación
    contenedor.classList.remove("oculto");
    setTimeout(() => {
        contenedor.classList.add("visible");
    }, 50); // Pequeño retraso para activar la animación
}

function mostrarJuego() {
    var juegoSection = document.getElementById("juego");
    // Cambia el estilo de la sección para hacerla visible
    juegoSection.style.display = "block";
}

