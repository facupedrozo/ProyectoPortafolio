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
       cambiarFondo('https://data.terabox.com/thumbnail/1eabbf3d30f919f06735a6556d9d3c9b?fid=4401295839289-250528-1090167803345483&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-d1Qtv2vVaXGdBjv5Up45k40x4mc%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8873531922154240188&dp-callid=0&time=1701262800&size=c1024_u768&quality=90&vuk=4401295839289&ft=image&autopolicy=1','https://data.terabox.com/thumbnail/af65c06b24b6e5c28092b3cc859703e4?fid=4401295839289-250528-283210452702669&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-TwXcbENslzmolprG3OFJIlxQ2Bk%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8873757384603680349&dp-callid=0&time=1701262800&size=c1024_u768&quality=90&vuk=4401295839289&ft=image&autopolicy=1');
 
    // Cambiar la imagen dentro de la seccion sobre mi
    document.querySelector('.sobreMi .card-img-top').src = 'https://64.media.tumblr.com/56af48987b88f565a3a6c30f9f7e2e56/af8f8493399fa4e8-98/s540x810/c47afac171ddc279f7f16c83f1b37535d9cfec1c.jpg';
}

function mostrarHabilidades() {
    //ocultar secciones
    sobreMiSection.style.display = 'none';
    habilidadesSection.style.display = 'block';
    contactSection.style.display = 'none';
      cambiarFondo('https://data.terabox.com/thumbnail/3d4947bb420d0827fc954fab9fc5f861?fid=4401295839289-250528-912376089842631&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-h51vySgcL059yjhYHP4SQtFkUWI%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8873787671184429993&dp-callid=0&time=1701262800&size=c1024_u768&quality=90&vuk=4401295839289&ft=image&autopolicy=1','https://data.terabox.com/thumbnail/39430580afaaae962ee1b2bf42be70db?fid=4401295839289-250528-164600079089082&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-uH9SJsG1TuWaCRo2HngGx1rGv7Q%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8872989181293983555&dp-callid=0&time=1701259200&size=c1024_u768&quality=90&vuk=4401295839289&ft=image&autopolicy=1')

    //cambia la imagen dentro de la seccion habilidaes.
    document.querySelector('.habilidades .card-img-top').src='https://data.terabox.com/thumbnail/9ae00fe40fa78aac4bf8dea4e8896189?fid=4401295839289-250528-195133161346350&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-uyVavvt2xzzgH50qbgFaV3m8%2b1A%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8873034666954248296&dp-callid=0&time=1701259200&size=c1024_u768&quality=90&vuk=4401295839289&ft=image&autopolicy=1'
}

function mostrarContacto() {
    // Ocultar secciones
    sobreMiSection.style.display = 'none';
    habilidadesSection.style.display = 'none';
    contactSection.style.display = 'block';
     
    cambiarFondo('https://data.terabox.com/thumbnail/98c6cd2f79f1f0df0ab2c24f656fc475?fid=4401295839289-250528-684772347704974&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-34xMk7bAdExt5LR2mZQs368TQcQ%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8873472793005963159&dp-callid=0&time=1701262800&size=c1024_u768&quality=90&vuk=4401295839289&ft=image&autopolicy=1','https://data.terabox.com/thumbnail/87556e6df5db6a1168f7af00e82b2bc9?fid=4401295839289-250528-50797475017409&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-A9x05SUrZsOnqGwKZe9CMNlib9s%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8873100701501648981&dp-callid=0&time=1701259200&size=c1024_u768&quality=90&vuk=4401295839289&ft=image&autopolicy=1')
    //cambiar la imagen dentro de la seccion contacto
    document.querySelector('.contact .card-img-top').src='https://data.terabox.com/thumbnail/cf88c0831317caffd667d18c0b29c25a?fid=4401295839289-250528-889098841063194&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-a4a8beoYA9oDZ4tHr9n%2bRQZL2Sc%3d&expires=8h&chkbd=0&chkv=0&dp-logid=8873448358470000408&dp-callid=0&time=1701262800&size=c1024_u768&quality=90&vuk=4401295839289&ft=image&autopolicy=1'
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
    cambiarFondo('https://data.terabox.com/thumbnail/d4844887024e8f6dded5902fc7dc853c?fid=4401295839289-250528-1048638438908069&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-bV1oHtznpnZ2H2A0MS6noO3L8/w=&expires=8h&chkbd=0&chkv=0&dp-logid=8872447123697898478&dp-callid=0&time=1701259200&size=c1024_u768&quality=90&vuk=4401295839289&ft=image&autopolicy=1','https://data.terabox.com/thumbnail/37b6bf84a747d1ba2d8c38445f919a79?fid=4401295839289-250528-94010984381712&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-/FimX6GZnbADIeq//nrZm33FOq8=&expires=8h&chkbd=0&chkv=0&dp-logid=8872464859280062755&dp-callid=0&time=1701259200&size=c1024_u768&quality=90&vuk=4401295839289&ft=image&autopolicy=1');
}