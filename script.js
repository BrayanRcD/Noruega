// ===============================
// Menú desplegable con hover
// ===============================
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.setProperty("background-color", "#00205B", "important");
    link.style.setProperty("color", "#FFFFFF", "important");
  });
  link.addEventListener("mouseout", () => {
    link.style.removeProperty("background-color");
    link.style.removeProperty("color");
  });
});

// ===============================
// Slider con efecto de desplazamiento (carrusel)
// ===============================
let index = 0;
const slides = document.querySelector("#slider .slides");
const total = document.querySelectorAll("#slider .slides img").length;

function showSlide(i) {
  slides.style.transform = `translateX(-${i * 100}%)`;
}

showSlide(index);

setInterval(() => {
  index = (index + 1) % total;
  showSlide(index);
}, 4000);

// ===============================
// Diccionario de traducciones
// ===============================
const traducciones = {
  es: {
    titulo: "Festivales de Noruega",
    menu: ["Inicio","Festivales","Glosario","Contacto"],
    heroTitulo: "Descubre la cultura y tradición",
    heroTexto: "Explora los festivales más representativos de Noruega y planifica tu viaje con información clara.",
    boton: "Ver festivales",
    syttendeTitulo: "Syttende Mai",
    syttendeTexto: "El Syttende Mai, celebrado cada 17 de mayo, es el Día Nacional de Noruega. Conmemora la firma de la Constitución en 1814 y es una de las celebraciones más importantes del país. Las calles se llenan de desfiles escolares, bandas de música y personas vestidas con el bunad, el traje tradicional noruego. Es un día de orgullo nacional, donde se mezclan la historia, la cultura y la alegría colectiva.",
    bergenTitulo: "Festival de Música de Bergen",
    bergenTexto: "El Festival Internacional de Música de Bergen es uno de los eventos culturales más prestigiosos de Noruega. Fundado en 1953, reúne a artistas de todo el mundo en conciertos de música clásica, ópera, jazz y contemporánea.",
    glosarioTitulo: "Glosario básico en Noruego",
    glosarioItems: [
      "Hei – Hola","Takk – Gracias","Festival – Festival",
      "God morgen – Buenos días","God kveld – Buenas noches","Velkommen – Bienvenido",
      "Mat – Comida","Musikk – Música","Dans – Danza",
      "Kultur – Cultura","Tradisjon – Tradición","By – Ciudad"
    ],
    footer: ["© 2026 Festivales de Noruega | Brayan Ricardo Castellanos Daza","Ingeniería Multimedia - UNAD"]
  },
  en: {
    titulo: "Festivals of Norway",
    menu: ["Home","Festivals","Glossary","Contact"],
    heroTitulo: "Discover culture and tradition",
    heroTexto: "Explore Norway's most representative festivals and plan your trip with clear information.",
    boton: "See festivals",
    syttendeTitulo: "Syttende Mai",
    syttendeTexto: "Syttende Mai, celebrated every May 17, is Norway’s National Day. It commemorates the signing of the Constitution in 1814 and is one of the country’s most important celebrations. The streets fill with school parades, marching bands, and people dressed in the bunad, the traditional Norwegian costume. It is a day of national pride, where history, culture, and collective joy come together.",
    bergenTitulo: "Bergen Music Festival",
    bergenTexto: "The Bergen International Festival is one of Norway’s most prestigious cultural events. Founded in 1953, it brings together artists from around the world for concerts of classical music, opera, jazz, and contemporary works.",
    glosarioTitulo: "Basic Norwegian Glossary",
    glosarioItems: [
      "Hei – Hello","Takk – Thank you","Festival – Festival",
      "God morgen – Good morning","God kveld – Good evening","Velkommen – Welcome",
      "Mat – Food","Musikk – Music","Dans – Dance",
      "Kultur – Culture","Tradisjon – Tradition","By – City"
    ],
    footer: ["© 2026 Festivals of Norway | Brayan Ricardo Castellanos Daza","Multimedia Engineering - UNAD"]
  }
};

// ===============================
// Función para aplicar traducción
// ===============================
function aplicarTraduccion(idioma) {
  const t = traducciones[idioma];

  // Título
  document.querySelector("header h1").textContent = t.titulo;

  // Menú
  const menuLinks = document.querySelectorAll("nav ul li a");
  t.menu.forEach((txt, i) => { menuLinks[i].textContent = txt; });

  // Hero
  document.querySelector(".hero-text h2").textContent = t.heroTitulo;
  document.querySelector(".hero-text p").textContent = t.heroTexto;
  document.querySelector(".hero-text a").textContent = t.boton;

  // Secciones
  const articulos = document.querySelectorAll("#festivales article");
  articulos[0].querySelector("h3").textContent = t.syttendeTitulo;
  articulos[0].querySelector("p").textContent = t.syttendeTexto;
  articulos[1].querySelector("h3").textContent = t.bergenTitulo;
  articulos[1].querySelector("p").textContent = t.bergenTexto;

  // Glosario
  document.querySelector("#glosario h2").textContent = t.glosarioTitulo;
  const glosarioItems = document.querySelectorAll("#glosario li");
  t.glosarioItems.forEach((txt, i) => { glosarioItems[i].textContent = txt; });

  // Footer
  const footerPs = document.querySelectorAll("footer p");
  footerPs[0].textContent = t.footer[0];
  footerPs[1].textContent = t.footer[1];
}

// ===============================
// Saludo dinámico según idioma y hora
// ===============================
const saludo = document.createElement("p");
saludo.style.marginTop = "0.5rem";
saludo.style.fontWeight = "bold";
saludo.style.color = "#FFFFFF";
document.querySelector("header").appendChild(saludo);

function actualizarSaludo(lang) {
  const hora = new Date().getHours();
  let mensaje = "";

  if (lang === "es") {
    if (hora < 12) mensaje = "¡Buenos días! Bienvenido a los festivales de Noruega.";
    else if (hora < 18) mensaje = "¡Buenas tardes! Descubre la cultura noruega.";
    else mensaje = "¡Buenas noches! Explora la tradición de Noruega.";
  } else {
    if (hora < 12) mensaje = "Good morning! Welcome to Norway's festivals.";
    else if (hora < 18) mensaje = "Good afternoon! Discover Norwegian culture.";
    else mensaje = "Good evening! Explore Norway's traditions.";
  }

  saludo.textContent = mensaje;
}

// ===============================
// Conectar el menú desplegable con la traducción
// ===============================
document.querySelectorAll(".dropdown-content li").forEach(item => {
  item.addEventListener("click", () => {
    const lang = item.getAttribute("data-lang"); // obtiene "es" o "en"
    aplicarTraduccion(lang); // aplica traducción a toda la página
    actualizarSaludo(lang);  // actualiza saludo dinámico
  });
});

// ===============================
// Inicializar en español por defecto
// ===============================
aplicarTraduccion("es");
actualizarSaludo("es");
