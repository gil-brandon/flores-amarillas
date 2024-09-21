// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Wise men say", time: 6.9 },
  { text: "Only fools rush in", time: 13.4 }, 
  { text: "But I can't help", time: 20.5 },
  { text: "Falling in love with...", time: 26 },
  { text: "you <3", time: 31 },
  { text: "Shall I stay?", time: 35.5 },
  { text: "Would it be a sin", time: 41.5 }, 
  { text: "If I cant't help", time: 49 }, 
  { text: "Falling in love with...", time: 54.8 }, 
  { text: "youu <3", time: 60 }, 
  { text: "Like a river flows", time: 64 },
  { text: "Surely to the sea", time: 67 }, 
  { text: "Darling, so it goes", time: 70 }, 
  { text: "Some things are meant to be", time: 74 },
  { text: "Take my hand", time: 81 }, 
  { text: "Take my whole life too", time: 87.5 },
  { text: "For I can't help", time: 95 },
  { text: "Falling in love with...", time: 101 }, 
  { text: "youuu <3", time: 106 },
  { text: "Like a river flows", time: 110 },
  { text: "Surely to the sea", time: 112 }, 
  { text: "Darling, so it goes", time: 116.5 }, 
  { text: "Some things are meant to be", time: 120.5 },
  { text: "Take my hand", time: 126.5 }, 
  { text: "Take my whole life too", time: 133 }, 
  { text: "For I can't help", time: 141 }, 
  { text: "Falling in love with...", time: 147 },
  { text: "youuuu <3", time: 152 },
  { text: "For I can't help", time: 155 }, 
  { text: "Falling in love...", time: 161 }, // un poco despyes
  { text: "wiiith...", time: 165.8 }, //
  { text: "youuuuu <3", time: 168.8 }, // un poco antes
  { text: "Te amo vic <3", time: 175 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);