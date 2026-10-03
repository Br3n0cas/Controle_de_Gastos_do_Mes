import { Despesa } from "./tipos";

export function adicionarDespesa(
  despesas: Despesa[],
  nova: Despesa
): Despesa[] {
  if (nova.valor <= 0) {
    throw new Error("O valor da despesa deve ser maior que zero.");
  }

  if (nova.mes < 1 || nova.mes > 12) {
    throw new Error("Mês inválido. Deve ser um número entre 1 e 12.");
  }

  return [...despesas, nova];
}