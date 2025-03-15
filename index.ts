import { Livro } from "./livro";
import { Revista } from "./revista";

let livro1 = new Livro(1, "O Senhor dos Anéis", 1954, "J.R.R. Tolkien", "HarperCollins", 1200);
let  revista1 = new Revista(2, "National Geographic", 2023, 1, "Mensal");

console.log(livro1.exibirDetalhes());
console.log(revista1.exibirDetalhes());
