// defino el boton para todos los inputs de forma que si la información cargada es la correcta aparezca en verde y si algun dato
// cargado es incorrecto aparezca en rojo

const btnOk = document.getElementById('btnOk')
//cada input lleva su propia especificación
/*    INPUT USER   */
const userInput = document.getElementById('userInput')

function validateUser(username) {
  //especifica que el nombre de usuario debe contener entre 5 y 20 caracteres alfanuméricos o guiones bajos
  const regexUser = /^[a-zA-Z0-9_]{5,20}$/
  return regexUser.test(username)
}

function validateUserInput() {
  const username = userInput.value;
  const isValid = validateUser(username)
  if (isValid) {
    // El nombre de usuario es válido
    userInput.setCustomValidity('')
    userInput.style.borderColor = '#37ae00'
    userInput.style.background = '#51ff00'
    btnOk.style.background = '#51ff00'
  } else {
    // El nombre de usuario es inválido
    userInput.setCustomValidity('')
    userInput.style.borderColor = '#ae0000'
    userInput.style.background = '#ff0000'
    btnOk.style.background = '#ff0000'
  }
}

userInput.addEventListener('input', validateUserInput)
userInput.addEventListener('invalid', validateUserInput)


/*    ----------------    ----------------    ----------------    ----------------    ----------------    ----------------    */
/*    ----------------    ----------------    ----------------    ----------------    ----------------    ----------------    */
/*    INPUT PASSWORD   */

const passwordInput = document.getElementById('passwordInput')

function validatePassword(password) {
  // La contraseña debe tener al menos 8 caracteres, letras minúscula, letras mayúscula y números
  const regexPassword = /^[a-zA-Z0-9_]{8,}$/
  return regexPassword.test(password)
}

function validatePasswordInput() {
  const password = passwordInput.value;
  const issValid = validatePassword(password)
  if (issValid) {
    // La contraseña es válida

    passwordInput.style.borderColor = '#37ae00'
     passwordInput.style.background = '#51ff00'
     btnOk.style.background = '#51ff00'
  } else {
    // La contraseña es inválida   
    passwordInput.style.borderColor = '#ae0000'
    passwordInput.style.background = '#ff0000'
    btnOk.style.background = '#ff0000'
  }
}

passwordInput.addEventListener('input', validatePasswordInput)
passwordInput.addEventListener('invalid', validatePasswordInput)

/*    ----------------    ----------------    ----------------    ----------------    ----------------    ----------------    */
/*    ----------------    ----------------    ----------------    ----------------    ----------------    ----------------    */
/*    INPUT E-MAIL   */
const emailInput = document.getElementById('emailInput')


function validateEmail(email) {
  const regexEmail = /\S+@\S+\.\S+/
  return regexEmail.test(email);
}

function validateEmailInput() {
  const email = emailInput.value;
  const esValido = validateEmail(email)
  if (esValido) {
    // EL e-mail es válido
    emailInput.setCustomValidity('')
    emailInput.style.borderColor = '#37ae00'
    emailInput.style.background = '#51ff00'
    btnOk.style.background = '#51ff00'
  } else {
    // EL e-mail es inválido

    emailInput.style.borderColor = '#ae0000'
    emailInput.style.background = '#ff0000'
    btnOk.style.background = '#ff0000'
  }
}

emailInput.addEventListener('input', validateEmailInput)
emailInput.addEventListener('invalid', validateEmailInput)