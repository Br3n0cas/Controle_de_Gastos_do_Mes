import { Categoria } from "./tipos";

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