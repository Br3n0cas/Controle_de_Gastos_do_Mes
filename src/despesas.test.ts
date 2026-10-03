import {describe, expect, it} from "vitest";
import {adicionarDespesa, despesasDaCategoria, maiorDespesa, removerDespesa, totalGasto} from "./despesas";
import {Categoria, Despesa} from "./tipos";

describe("adicionarDespesa", () => {
  it("deve adicionar uma nova despesa à lista existente", () => {
    const despesas: Despesa[] = [{ id: 1, descricao: "Almoço", valor: 20, categoria: "Alimentação", mes: 1, observacao: "Almoço com amigos" } ];
    const novaDespesa: Despesa = { id: 2, descricao: "Transporte", valor: 15, categoria: "Transporte", mes: 1 };
    
    expect(adicionarDespesa(despesas, novaDespesa)).toEqual([...despesas, novaDespesa]);
  });
  it("deve lançar um erro se o mês não estiver entre 1 e 12", () => {
    const despesas: Despesa[] = [{ id: 1, descricao: "Almoço", valor: 20, categoria: "Alimentação", mes: 1, observacao: "Almoço com amigos" } ];
    const novaDespesa: Despesa = { id: 2, descricao: "Transporte", valor: 15, categoria: "Transporte", mes: 13 };

    expect(() => adicionarDespesa(despesas, novaDespesa)).toThrow("Mês inválido. Deve ser um número entre 1 e 12.");
  });
}); 

describe("removerDespesa", () => {
  it("deve remover uma despesa pelo id", () => {
    const despesas: Despesa[] = [
      { id: 1, descricao: "Almoço", valor: 20, categoria: "Alimentação", mes: 10 },
      { id: 2, descricao: "Transporte", valor: 15, categoria: "Transporte", mes: 10 }
    ];

    const resultado = removerDespesa(despesas, 1);

    expect(resultado).toEqual([
      {id: 2, descricao: "Transporte", valor: 15, categoria: "Transporte", mes: 10}
    ]);
  });

  it("se o id não existir, deve retornar uma retorna uma cópia igual", () => {
    const despesas: Despesa[] = [
      { id: 1, descricao: "Almoço", valor: 20, categoria: "Alimentação", mes: 10 },
      { id: 2, descricao: "Transporte", valor: 15, categoria: "Transporte", mes: 10 }
    ];

    const resultado = removerDespesa(despesas, 3);

    expect(resultado).toEqual([...despesas]);
  });
});

describe("despesasDaCategoria", () => {
  it("Retorna todas as despesas de uma categoria específica", () => {
    const despesas: Despesa[] = [
      { id: 1, descricao: "Almoço", valor: 20, categoria: "Alimentação", mes: 10 },
      { id: 2, descricao: "Cinema", valor: 30, categoria: "Lazer", mes: 10 },
      { id: 3, descricao: "Transporte", valor: 15, categoria: "Transporte", mes: 10 }
    ];
    const resultado = despesasDaCategoria(despesas, "Alimentação");

    expect(resultado).toEqual([
      { id: 1, descricao: "Almoço", valor: 20, categoria: "Alimentação", mes: 10 }
    ]);
  });
  it("Deve retornar uma lista vazia se não houver despesas na categoria especificada", () => {
    const despesas: Despesa[] = [
      { id: 1, descricao: "Almoço", valor: 20, categoria: "Alimentação", mes: 10 },
      { id: 2, descricao: "Cinema", valor: 30, categoria: "Lazer", mes: 10 }
    ];
    const resultado = despesasDaCategoria(despesas, "Transporte");

    expect(resultado).toEqual([]);
  });
});

describe("totalGasto", () => {
  it("Deve retornar a soma dos valores de todas as despesas", () => {
    const despesas: Despesa[] = [
      { id: 1, descricao: "Almoço", valor: 20, categoria: "Alimentação", mes: 10 },
      { id: 2, descricao: "Cinema", valor: 30, categoria: "Lazer", mes: 10 }
    ];
    const resultado = totalGasto(despesas);

    expect(resultado).toBe(50);
  });

  it("Se a lista de despesas estiver vazia, deve retornar 0", () => {
    const despesas: Despesa[] = [];
    const resultado = totalGasto(despesas);

    expect(resultado).toBe(0);
  });
});

describe("maiorDespesa", () => {
  it("Deve retornar a despesa com o maior valor", () => {
    const despesas: Despesa[] = [
      { id: 1, descricao: "Almoço", valor: 20, categoria: "Alimentação", mes: 10 },
      { id: 2, descricao: "Cinema", valor: 30, categoria: "Lazer", mes: 10 },
      { id: 3, descricao: "Transporte", valor: 15, categoria: "Transporte", mes: 10 }
    ];
    const resultado = maiorDespesa(despesas);

    expect(resultado).toEqual({ id: 2, descricao: "Cinema", valor: 30, categoria: "Lazer", mes: 10 });
  });

  it("Se a lista de despesas estiver vazia, deve retornar undefined", () => { 
    const despesas: Despesa[] = [];
    const resultado = maiorDespesa(despesas);

    expect(resultado).toBeUndefined();
  });
});
