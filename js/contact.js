document.getElementById('contactForm').addEventListener('submit', (event) =>{
    event.preventDefault() 

//Validación Nombre
const nombre = document.getElementById('name');
const nameError = document.getElementById('nameError');

if (nombre.value.trim() === ''){
    nameError.textContent = 'Por favor, introduzca su nombre.'
    nameError.classList.add('error--menssage')
}
else {
    nameError.textContent = ''
    nameError.classList.remove('error--menssage')
}

//Validación Apellido
const apellido = document.getElementById('lastname');
const lastnameError = document.getElementById('lastnameError');

if (apellido.value.trim() === ''){
    lastnameError.textContent = 'Por favor, introduzca su apellido.'
    lastnameError.classList.add('error--menssage')
}
else {
    lastnameError.textContent = ''
    lastnameError.classList.remove('error--menssage')
}

//Validación DNI
const dni = document.getElementById('dni');
const dniError = document.getElementById('dniError');

if (dni.value.trim() === '' || dni.value.length < 7){
    dniError.textContent = 'Por favor, introduzca su DNI (Debe ser válido).'
    dniError.classList.add('error--menssage')
}
else {
    dniError.textContent = ''
    dniError.classList.remove('error--menssage')
}

//Validación Email
const email = document.getElementById('email');
const emailError = document.getElementById('emailError');
// Patrón de validación 
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

if (!emailPattern.test(email.value)){
    emailError.textContent = 'Por favor, introduzca un email válido.';
    emailError.classList.add('error--menssage');
} else {
    emailError.textContent = '';
    emailError.classList.remove('error--menssage');
}


//Validación Teléfono
const telephone = document.getElementById('telephone');
const telephoneError = document.getElementById('telephoneError');

if (telephone.value.trim() === ''){
    telephoneError.textContent = 'Por favor, introduzca su teléfono.'
    telephoneError.classList.add('error--menssage')
}
else {
    telephoneError.textContent = ''
    telephoneError.classList.remove('error--menssage')
}

//Validación de tipos de seguro
const tipoSeguro = document.getElementById('options').value;
const secureOptionsError = document.getElementById('secureOptionsError');

if (tipoSeguro == 'default'){
    secureOptionsError.textContent = 'Por favor, seleccione un tipo de seguro';
    secureOptionsError.classList.add('error--menssage');
}
else {
    secureOptionsError.textContent = ''
    secureOptionsError.classList.remove('error--menssage')
}

//Envio de formulario correcto

if (!nameError.textContent && !lastnameError.textContent && !dniError.textContent && !emailError.textContent && !telephoneError.textContent && !secureOptionsError.textContent){
    Swal.fire({
        icon: 'success',
        title: 'Tu consulta ha sido registrada con éxito',
        text: 'En breve, nos pondremos en contacto con vos para ayudarte y solventar todas tus dudas!',
        confirmButtonText: 'Aceptar'
        });
    document.getElementById('contactForm').reset();
}
})

// Visualización precio según tipo de seguro
const opciones = document.getElementById('options');
opciones.addEventListener('change', function() {
    const selectedOption = opciones.value;
    if (selectedOption == 'basic'){
        document.getElementById('menssage').innerHTML='El valor del seguro básico es de $500'
    }
    else if (selectedOption == 'intermediate'){
        document.getElementById('menssage').innerHTML='El valor del seguro intermedio es de $1000';
    }
    else if (selectedOption == 'premium'){
        document.getElementById('menssage').innerHTML='El valor del seguro premium es de $1500';
    }
    else {
        document.getElementById('menssage').innerHTML='';
    }
});