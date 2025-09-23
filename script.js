
const entrada = document.getElementById("entrada");
const resultado = document.getElementById("resultado");

const btnMostrar = document.getElementById("btnMostrar");
const btnLimpar = document.getElementById("btnLimpar");

const contadorDiv = document.getElementById("contador");
const btnMais = document.getElementById("btnMais");
const btnMenos = document.getElementById("btnMenos");
const btnZerar = document.getElementById("btnZerar");


let contador = 0;


btnMostrar.addEventListener("click", function () {
 
  const novoParagrafo = document.createElement("p");
  
  novoParagrafo.textContent = entrada.value;
 
  resultado.appendChild(novoParagrafo);
});

btnLimpar.addEventListener("click", function () {
 
  entrada.value = "";
  
  resultado.innerHTML = "";
});


btnMais.addEventListener("click", function () {
  contador++;
  contadorDiv.textContent = contador;
});

btnMenos.addEventListener("click", function () {
  contador--;
  contadorDiv.textContent = contador;
});

btnZerar.addEventListener("click", function () {
  contador = 0;
  contadorDiv.textContent = contador;
});
