const frases = ["Desenvolvedor", "Programador"];
let indiceFrase = 0;
const textoAlvo = document.getElementById("texto-alvo");

function alternarPalavra() {
  indiceFrase = (indiceFrase + 1) % frases.length;
  textoAlvo.textContent = frases[indiceFrase];

  setTimeout(alternarPalavra, 2000); // Tempo de exibição de cada palavra (2 segundos)
}

alternarPalavra();
