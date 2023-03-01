/*                  validacion de datos                       */
let texto = document.getElementById("entradaTxt");
let email = document.getElementById("entradaTxt");
let comentario = document.getElementById("entradaTxt");
let conttainer = document.getElementById("datos");
let parrafo = document.getElementById("warnings");

datos.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let enviar = false
    let regexEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(texto.nodeValue.length < 20){
      warnings += `El texto no es válido <br>`
      entrar = true
  }
  if(regexEmail.test(email.value)){
      warnings += `El mail no es válido <br>`
      entrar = true
  }
  if(comentario.nodeValue.length < 50){
    warnings += `El comentario no es valido <br>`
     entrar = true
    }
    if(entrar){
      parrafo.innerHTML = warnings
    }
})
/*                  datos de contacto                          */
entradaTxt.onmouseover = function(event) {
  let target = event.target;
  target.style.background = '#00f0ff';

  text.value += `over -> ${target.tagName}\n`;
  text.scrollTop = text.scrollHeight;
};

entradaTxt.onmouseout = function(event) {
  let target = event.target;
  target.style.background = '';

  text.value += `out <- ${target.tagName}\n`;
  text.scrollTop = text.scrollHeight;
};
/*                  solitud de contacto                          */
mailTxt.onmouseover = function(event) {
  let target = event.target;
  target.style.background = '#00f0ff';

  text.value += `over -> ${target.tagName}\n`;
  text.scrollTop = text.scrollHeight;
};

mailTxt.onmouseout = function(event) {
  let target = event.target;
  target.style.background = '';

  text.value += `out <- ${target.tagName}\n`;
  text.scrollTop = text.scrollHeight;
}
/*                  comentario                          */
areaTxt.onmouseover = function(event) {
  let target = event.target;
  target.style.background = '#00f0ff';

  text.value += `over -> ${target.tagName}\n`;
  text.scrollTop = text.scrollHeight;
};

areaTxt.onmouseout = function(event) {
  let target = event.target;
  target.style.background = '';

  text.value += `out <- ${target.tagName}\n`;
  text.scrollTop = text.scrollHeight;
};