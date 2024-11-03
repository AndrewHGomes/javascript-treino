console.log("Variáveis e Tipos de Primitivos:");

var comVar = "Variável com var";
let comLet = "Variável com let";
const comConst = "Variável com const";

console.log(comVar);
console.log(comLet);
console.log(comConst);

console.log("");

const texto = "Texto";
console.log(`${texto} - ${typeof texto}`);

const aspas = "Texto com aspas";
console.log("Na concatenação, usamos: " + aspas);

const crase = "Texto com crase";
console.log(`Na interpolação, usamos: ${crase}`);

console.log("");

const intNumber = 15;
console.log(`Número inteiro: ${intNumber} - ${typeof intNumber}`);

const floatNumber = 52.5;
console.log(`Número flutuante: ${floatNumber} - ${typeof floatNumber}`);

const negNumber = -90;
console.log(`Número negativo: ${negNumber} - ${typeof negNumber}`);

const notANumber = NaN;
console.log(`Erro numérico: ${notANumber} - ${typeof notANumber}`);

console.log("");

const bigIntNumber = 99999999999999999999999999999999n;
console.log(
  `Número inteiro muito grande: ${bigIntNumber} - ${typeof bigIntNumber}`
);

console.log("");

const trueBool = true;
console.log(`Verdadeiro: ${trueBool} - ${typeof trueBool}`);

const falseBool = false;
console.log(`Falso: ${falseBool} - ${typeof falseBool}`);

console.log("");

const nulo = null;
console.log(`Vazio: ${nulo} - ${typeof nulo}`);

let indefinido;
console.log(`Indefinido: ${indefinido} - ${typeof indefinido}`);

// ==============================================================

const contar = document.querySelector("#contar");

contar.addEventListener("click", () => {
  const exercicio1 = document.getElementsByTagName("section");

  const nome = document.querySelector("#nome").value;
  const frase = document.querySelector("#frase").value;

  const resultado = document.createElement("div");
  resultado.setAttribute("class", "resultado");

  const cumprimentar = document.createElement("p");
  const respostaNome = document.createElement("p");
  const respostaFrase = document.createElement("p");

  cumprimentar.textContent = `Obrigado, ${nome}!`;
  respostaNome.textContent = `Seu nome tem ${nome.length} caracteres.`;
  respostaFrase.textContent = `Sua frase tem ${frase.length} caracteres.`;

  resultado.append(cumprimentar, respostaNome, respostaFrase);

  exercicio1[0].append(resultado);
});

// ==============================================================

const operacoes = document.querySelector("#operacoes");

operacoes.addEventListener("click", () => {
  const exercicio2 = document.getElementsByTagName("section");

  const num1 = Number(document.querySelector("#num1").value);
  const num2 = Number(document.querySelector("#num2").value);

  const resultado = document.createElement("div");
  resultado.setAttribute("class", "resultado");

  const soma = document.createElement("p");
  const sub = document.createElement("p");
  const mult = document.createElement("p");
  const div = document.createElement("p");

  const divisao = num1 / num2;

  soma.textContent = `SOMA: ${num1} + ${num2} = ${num1 + num2}`;
  sub.textContent = `SUBTRAÇÃO: ${num1} - ${num2} = ${num1 - num2}`;
  mult.textContent = `MULTIPLICAÇÃO: ${num1} x ${num2} = ${num1 * num2}`;
  div.textContent = `DIVISÃO: ${num1} : ${num2} = ${divisao.toFixed(1)}`;

  resultado.append(soma, sub, mult, div);

  exercicio2[1].append(resultado);
});

// ==============================================================

const calcular = document.querySelector("#calcular");

calcular.addEventListener("click", () => {
  const exercicio3 = document.getElementsByTagName("section");

  const base = document.querySelector("#base").value;
  const altura = document.querySelector("#altura").value;

  const area = (base * altura) / 2;

  const mostrar = document.createElement("p");
  mostrar.textContent = `Num triângulo de base ${base} e altura ${altura}, a área é ${area}.`;

  const resultado = document.createElement("div");
  resultado.setAttribute("class", "resultado");

  resultado.append(mostrar);
  exercicio3[2].append(resultado);
});
