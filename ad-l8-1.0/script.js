// Tarea 6: alerta en vivo al enviar el formulario de Contacto
const formulario = document.getElementById("formContacto");

// Solo existe en contact.html; en las otras páginas este código no hace nada
if (formulario) {
  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // evita que la página se recargue

    const alerta = document.getElementById("alerta");
    alerta.innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        Mensaje enviado
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
      </div>`;

    formulario.reset(); // limpia los campos
  });
}
