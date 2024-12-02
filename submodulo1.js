function mostrarEjemplo(ejemplo) {
    const contenedor = document.getElementById("ejemplo-visual");
    let contenido = "";
  
    switch (ejemplo) {
      case "casa":
        contenido = `
          <div>
            <h4>🏠 Construir una casa</h4>
            <p><b>Diseño:</b> Antes de construir una casa, haces un plano: ¿cuántos cuartos? ¿Dónde estará la cocina? ¿Qué materiales usarás?</p>
            <p><b>Relación con software:</b> El diseño de software es como un plano que muestra cómo funcionará tu programa, desde sus partes hasta los detalles más pequeños.</p>
          </div>
          <img src="casa.jpg" alt="Plano de una casa">
        `;
        break;
      case "carro":
        contenido = `
          <div>
            <h4>🚗 Crear un carro</h4>
            <p><b>Diseño:</b> Antes de hacer un carro, decides: ¿Qué tipo de motor? ¿Cuántas puertas? ¿Qué funciones tendrá?</p>
            <p><b>Relación con software:</b> Diseñar software es como planear un carro: aseguras que cada parte (ruedas, motor, luces) funcione juntas para que el carro se mueva.</p>
          </div>
          <img src="carro.jpg" alt="Plano de un carro">
        `;
        break;
      case "videojuego":
        contenido = `
          <div>
            <h4>🎮 Diseñar un videojuego</h4>
            <p><b>Diseño:</b> Antes de crear un videojuego, decides: ¿Cómo será el personaje principal? ¿Qué niveles habrá? ¿Qué reglas tendrá el juego?</p>
            <p><b>Relación con software:</b> El diseño de software es como crear un esquema del videojuego, donde planeas todo antes de escribir código para que sea divertido y funcional.</p>
          </div>
          <img src="videojuego.jpg" alt="Diseño de un videojuego">
        `;
        break;
      default:
        contenido = "<p>Selecciona un ejemplo para entender mejor el diseño de software.</p>";
    }
  
    contenedor.innerHTML = contenido;
  }
  
  const jugarBtn = document.getElementById('jugar-btn');
  const pasosContainer = document.getElementById('pasos-container');
  const minijuego = document.getElementById('minijuego');
  
  // Función para ocultar los pasos y mostrar el mini-juego
  jugarBtn.addEventListener('click', () => {
    pasosContainer.style.display = 'none';  // Oculta los pasos
    minijuego.style.display = 'block';      // Muestra el mini-juego
    jugarBtn.style.display = 'none';        // Oculta el botón "Jugar"
  });  

const bloques = document.querySelectorAll('.bloque');
const verificarBtn = document.getElementById('verificar');
const mensaje = document.getElementById('mensaje');

// Variables para manejo de arrastre/touch
let dragElement = null;
let touchStartIndex = null;

// Eventos de drag-and-drop para dispositivos con mouse
bloques.forEach((bloque, index) => {
  // Drag-and-drop
  bloque.addEventListener('dragstart', dragStart);
  bloque.addEventListener('dragover', dragOver);
  bloque.addEventListener('drop', drop);

  // Soporte táctil
  bloque.addEventListener('touchstart', (event) => touchStart(event, index));
  bloque.addEventListener('touchmove', touchMove);
  bloque.addEventListener('touchend', touchEnd);
});

// Funciones para drag-and-drop
function dragStart(event) {
  dragElement = event.target;
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  if (dragElement && event.target.classList.contains('bloque')) {
    const parent = event.target.parentElement;
    parent.insertBefore(dragElement, event.target.nextSibling);
  }
}

// Funciones para dispositivos táctiles
function touchStart(event, index) {
  touchStartIndex = index;
  dragElement = event.target;
}

function touchMove(event) {
  event.preventDefault(); // Previene el scroll mientras se arrastra
}

function touchEnd(event) {
  const touchLocation = event.changedTouches[0];
  const elementBelow = document.elementFromPoint(touchLocation.clientX, touchLocation.clientY);

  if (elementBelow && elementBelow.classList.contains('bloque')) {
    const parent = elementBelow.parentElement;
    parent.insertBefore(dragElement, elementBelow.nextSibling);
  }
  dragElement = null;
  touchStartIndex = null;
}

// Verificación del orden
verificarBtn.addEventListener('click', () => {
  const ordenActual = Array.from(document.querySelectorAll('.bloque')).map(bloque => bloque.id);
  const ordenCorrecto = ['bloque1', 'bloque2', 'bloque3', 'bloque4'];

  if (JSON.stringify(ordenActual) === JSON.stringify(ordenCorrecto)) {
    mensaje.textContent = '¡Correcto! Has ordenado los pasos.';
    mensaje.style.color = 'black';

    // Lanza el confeti
    confetti({
      particleCount: 100,  // Número de partículas
      spread: 70,          // Ángulo de dispersión
      origin: { y: 0.6 }   // Punto de origen 
    });
  } else {
    mensaje.textContent = 'El orden no es correcto. Inténtalo de nuevo.';
    mensaje.style.color = 'black';
  }
});
  
  function mostrarSiguiente(idSiguiente) {
    const etapas = document.querySelectorAll('.etapa');
    etapas.forEach(etapa => etapa.classList.add('oculto'));
  
    const siguiente = document.getElementById(idSiguiente);
    if (siguiente) {
      siguiente.classList.remove('oculto');
    }
  }
  
  function mostrarResumen() {
    const tipo = document.getElementById('tipo-pizza').value;
    const tamano = document.getElementById('tamano-pizza').value;
    const extras = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
                        .map(input => input.value);
  
    const precio = calcularPrecio(tamano, extras);
  
    document.getElementById('detalle-pedido').innerText = 
      `Pizza: ${tipo}, Tamaño: ${tamano}, Extras: ${extras.join(', ') || 'Ninguno'}`;
    document.getElementById('precio-pedido').innerText = `Precio total: $${precio} MXN`;
  
    document.getElementById('resumen-pedido').classList.remove('oculto');
  }
  
  function calcularPrecio(tamano, extras) {
    let base = tamano === "Grande" ? 200 : 150;
    return base + extras.length * 20;
  }
  
  function copiarCodigo() {
    const codigo = document.getElementById('codigo-pedido').innerText;
    const textarea = document.createElement('textarea');
    textarea.value = codigo;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Código copiado al portapapeles');
  }  
  
// Función para abrir el modal
function openModal() {
  document.getElementById('modal').style.display = "flex";
}

// Función para cerrar el modal
function closeModal() {
  document.getElementById('modal').style.display = "none";
}


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

