import { Despesa } from "./tipos";
import { formatarRelatorio } from "./relatorio";

const despesas: Despesa[] = [
  {
    id: 1,
    descricao: "Almoço",
    valor: 25,
    categoria: "Alimentação",
    mes: 1
  },
  {
    id: 2,
    descricao: "Passagem de ônibus",
    valor: 10,
    categoria: "Transporte",
    mes: 1
  },
  {
    id: 3,
    descricao: "Cinema",
    valor: 30,
    categoria: "Lazer",
    mes: 2
  },
  {
    id: 4,
    descricao: "Aluguel",
    valor: 500,
    categoria: "Moradia",
    mes: 2
  },
  {
    id: 5,
    descricao: "Supermercado",
    valor: 150,
    categoria: "Alimentação",
    mes: 3
  },
  {
    id: 6,
    descricao: "Combustível",
    valor: 100,
    categoria: "Transporte",
    mes: 3
  },
  {
    id: 7,
    descricao: "Jogo",
    valor: 80,
    categoria: "Lazer",
    mes: 3
  },
  {
    id: 8,
    descricao: "Conta de luz",
    valor: 120,
    categoria: "Moradia",
    mes: 1
  }
];

console.log(formatarRelatorio(despesas));