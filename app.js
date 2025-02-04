// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  const nombreInput = document.getElementById('nombreInput');
  const nombre = nombreInput.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);
  nombreInput.value = "";
  actualizarListaAmigos();
}

function actualizarListaAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = "";

  for (let amigo of amigos) {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];
  const resultadoSorteo = document.getElementById('resultadoSorteo');
  resultadoSorteo.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}
