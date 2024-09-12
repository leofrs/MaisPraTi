// QUESTÃO 1
/* const carro = {
  marca: "Chevrolet",
  modelo: "Fusca",
  ano: "1985",
  cor: "Azul",
};

const showCarro = () => {
  for (let car in carro) {
    console.log(`${car}: ${carro[car]}`);
  }
};
showCarro(); */

//QUESTÃO 2
/* const livro = {
  titulo: "",
  autor: "",
  anoPublicacao: "",
  genero: "",
};
for (const elemento in livro) {
  if (elemento !== "editora") livro.editora = "";
  else console.log("Já tem");

  console.log(livro);
} */

//QUESTÃO 3
/* const produtos = {
  sabao: 2,
  arroz: 4,
  leite: 5,
  macarrao: 3,
  azeite: 1,
  manteiga: 6,
  coloral: 1,
};
const retornoMaior = () => {
  for (const elemento in produtos) {
    if (produtos[elemento] > 4) console.log(elemento);
  }
};
retornoMaior(); */

//QUESTÃO 4
/* const pessoas = [
  {
    nome: "José",
    idade: "37",
    cidade: "Egito",
  },
  {
    nome: "Matheus",
    idade: "46",
    cidade: "Jerúsalem",
  },
  {
    nome: "Moises",
    idade: "64",
    cidade: "Egito",
  },
];
for (const element of pessoas) {
  console.log(element);
}
 */

//QUESTÕES 5
/* const alunos = [
  {
    nome: "José",
    nota1: 8,
    nota2: 10,
  },
  {
    nome: "Moises",
    nota1: 9,
    nota2: 10,
  },
];

for (const element of alunos) {
  let notaFinal = {
    nota: 0,
  };
  notaFinal.nota = (element.nota1 + element.nota2) / 2;

  console.log(`A média final de ${element.nome} foi: ${notaFinal.nota}`);
} */
