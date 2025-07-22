# Festival de Música

## Descripción del proyecto </h2>
Este sitio web funciona como pagina de anuncio para un evento musical, que cabe destacar es ficticio. 

## Tecnologías implementadas
- JS
- NPM
- GULP
- SASS

## Código y Proceso de Desarrollo
Este fue uno de mis primeros proyectos, con el cual pude dominar más a fondo JS, y otras tecnologías como NPM para gestión de dependencias, GULP para la integración de funciones, que me ha ayudaron a automatizar el código, como el WATCH, también se hiso uso del SASS.

### NPM
Se implemento esta tecnologias con el fin de instalar dependencias como SASS, que es como CSS pero con mas funcionalidades, ademas de generarnos el archivo .JSON, que es el que tiene las funcion "DEV", que esta escrito en el archivo "GULP-FILE".
     
	"scripts": {
    "sass": "sass --watch src/scss:build/css",
    "dev": "gulp"
	},


### GULP
Hablando del GULPFILE, cabe destacar que hicimos uso de la dependencia GULP, que precisamente es necesario para el archivo GULP, esta se utilizó para generar el CSS.APP por cada cambio de código en los archivos de SASS, y los mismo con JS.APP.
    
	export function dev(){ 
	watch('src/scss/**/*.scss', css), 
	watch('src/js/**/*.js', js)
	watch('src/img/**/*.{png, jpg}', imagenes)
	}
	
	export function js( done ){
	src('src/js/app.js')
	pipe( terser() )
	.pipe( dest('build/js'))
	done();
	}
	
	export function css( done ){
	src('src/scss/scss.scss', {sourcemaps: true})
	pipe( sass({
	outputStyle: 'compressed'
	}).on('error', sass.logError) )
	pipe( dest('build/css', {sourcemaps: '.'})
	)
	done();
	}

### Java Script
El código de JS, se implementó todo en el APP.JS, que además nos sirve para hacer el sitio web mucho más dinámico, a continuación se va a mostrar cada una de las funciones que utiliza para esto:
     
	navegacionFixed();
    crearImagen();
    resaltarEnlaces();
    enlaceScroll(); 
	 

navegacionFixed(): Se utlizo para hacer que el NAV sea fixed luego de pasada la imagen, haciendo scroll hacia abajo.
      
	      document.addEventListener('scroll', function () {
        if (sobreFestival.getBoundingClientRect().bottom < 1) {
          //  head.classList.add('fixed');
        } else {
           // head.classList.remove('fixed');
        }
         });

crearImagen(): Esta funcion sirvio para la creacion de las imagenes a traves de un for.
     
	     for (let i = 1; i <= cantidad; i++) {
        const images = document.createElement('PICTURE');
        images.innerHTML = `
        <h2>  </h2>
            <source srcset="build/img/gallery/thumb/${i}.avif" type="image/avif">
            <source srcset="build/img/gallery/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/gallery/thumb/${i}.jpg" alt="imagen galeria">
         `;

        //add EventHandler
        images.addEventListener('click', function () {
            crearModal(i);
        })
        /*images.onclick = function () {
            crearModal(i);
        }*/

        galeria.appendChild(images);
    }

resaltarEnlaces(): El nombre ya es bastante descriptivo pero sirve especialmente para resaltar el enlace en el NAV, dependendiendo de en que parte de la paginas nos encontremos.
     
	     document.addEventListener('scroll', function () {
        const section = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.main-nav a')
        let actual = "";

        section.forEach(section => {

            const sectionTop = section.offsetTop
            const sectionAltura = section.clientHeight

            console.log(sectionTop);
            console.log(sectionAltura);

            if (window.scrollY >= (sectionTop - sectionAltura / 3)) {
                actual = section.id;
            }

        })

        navLinks.forEach(link => {
            link.classList.remove('activo');
            if (link.getAttribute('href') === '#' + actual) {
                link.classList.add('activo');
            }
        })

    })
	

enlaceScroll(): Si le damos click, un ejemplo a Galería, nos lleva directamente a la sección de galerías.
	    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)

            section.scrollIntoView({ behavior: 'smooth' })
        })
    })
	
