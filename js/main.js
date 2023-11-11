//alert();

function calcularGolpe(minPower, maxPower) {
  return Math.ceil(Math.random() * (maxPower - minPower) + minPower);
}

const MIN_POWER = 10;
const MAX_POWER = 30;

// Objetos para representar a los personajes
const angewomon = {
  nombre: "Angewomon",
  energia: 100,
};

const ladydevimon = {
  nombre: "Ladydevimon",
  energia: 100,
};

// Objetos en un array para facilitar la gestión
const personajes = [angewomon, ladydevimon];

let round = 0;

// Introducción del juego
alert(
  "Bienvenid@ al duelo Digimon. A continuación, deberás elegir si atacar o defender durante 6 rounds. Al final, verás quién ganará la batalla según tus decisiones. ¡A jugar!"
);

while (angewomon.energia > 0 && ladydevimon.energia > 0 && round < 6) {
  round += 1;

  console.log("----------Round: " + round + "------------------------");

  // Permitir al usuario elegir cuándo atacar o defender
  const userChoice = prompt("Round " + round + ": Elige 'atacar' o 'defender");

  // Método de búsqueda para obtener el personaje actual del array
  const personajeActual = personajes.find(
    (personaje) => personaje.nombre === "Angewomon"
  );

  let golpePersonajeActual = calcularGolpe(MIN_POWER, MAX_POWER);

  if (userChoice === "atacar") {
    // Método de búsqueda y filtrado
    const oponente = personajes.find(
      (personaje) => personaje.nombre !== personajeActual.nombre
    );
    golpePersonajeActual = calcularGolpe(MIN_POWER, MAX_POWER);

    console.log(
      personajeActual.nombre + " ataca con fuerza de " + golpePersonajeActual
    );
    console.log(
      oponente.nombre + " recibe el golpe con fuerza de " + golpePersonajeActual
    );

    oponente.energia -= golpePersonajeActual;

    // Imágenes
    document.write(
      `<div class='card'><img src='img/pega_${personajeActual.nombre.toLowerCase()}.png' /></div>`
    );
    document.write(
      `<div class='card'><img src='img/pega_${oponente.nombre.toLowerCase()}.png' /></div>`
    );
  }

  console.log("La energía de Angewomon es " + angewomon.energia);
  console.log("La energía de Ladydevimon es " + ladydevimon.energia);
}

console.log("------- GANADORA ----------");

// Método de filtrado para obtener a la ganadora
const ganador = personajes.find((personaje) => personaje.energia > 0);

if (ganador) {
  console.log("Ganó " + ganador.nombre + "....");
  // Imagen de la ganadora
  document.write(
    `<div class='ganador'><img src='img/gana_${ganador.nombre.toLowerCase()}.png'/></div>`
  );
} else {
  console.log("Empate....");
}
