function encryptText() {
  // obtener texto desde el DOM
  let text = document.getElementById("texto").value;

  // obtener elemtos del DOM para mostrar mensaje
  let messageTitle = document.getElementById("titulo-mensaje");
  let messageParagraph = document.getElementById("parrafo");
  let dollImage = document.getElementById("muñeco");

  // Encriptar usando sustitución
  let encryptedText = text
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  // Verificar si no hay texto introducido
  if (text.length !== 0) {
    // Actualizar la entrada con el texto cifrado
    document.getElementById("texto").value = encryptedText;

    // Actualizar los elementos del mensaje
    messageTitle.textContent = "Texto encriptado con éxito";
    messageParagraph.textContent = "";
    dollImage.src = "./img/lock.png";
  } else {
    // Actualiza la imagen, el título del mensaje y el párrafo.
    dollImage.src = "./img/code.png";
    messageTitle.textContent = "Ningún mensaje fue encontrado";
    messageParagraph.textContent = "Ingresa el texto que deseas encriptar o desencriptar";

    // Mostrar un mensaje de advertencia mediante una ventana emergente
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

/**
 * Descifrar el texto dado utilizando un conjunto específico de reglas.
 *
 * @returnar {undefined} Esta función no devuelve un valor.
 */
function decryptText() {
  let text = document.getElementById("texto").value;
  let titleMessage = document.getElementById("titulo-mensaje");
  let paragraph = document.getElementById("parrafo");
  let doll = document.getElementById("muñeco");

  let decryptedText = text
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (text.length !== 0) {
    document.getElementById("texto").value = decryptedText;
    titleMessage.textContent = "Texto desencriptado con éxito";
    paragraph.textContent = "";
    doll.src="/img/locker.png";
  } else {
    doll.src="/img/code.png";
    titleMessage.textContent = "Ningún mensaje fue encontrado";
    paragraph.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes insertar un texto", "warning");
  }
}
 function clipboardCopy() {
      // Obtiene el texto del textarea
      var texto = document.getElementById("texto").value; 
      navigator.clipboard.writeText(texto).then(function () {
        let feedbackElement = document.getElementById("feedbackElement")
        // Muestra un mensaje de éxito al usuario en la página
        feedbackElement.textContent = 'Texto copiado al portapapeles';
      }).catch(function (err) {
        // Muestra un mensaje de error al usuario en la página
        feedbackElement.textContent = 'Error al copiar texto: ' + err;
      });
    }
document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("copybutton").addEventListener("click", clipboardCopy);
      
    })
    




