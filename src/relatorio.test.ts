import {describe, expect, it} from "vitest";
import {descricaoCategoria} from "./relatorio";
import {Categoria, Despesa} from "./tipos";

describe("descricaoCategoria", () => {
    it("deve retornar a descrição correta para cada categoria", () => {
        const categorias: Categoria[] = ["Alimentação", "Transporte", "Lazer", "Moradia"];
        const esperado: string[] = ["Alimentação", "Transporte", "Lazer", "Moradia"];

        for (let i = 0; i < categorias.length; i++) {
            const resultado = descricaoCategoria(categorias[i]);
            expect(resultado).toBe(esperado[i]);
        }
    });

    it("deve retornar uma matriz com uma linha por categoria e uma coluna com a descrição da categoria", () => {
        const categorias: Categoria[] = ["Alimentação", "Transporte", "Lazer", "Moradia"];
        const esperado: string[][] = [
            ["Alimentação"],
            ["Transporte"],
            ["Lazer"],
            ["Moradia"]
        ];

        for (let i = 0; i < categorias.length; i++) {
            const resultado = descricaoCategoria(categorias[i]);
            expect(resultado).toBe(esperado[i][0]);
        }
    });
});