import { Categoria, Despesa } from "./tipos";

export function descricaoCategoria(categoria: Categoria): string {
  switch (categoria) {
    case "Alimentação":
      return "Alimentação";

    case "Transporte":
      return "Transporte";

    case "Lazer":
      return "Lazer";

    case "Moradia":
      return "Moradia";
  }
}

const CATEGORIAS: Categoria[] = [
    "Alimentação",
    "Transporte",
    "Lazer",
    "Moradia"
];

export function matrizCategoriaMes(despesas: Despesa[]): number[][] {
    const matriz: number[][] = [];

    for (let i = 0; i < CATEGORIAS.length; i++) {
        matriz[i] = [];

        for (let j = 0; j < 12; j++) {
            matriz[i]![j] = 0;
        }
    }

    for (let i = 0; i < despesas.length; i++) {
        const despesa = despesas[i]!;
        let linha = -1;

        switch (despesa.categoria) {
            case "Alimentação":
                linha = 0;
                break;

            case "Transporte":
                linha = 1;
                break;

            case "Lazer":
                linha = 2;
                break;

            case "Moradia":
                linha = 3;
                break;
        }

        if (linha !== -1) {
            const coluna = despesa.mes - 1;
            matriz[linha]![coluna] = (matriz[linha]![coluna] ?? 0) + despesa.valor;        }
    }

    return matriz;
}

export function formatarRelatorio(despesas: Despesa[]): string {
    throw new Error("não implementado");
}