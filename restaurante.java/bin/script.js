// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Aquí puedes agregar cualquier funcionalidad de JavaScript para tus páginas

    // Ejemplo de validación simple de formularios
    document.querySelectorAll('form').forEach(function (form) {
        form.addEventListener('submit', function (event) {
            let valid = true;
            form.querySelectorAll('input[required]').forEach(function (input) {
                if (!input.value.trim()) {
                    valid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '';
                }
            });
            if (!valid) {
                event.preventDefault();
                alert('Por favor, complete todos los campos requeridos.');
            }
        });
    });
});
