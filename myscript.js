document.querySelector(".travel-form").addEventListener("submit", function (event) {
  event.preventDefault(); 

  
  const inputs = document.querySelectorAll(".input-group");
  inputs.forEach((group) => {
    const errorSpan = group.querySelector(".error-message");
    if (errorSpan) errorSpan.remove();
  });

  // Obtener los valores de los campos
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const destino = document.getElementById("destino").value.trim();
  const fecha = document.getElementById("fecha").value.trim();
  const adultos = parseInt(document.getElementById("adultos").value.trim(), 10);
  const ninos = parseInt(document.getElementById("ninos").value.trim(), 10);
  let formularioValido = true;


  if (nombre === "") {
    mostrarError("nombre", "El nombre completo es obligatorio.");
    formularioValido = false;
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    mostrarError("email", "El correo electrónico es obligatorio.");
    formularioValido = false;
  } else if (!regexEmail.test(email)) {
    mostrarError("email", "El correo electrónico no es válido.");
    formularioValido = false;
  }

  const regexTelefono = /^\+?\d{7,15}$/; // Valida números con o sin código internacional
  if (telefono === "") {
    mostrarError("telefono", "El número de teléfono es obligatorio.");
    formularioValido = false;
  } else if (!regexTelefono.test(telefono)) {
    mostrarError("telefono", "El número de teléfono no es válido.");
    formularioValido = false;
  }

  if (destino === "") {
    mostrarError("destino", "El destino de viaje es obligatorio.");
    formularioValido = false;
  }

  if (fecha === "") {
    mostrarError("fecha", "La fecha de salida es obligatoria.");
    formularioValido = false;
  }

  if (isNaN(adultos) || adultos < 1) {
    mostrarError("adultos", "Debe haber al menos un adulto.");
    formularioValido = false;
  }

  if (isNaN(ninos) || ninos < 0) {
    mostrarError("ninos", "El número de niños no puede ser negativo.");
    formularioValido = false;
  }

  
  if (formularioValido) {
    alert("Formulario enviado con éxito.");
    this.submit(); // Enviar el formulario
  }
});

// Función para mostrar mensajes de error
function mostrarError(campoId, mensaje) {
  const inputGroup = document.getElementById(campoId).closest(".input-group");
  const errorSpan = document.createElement("span");
  errorSpan.classList.add("error-message");
  errorSpan.style.color = "red";
  errorSpan.style.fontSize = "0.9em";
  errorSpan.textContent = mensaje;
  inputGroup.appendChild(errorSpan);
}
