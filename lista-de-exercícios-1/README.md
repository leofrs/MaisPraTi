## Como testar as soluções?

Em primeiro lugar, certifique-se de ter o `node.js` instalado em sua máquina. Para fazer isso é simples. Vá em seu terminal e execute o seguinte comando: `node -v`. Caso apareça a versão do `node.js`, isso significa que você tem ele instalado em sua máquina, caso contrário, isso significa que você não tem ele instalado e precisa realizar a instalção do mesmo.

Após ter certificado-se, retire o comentário da solução que deseja testar. Em seu terminal (ele precisa estar dentro da pasta desse projeto) insira a seguinte linha de comando: `node index.js`.

Essa linha de comando faz uma solicitação ao `node.js` para ir no arquivo `index.js` e executar o código que estiver sem comentário.

### ⚠️ IMPORTANTE!!! ⚠️

Algumas soluções precisam de uma biblioteca externa para funcionarem.

Para isso, vá no terminal (ele precisa estar dentro da pasta desse projeto) e insira a seguinte linha de comando: `npm i prompt-sync`.

Essa biblioteca é responsável por fazer a leitura de valores que são colocados no terminal quando um valor é pedido para ser ser inserido.

**Segue abaixo as questões propostas:**

1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
   adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
   controle if-else.

3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
   "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
   Utilize switch-case para implementar a lógica de cada opção selecionada.

5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
   determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
   utilizando if-else.

6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
   formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
   Isósceles, escaleno ou eqüilátero.

Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
   forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
   compradas, calcule e escreva o valor total da compra.

8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
   e escreve-los em ordem crescente.

9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
   utilizando um loop for.

10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 à 10) utilizando um loop for.

13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
    a média aritmética desses números.

14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
    utilizando um loop for ou while.

15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
    Fibonacci utilizando um loop for.
