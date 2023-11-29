// Obtener referencias a las secciones y botones
const sobreMiSection = document.getElementById('sobreMiSection');
const habilidadesSection = document.getElementById('habilidadesSection');
const contactSection = document.getElementById('contactSection');


const btnSobreMi = document.querySelector('button:nth-child(1)');//el primer boton que aprece en nav
const btnHabilidades = document.querySelector('button:nth-child(2)');//el segundo botno(habilidades)
const btnContacto = document.querySelector('button:nth-child(3)');//el tercer boton (contacto)


function mostrarSobreMi() {
    // Ocultando secciones
    sobreMiSection.style.display = 'block';
    habilidadesSection.style.display = 'none';
    contactSection.style.display = 'none';
       // Cambiar la imagen de fondo(el background del body y del banner)
       cambiarFondo('https://wallpapers.com/images/hd/dark-navy-blue-background-for-desktop-mdifipn51hsct4q5.jpg','https://wallpapers.com/images/hd/pastel-blue-aesthetic-desktop-iydlozdbjv6rhugt.jpg');
 
    // Cambiar la imagen dentro de la seccion sobre mi
    document.querySelector('.sobreMi .card-img-top').src = 'https://64.media.tumblr.com/56af48987b88f565a3a6c30f9f7e2e56/af8f8493399fa4e8-98/s540x810/c47afac171ddc279f7f16c83f1b37535d9cfec1c.jpg';
}

function mostrarHabilidades() {
    //ocultar secciones
    sobreMiSection.style.display = 'none';
    habilidadesSection.style.display = 'block';
    contactSection.style.display = 'none';
      cambiarFondo('https://images3.alphacoders.com/129/1293448.jpg','https://sun9-28.userapi.com/impf/w-3-Bn9lg9mg-pNOVSXOyRm8g6C8aQqxWGw--A/EiwydEtESz0.jpg?size=640x480&quality=96&sign=771f113bf8e8462ddeaa9fc92ddbebae&type=album')

    //cambia la imagen dentro de la seccion habilidaes.
    document.querySelector('.habilidades .card-img-top').src='https://media.tenor.com/tlslhwLM_SEAAAAC/cyber-digital.gif'
}

function mostrarContacto() {
    // Ocultar secciones
    sobreMiSection.style.display = 'none';
    habilidadesSection.style.display = 'none';
    contactSection.style.display = 'block';
     
    cambiarFondo('https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/11.jpg?3','https://wallpapercrafter.com/desktop/144023-space-drawing-iPad-planet.png')
    //cambiar la imagen dentro de la seccion contacto
    document.querySelector('.contact .card-img-top').src='https://w0.peakpx.com/wallpaper/28/141/HD-wallpaper-timmy-turnt-turner-black-blue-dark-fairly-odd-parents-phone-simple-tattoo-vintage-thumbnail.jpg'
}


btnSobreMi.addEventListener('click', mostrarSobreMi);
btnHabilidades.addEventListener('click', mostrarHabilidades);
btnContacto.addEventListener('click', mostrarContacto);


function cambiarFondo(bodyImagenURL, bgPrimaryImagenURL) {
    document.body.style.backgroundImage = `url(${bodyImagenURL})`;
    document.body.style.backgroundRepeat = 'repeat';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = 'cover';

    // Cambiar también el fondo de .bg-primary (seria el banner)
    const bgPrimary = document.querySelector('.bg-primary');
    if (bgPrimary) {
        bgPrimary.style.backgroundImage = `url(${bgPrimaryImagenURL})`;
        bgPrimary.style.backgroundRepeat = 'repeat';
        bgPrimary.style.backgroundPosition = 'center';
    }
}
const header = document.querySelector('header');

header.addEventListener('click', mostrarTodasLasSecciones);

function mostrarTodasLasSecciones() {
    sobreMiSection.style.display = 'block';
    habilidadesSection.style.display = 'block';
    contactSection.style.display = 'block';
    
    //cambiamos las imagenes de fondo nuevamente
    cambiarFondo('https://images.alphacoders.com/133/1330483.png', 'https://www.bhmpics.com/downloads/night-minimalist-Wallpapers/21.550899-mozilla_firefox-mozilla-night-forest-landscape-horizon-minimalism-illustration-digital_art-firefox_nightly-748x468.jpg');
}