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
    const linhas: string[] = [];

    const titulo = "RELATÓRIO DE GASTOS".toUpperCase();

    linhas.push(titulo);
    linhas.push("=".repeat(45));

    const CATEGORIAS: Categoria[] = [
        "Alimentação",
        "Transporte",
        "Lazer",
        "Moradia"
    ];

    let totalGeral = 0;

    for (let i = 0; i < CATEGORIAS.length; i++) {
        let totalCategoria = 0;

        for (let j = 0; j < despesas.length; j++) {
            if (despesas[j]!.categoria === CATEGORIAS[i]) {
                totalCategoria += despesas[j]!.valor;
            }
        }

        totalGeral += totalCategoria;

        const categoria = CATEGORIAS[i]!.padEnd(15);
        const total = totalCategoria.toFixed(2).padStart(10);

        linhas.push(`${categoria} R$ ${total}`);
    }

    linhas.push("=".repeat(45));
    linhas.push(
        `${"TOTAL GERAL".padEnd(15)} R$ ${totalGeral.toFixed(2).padStart(10)}`
    );

    let maior: Despesa | undefined;

    for (let i = 0; i < despesas.length; i++) {
        if (maior === undefined || despesas[i]!.valor > maior.valor) {
            maior = despesas[i];
        }
    }

    if (maior !== undefined) {
        linhas.push(
            `MAIOR DESPESA: ${maior.descricao} - R$ ${maior.valor.toFixed(2)}`
        );
    } else {
        linhas.push("MAIOR DESPESA: Nenhuma");
    }

    return linhas.join("\n");
}