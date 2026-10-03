import {describe, expect, it} from "vitest";
import {adicionarDespesa} from "./despesas";
import {Mes, Categoria, Despesa} from "./tipos";

describe("adicionarDespesa", () => {
  it("deve adicionar uma nova despesa à lista existente", () => {
    const despesas: Despesa[] = [{ id: 1, descricao: "Almoço", valor: 20, categoria: "Alimentação", mes: 1, observacao: "Almoço com amigos" } ];
    const novaDespesa: Despesa = { id: 2, descricao: "Transporte", valor: 15, categoria: "Transporte", mes: 1 };
    
    expect(adicionarDespesa(despesas, novaDespesa)).toEqual([...despesas, novaDespesa]);
  });
});