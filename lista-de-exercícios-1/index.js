var prompt = require("prompt-sync")();

//Exercício 1
/* const parOuImpar = (numero) => {
  if (numero <= 0)
    return console.error(
      `O número ${numero} não é válido! Por favor insira um número maior que zero`
    );

  if (numero % 2 === 0) return console.log(`O numero ${numero} é par`);
  else return console.log(`O numero ${numero} não é par`);
};
parOuImpar(0); */

//Exercício 2
/* const classificaIdade = (idade) => {
  if (idade < 0 || idade !== Number)
    return console.log(
      `A idade ${idade} inserida não é válida! Insira um valor maior ou igual a 0`
    );

  if (idade >= 0 && idade <= 1) {
    console.log(`A idade de ${idade} anos enquadra-se como bebê`);
  } else if (idade > 1 && idade <= 13) {
    console.log(`A idade de ${idade} anos enquadra-se como criança`);
  } else if (idade > 13 && idade <= 17) {
    console.log(`A idade de ${idade} anos enquadra-se como adolescente`);
  } else if (idade > 17 && idade < 60) {
    console.log(`A idade de ${idade} anos enquadra-se como adulto`);
  } else {
    console.log(`A idade de ${idade} anos enquadra-se como idoso`);
  }
};
classificaIdade("José"); */

//Exercício 3
/* const classificaNota = (nota) => {
  if (nota >= 0 && nota <= 4) {
    console.log(`A nota: ${nota}, está classificada como Reprovado`);
  } else if (nota >= 5 && nota < 7) {
    console.log(`A nota: ${nota}, está classificada como Recuperação`);
  } else {
    console.log(`A nota: ${nota}, está classificada como Aprovado`);
  }
};

classificaNota(8); */

//Exercício 4
/* const lanchonete = () => {
  prompt(
    "Seja bem vindo a nossa lanchonete.\nEscolha entre às 3 opções abaixo qual salgado você deseja.\n1 - Fatia : torta de frango, 2 - Panqueca: Panqueca de frango, 3 - Coxinha: Coxinha de Frango.\nPara selecionar a opção desejada basta inserir o número, exemplo: 1, 2 ou 3.\nPressione ENTER para continuar!"
  );
  const valor = Number(prompt("Insira seu valor aqui ->  "));
  switch (valor) {
    case 1:
      console.log(
        "Fatia: Torta de frango selecionada. Seu pedido já está sendo processado"
      );
      break;
    case 2:
      console.log(
        "Panqueca: Panqueca de frango selecionada. Seu pedido já está sendo processado"
      );
      break;
    case 3:
      console.log(
        "Coxinha: Coxinha de frango selecionada. Seu pedido já está sendo processado"
      );

    default:
      console.log("Insira um valor entre 1 e 3. Obrigado!");
      break;
  }
};
lanchonete(); */

//Exercício 5
/* const calcularImc = (peso, altura) => {
  const imc = Number(peso / (altura * altura)).toFixed(4);

  if (imc < 0.0016) {
    console.log("Magreza grau III segundo a OMS");
  } else if (imc >= 0.0016 && imc < 0.0017) {
    console.log("Magreza grau II segundo a OMS");
  } else if (imc >= 0.0017 && imc < 0.0018) {
    console.log("Magreza grau I segundo a OMS");
  } else if (imc >= 0.0018 && imc <= 0.0024) {
    console.log("Adequado segundo a OMS");
  } else if (imc >= 0.0025 && imc <= 0.0029) {
    console.log("Pré-Obeso segundo a OMS");
  } else if (imc >= 0.003 && imc <= 0.0034) {
    console.log("Obesidade Grau I segundo a OMS");
  } else if (imc >= 0.0035 && imc <= 0.0039) {
    console.log("Obesidade Grau II segundo a OMS");
  } else {
    console.log("Obesidade Grau III segundo a OMS");
  }
}; 
calcularImc(100, 180);
*/

//Exercício 6
/* const triangulo = (lado1, lado2, lado3) => {
  if (lado1 + lado2 > lado3 || lado1 + lado3 > lado2 || lado2 + lado3 > lado1) {
    return tipo(lado1, lado2, lado3);
  }
  function tipo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
      return console.log("Equilátero");
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
      return console.log("Isósceles");
    } else {
      return console.log("Escaleno");
    }
  }
};

triangulo(5, 3, 3); */
