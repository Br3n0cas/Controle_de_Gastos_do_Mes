export interface Despesa {
  readonly id: number; // readonly: o ID identifica a despesa e não deve ser alterado depois de criada.
  descricao: string;
  valor: number;
  categoria: Categoria; // Union Type: limita a categoria às opções definidas, evitando valores inválidos.
  mes: number;
  observacao?: string; // Opcional: nem toda despesa precisa ter uma observação.
}

export type Categoria = "Alimentação" | "Transporte" | "Lazer" | "Moradia";