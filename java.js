onload = () => {
  // 1. Quitar la clase not-loaded (animación de flores)
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // 2. Texto dividido en párrafos
  const titulo = "Para Ti 🌸";

  const mensaje =
    "Como las flores se secan y mueren, creí que sería buena idea regalarte unas que nunca se marchiten. Así como tampoco se marchitarán jamás el gran afecto y la profunda admiración que siento por ti.\n\n" +
    "Espero que te gusten, y que cada vez que las veas, recuerdes lo mucho que te quiero y lo importante que eres para mí. 🌷";

  // Referencias
  const box = document.getElementById("message-box");
  const titleElement = document.getElementById("typewriter-title");
  const textElement = document.getElementById("typewriter-text");

  // Función typewriter mejorada
  const typeWriter = (text, element, speed, callback) => {
    let i = 0;

    function type() {
      if (i < text.length) {
        if (text.charAt(i) === "\n") {
          element.innerHTML += "<br>";
        } else {
          element.innerHTML += text.charAt(i);
        }
        i++;
        setTimeout(type, speed);
      } else if (callback) {
        callback();
      }
    }

    type();
  };

  // 3. Secuencia
  setTimeout(() => {
    box.classList.add("visible");

    typeWriter(titulo, titleElement, 100, () => {
      setTimeout(() => {
        typeWriter(mensaje, textElement, 40, null);
      }, 500);
    });
  }, 1500);
};
