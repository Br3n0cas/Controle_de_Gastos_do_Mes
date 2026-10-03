export interface Despesa {
  readonly id: number; // readonly: o ID identifica a despesa e não deve ser alterado depois de criada.
  descricao: string;
  valor: number;
  categoria: Categoria; // Union Type: limita a categoria às opções definidas, evitando valores inválidos.
  mes: Mes; // Union Type: limita o mês às opções definidas, evitando valores inválidos.
  observacao?: string; // Opcional: nem toda despesa precisa ter uma observação.
}

export type Categoria = "Alimentação" | "Transporte" | "Lazer" | "Moradia";
export type Mes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;