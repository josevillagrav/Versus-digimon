//alert();

function calcularGolpe(minPower, maxPower) {
  return Math.ceil(Math.random() * (maxPower - minPower) + minPower);
}

const MIN_POWER = 10;
const MAX_POWER = 30;

let energiaAngewomon = 100;
let energiaLadydevimon = 100;

let round = 0;

while (energiaAngewomon > 0 && energiaLadydevimon > 0) {
  round += 1;

  console.log("----------Round: " + round + "------------------------");

  let golpeAngewomon = calcularGolpe(MIN_POWER, MAX_POWER);
  let golpeLadydevimon = calcularGolpe(MIN_POWER, MAX_POWER);

  console.log("Angewomon golpea con fuerza de " + golpeAngewomon);
  console.log("Ladydevimon golpea con fuerza de " + golpeLadydevimon);

  if (golpeAngewomon === golpeLadydevimon) {
    console.log("siga siga");
  } else if (golpeLadydevimon > golpeAngewomon) {
    energiaAngewomon -= golpeLadydevimon;
    document.write(
      "<div class='card'><img src='img/pega_ladydevimon.png' /></div>"
    );
  } else {
    energiaLadydevimon -= golpeAngewomon;
    document.write(
      "<div class='card'><img src='img/pega_angewomon.png'/></div>"
    );
  }

  console.log("La energía de Angewomon es " + energiaAngewomon);
  console.log("La energía de Ladydevimon es " + energiaLadydevimon);
}

console.log("------- GANADORA ----------");

if (energiaAngewomon > 0) {
  console.log("Ganó Angewomon....");
  document.write(
    "<div class='ganador'><img src='img/muere_ladydevimon.png'/></div>"
  );
} else {
  console.log("Ganó Ladydevimon....");
  document.write(
    "<div class='ganador'><img src='img/muere_angewomon.png' /></div>"
  );
}
