//array simulador de base de datos de proyectos
const array = [
  { titulo: "Página Web de Biene Raices ", imagenes: "src/img/proyects-imagenes/header.jpg", enlacesGT: "https://github.com/Samur-Code/bienesraices-MVC-PHP", visitarWeb: "www.google.com" },
  { titulo: "Evento de Festival de Música", imagenes: "src/img/proyects-imagenes/festival.png", enlacesGT: "https://github.com/Samu4Bit/musicafestival", visitarWeb: "www.youtube.com" },
  { titulo: "Porfolio Web", imagenes: "src/img/proyects-imagenes/portafolio.png", enlacesGT: "https://github.com/Samur-Code/portafolio-Web", visitarWeb: "www.wikipedia.com" },
];

const arrayDeTecnologias = [

  //Front End
  { ramas: "Front End ", imagenesTecnologia: "src/img/skills/app-window.svg", 
    tecnologias : [
      { tecnoUno: "HTML" },
      { tecnoDos: "NPM" },
      { tecnoTres: "JS" },
      { tecnoCuatro: "SASS" },
      { tecnoCinco: "GULP" }
    ] 
  },

  //Back End
  { ramas: " Back End ", imagenesTecnologia: "src/img/skills/brand-php.svg", 
    tecnologias : [
      { tecnoUno: "PHP" },
      { tecnoDos: "MYSQL" },
      { tecnoUno: "COMPOSER" }
    ] 
  },

  //Control de Versiones
  { ramas: " Control de Versiones ", imagenesTecnologia: "src/img/skills/brand-github.svg", 
    tecnologias : [
      { tecnoUno: "GIT" },
      { tecnoDos: "GitHub" }
    ] 
  }

];

addEventListener('DOMContentLoaded', function () {
  EventListen();
  mostrarProyectos();
  mostrarHabilidades();
})

function mostrarHabilidades() {
  arrayDeTecnologias.forEach(area => {
    const ramas = area.ramas;
    const imagenesHabilidades = area.imagenesTecnologia;
    
    //QUERYS
    const habilidades = document.querySelector(".tecnologias__grid");
   
    //Crear Elementos
    const divHabilidades = document.createElement("DIV");
    divHabilidades.classList.add("contenedorHabilidades");
    habilidades.appendChild(divHabilidades);
    
    const areaHTML = document.createElement("P");
    areaHTML.textContent = ramas;
    areaHTML.style.fontWeight = "bold";
    divHabilidades.appendChild(areaHTML);
    
    const contenedorImagenes = document.createElement("DIV");
    contenedorImagenes.classList.add("containerImagen");
    divHabilidades.appendChild(contenedorImagenes);

    const images = document.createElement("IMG");
    images.src = imagenesHabilidades;
    images.classList.add("imagenesHanilidades");
    contenedorImagenes.appendChild(images);
    
    area.tecnologias.forEach(tecnologia => {
       // Cada objeto de tecnología tiene una sola propiedad, así que usamos Object.values
       const tecnologias = Object.values(tecnologia)[0];
      
       const tecnoHTML = document.createElement("P");
       tecnoHTML.textContent = tecnologias;
       divHabilidades.appendChild(tecnoHTML);
    });
    
      // console.log("------------------------");
  });
}

function mostrarProyectos() {

  array.forEach((item, index) => {
    //Array Elementes
    const title = item.titulo;
    const imagen = item.imagenes;
    const urlGit = item.enlacesGT;
    const urlWeb = item.visitarWeb;

    //Querys
    const divProyecto = document.querySelector(".proyects-grid");

    //Creando los Elementos
    const contenedorProyecto = document.createElement("DIV");
    contenedorProyecto.classList.add("divProyectos");
    divProyecto.appendChild(contenedorProyecto);

    const imagenesHTML = document.createElement("IMG");
    imagenesHTML.src = imagen;
    imagenesHTML.classList.add("imagenesProyectos");
    contenedorProyecto.appendChild(imagenesHTML);

    const titleHtml = document.createElement("P");
    titleHtml.textContent = title;
    titleHtml.classList.add("tituloProyecto");
    contenedorProyecto.appendChild(titleHtml);

    const contenedorEnlace = document.createElement("DIV");
    contenedorEnlace.classList.add("contenedorEnlace");
    contenedorProyecto.appendChild(contenedorEnlace);
    
    const enlacesGT = document.createElement("A");
    enlacesGT.classList.add("enlacesProyectos");
    enlacesGT.textContent = "Ver Código";
    enlacesGT.target = "_blank";
    enlacesGT.href = urlGit;
    contenedorEnlace.appendChild(enlacesGT);

    /*
    const verWeb = document.createElement("A");
    verWeb.textContent = "Visitar Web";
    verWeb.target = "_blank";
    verWeb.classList.add("enlacesProyectos");
    verWeb.href = urlWeb;
    contenedorEnlace.appendChild(verWeb);
    */

  });
  
}

function EventListen() {
  const menuDesplegable = document.querySelector('.image-menu .img');

  menuDesplegable.addEventListener('click', navegar);
}

function navegar() {
  const navegador = document.querySelector('.nav');

  //navegador.classList.toggle("mostar");
  if (navegador.classList.contains('mostrar')) {
    navegador.classList.remove('mostrar');
  } else {
    navegador.classList.add('mostrar');
  }

}

//** Ventana modal **//
var modal = document.getElementById("ventanaModal");

// Botón que abre el modal
var boton = document.getElementById("abrirModal");

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var span = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace click en el botón, se abre la ventana
boton.addEventListener("click", function () {
  modal.style.display = "block";
});

// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click", function () {
  modal.style.display = "none";
});

//** Errores en el formulario **//*
//** Ventana modal de errores**///

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modalValidador.style.display = "none";
  }
});