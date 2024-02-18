
    function addToCart(productName, price) {
    // Obtener la lista del carrito
    var cartList = document.getElementById('cartList');

    // Crear un nuevo elemento de lista
    var listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    listItem.textContent = productName + ' - ' + price;

    // Agregar el nuevo elemento a la lista del carrito
    cartList.appendChild(listItem);

    // Calcular y actualizar el total del carrito
    updateTotal(price);
  }

  // Función para actualizar el total del carrito
  function updateTotal(price) {
    // Obtener el elemento del total del carrito
    var totalElement = document.getElementById('cartTotal');

    // Obtener el valor actual del total
    var currentTotal = parseFloat(totalElement.textContent);

    // Sumar el precio del nuevo producto al total
    var newTotal = currentTotal + parseFloat(price);

    // Actualizar el elemento del total del carrito con el nuevo total
    totalElement.textContent = newTotal.toFixed(2); // Redondear a 2 decimales
  };

  document.getElementById('openCartBtn').addEventListener('click', function(){$('#cartModal').modal('show');
});

// Desplazamiento Carrito
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var cartBtn = document.getElementById("openCartBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    cartBtn.style.bottom = "20px"; // Ajusta la distancia desde la parte inferior
  } else {
    cartBtn.style.bottom = "0"; // Vuelve a la posición inicial
  }
}

//Validaciones recuperar contraseña

function validatePasswordRecoveryForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    //  Nombre no puede estar vacío
    if (name.trim() === '') {
        alert('Por favor ingresa tu nombre');
        return false;
    }

    // Email debe tener un formato válido
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor ingresa un correo electrónico válido');
        return false;
    }

    return true; // enviar el formulario si las validaciones son exitosas
}

// validar el formulario de modificación de contraseña
function validatePasswordChangeForm() {
    var newPassword = document.getElementById('newPassword').value;

    // Validación: Contraseña no puede estar vacía
    if (newPassword.trim() === '') {
        alert('Por favor ingresa una nueva contraseña');
        return false;
    }

    return true; //enviar el formulario si todas las validaciones son exitosas
}
// validar formulario de registro

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validar que el nombre no esté vacío
    if (nombre.trim() === '') {
        alert('Por favor ingresa tu nombre.');
        event.preventDefault(); // Evitar que el formulario se envíe
        return;
    }

    // Validar el formato del correo electrónico
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor ingresa un correo electrónico válido.');
        event.preventDefault(); // Evitar que el formulario se envíe
        return;
    }

    // Validar que la contraseña tenga al menos 8 caracteres
    if (password.length < 6) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        event.preventDefault(); // Evitar que el formulario se envíe
        return;
    }

    // Si todas las validaciones pasan, el formulario se envía 
});
