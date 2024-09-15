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

//QUESTÃO 5
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

// QUESTÃO 6
/* const funcionarios = [
  { nome: "Ana", cargo: "Desenvolvedora", salario: 5000 },
  { nome: "João", cargo: "Designer", salario: 4000 },
  { nome: "Maria", cargo: "Gerente", salario: 6000 },
];

const funcionariosFiltrados = [];

for (const funcionario of funcionarios) {
  if (funcionario.salario > 5000) {
    funcionariosFiltrados.push(funcionario);
  }
}
console.log(
  "Funcionários com salário maior que",
  5000,
  ":",
  funcionariosFiltrados
); */

//QUESTÃO 7
/* const produtos = [
  { nome: "Camiseta", preco: 50, desconto: 0 },
  { nome: "Calça", preco: 100, desconto: 0 },
];
produtos.forEach((produto) => {
  produto.desconto = 0.1;
  produto.preco = produto.preco * (1 - produto.desconto);
});
console.log("Produtos com desconto aplicado:", produtos); */

//QUESTÃO 8
/* const filmes = [
  {
    titulo: "Matriz",
    diretor: " Lana Wachowski",
    anoLancamento: 1999,
  },
  {
    titulo: "O Poderoso Chefão",
    diretor: "Francis Ford Coppola",
    anoLancamento: 1972,
  },
];

const titulos = [];

filmes.forEach((filme) => {
  titulos.push(filme.titulo);
});

console.log("Títulos dos filmes:", titulos); */

//QUESTÃO 9
/* const clientes = [
  { nome: "Lucas", idade: 28, cidade: "São Paulo" },
  { nome: "Ana", idade: 35, cidade: "Rio de Janeiro" },
];

let contador = 0;

clientes.forEach((cliente) => {
  if (cliente.idade > 30) {
    contador++;
  }
});

console.log("Número de clientes com mais de 30 anos:", contador); */

// QUESTÃO 10
/* const funcionarios = [
  { nome: "Ana", cargo: "Desenvolvedora", salario: 5000 },
  { nome: "João", cargo: "Designer", salario: 4000 },
];

const relatorio = funcionarios.map((funcionario) => {
  return {
    nome: funcionario.nome,
    cargo: funcionario.cargo,
    salarioAjustado: funcionario.salario * 1.05,
  };
});

console.log("Relatório de Funcionários:", relatorio); */
