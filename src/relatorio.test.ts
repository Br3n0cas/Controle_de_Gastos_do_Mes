import {describe, expect, it} from "vitest";
import {descricaoCategoria, formatarRelatorio, matrizCategoriaMes} from "./relatorio";
import {Categoria, Despesa} from "./tipos";

describe("descricaoCategoria", () => {
    it("deve retornar a descrição correta para cada categoria", () => {
        const categorias: Categoria[] = ["Alimentação", "Transporte", "Lazer", "Moradia"];
        const esperado: string[] = ["Alimentação", "Transporte", "Lazer", "Moradia"];

        for (let i = 0; i < categorias.length; i++) {
            const resultado = descricaoCategoria(categorias[i]!);
            expect(resultado).toBe(esperado[i]);
        }
    });

    it("deve funcionar com as categorias nos limites do tipo", () => {
    expect(descricaoCategoria("Alimentação")).toBe("Alimentação");
    expect(descricaoCategoria("Moradia")).toBe("Moradia");
});
});

describe("matrizCategoriaMes", () => {
    it("Deve retornar uma matriz com uma linha para cada categoria na ordem de CATEGORIAS, e 12 colunas (Meses)", () => {
        const despesas: Despesa[] = [
            { id: 1, descricao: "Almoço", valor: 20, categoria: "Alimentação", mes: 1 },
            { id: 2, descricao: "Cinema", valor: 30, categoria: "Lazer", mes: 2 },
            { id: 3, descricao: "Transporte", valor: 15, categoria: "Transporte", mes: 3 },
            { id: 4, descricao: "Aluguel", valor: 500, categoria: "Moradia", mes: 1 }
        ];

        const resultado = matrizCategoriaMes(despesas);

        expect(resultado[0]![0]).toBe(20);  // Alimentação, janeiro
        expect(resultado[1]![2]).toBe(15);  // Transporte, março
        expect(resultado[2]![1]).toBe(30);  // Lazer, fevereiro
        expect(resultado[3]![0]).toBe(500); // Moradia, janeiro
    });

    it("Deve retornar uma matriz 4x12 preenchida com zero quando não houver despesas", () => {
        const despesas: Despesa[] = [];
        const resultado = matrizCategoriaMes(despesas);

        expect(resultado.length).toBe(4);

        for (let i = 0; i < 4; i++) {
            expect(resultado[i]!.length).toBe(12);

            for (let j = 0; j < 12; j++) {
                expect(resultado[i]![j]).toBe(0);
            }
        }
    });
});

describe("formatarRelatorio", () => {
    it("deve formatar o relatório com as despesas agrupadas por categoria e mês", () => {
        const despesas: Despesa[] = [
            { id: 1, descricao: "Almoço", valor: 20, categoria: "Alimentação", mes: 1 },
            { id: 2, descricao: "Cinema", valor: 30, categoria: "Lazer", mes: 2 },
            { id: 3, descricao: "Transporte", valor: 15, categoria: "Transporte", mes: 3 },
            { id: 4, descricao: "Aluguel", valor: 500, categoria: "Moradia", mes: 1 }
        ];

        const resultado = formatarRelatorio(despesas);
        expect(resultado).toBe("Relatório de Despesas\n\nAlimentação:\n- Almoço (janeiro): R$ 20.00\n\nTransporte:\n- Transporte (março): R$ 15.00\n\nLazer:\n- Cinema (fevereiro): R$ 30.00\n\nMoradia:\n- Aluguel (janeiro): R$ 500.00\n");
    });

    it("deve formatar o relatório corretamente mesmo quando não houver despesas", () => {
        const despesas: Despesa[] = [];
        const resultado = formatarRelatorio(despesas);
        expect(resultado).toBe("Relatório de Despesas\n\nNenhuma despesa registrada.");
    });
});