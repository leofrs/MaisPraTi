const pizzas = [
  {
    id: 1,

    nome: "Portuguesa",
    fatias: [
      {
        id: 1,
        seis: "6",
        preco: "R$35,00",
      },
      {
        id: 2,
        seis: "8",
        preco: "R$45,00",
      },
      {
        id: 3,
        seis: "12",
        preco: "R$55,00",
      },
    ],
  },
  {
    id: 2,
    nome: "Strogonoff",
    fatias: [
      {
        id: 1,
        seis: "6",
        preco: "R$35,00",
      },
      {
        id: 2,
        seis: "8",
        preco: "R$45,00",
      },
      {
        id: 3,
        seis: "12",
        preco: "R$55,00",
      },
    ],
  },
  {
    id: 3,
    nome: "Chocolate Preto",
    fatias: [
      {
        id: 1,
        seis: "6",
        preco: "R$35,00",
      },
      {
        id: 2,
        seis: "8",
        preco: "R$45,00",
      },
      {
        id: 3,
        seis: "12",
        preco: "R$55,00",
      },
    ],
  },
  {
    id: 4,
    nome: "Sensação",
    fatias: [
      {
        id: 1,
        seis: "6",
        preco: "R$35,00",
      },
      {
        id: 2,
        seis: "8",
        preco: "R$45,00",
      },
      {
        id: 3,
        seis: "12",
        preco: "R$55,00",
      },
    ],
  },
  {
    id: 5,
    nome: "Confete",
    fatias: [
      {
        id: 1,
        seis: "6",
        preco: "R$35,00",
      },
      {
        id: 2,
        seis: "8",
        preco: "R$45,00",
      },
      {
        id: 3,
        seis: "12",
        preco: "R$55,00",
      },
    ],
  },
  {
    id: 6,
    nome: "Prestigio",
    fatias: [
      {
        id: 1,
        seis: "6",
        preco: "R$35,00",
      },
      {
        id: 2,
        seis: "8",
        preco: "R$45,00",
      },
      {
        id: 3,
        seis: "12",
        preco: "R$55,00",
      },
    ],
  },
];

const itensCardapio = document.getElementById("itens-cardapio");

function renderPizzas() {
  pizzas.forEach((pizza) => {
    const pizzaDiv = document.createElement("div");
    pizzaDiv.className = pizza.nome.toLowerCase().replace(/ /g, "-");

    const infoDiv = document.createElement("div");
    infoDiv.className = "info";

    const h3 = document.createElement("h3");
    h3.innerText = pizza.nome;

    pizza.fatias.forEach((fatia) => {
      const h4 = document.createElement("h4");
      h4.innerHTML = `${fatia.seis} fatias <span>${fatia.preco}</span>`;
      infoDiv.appendChild(h4);
    });

    const button = document.createElement("button");
    button.className = "pedir";
    button.innerText = "pedir agora";

    infoDiv.appendChild(h3);
    infoDiv.appendChild(button);
    // pizzaDiv.appendChild(img);
    pizzaDiv.appendChild(infoDiv);
    itensCardapio.appendChild(pizzaDiv);
  });
}

// Call the function to render the pizzas
renderPizzas();
