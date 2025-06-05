// Pregunta de prueba
const pregunta = "¿Cuál es la capital de Francia?";
const respuestaCorrecta = "París";

// Mostrar la pregunta en un cuadro de diálogo
const respuestaUsuario = prompt(pregunta);

// Evaluar la respuesta
if (respuestaUsuario.trim().toLowerCase() === respuestaCorrecta.toLowerCase()) {
  alert("¡Correcto! 🎉");
} else {
  alert("Respuesta incorrecta 😕. La capital de Francia es " + respuestaCorrecta + ".");
}