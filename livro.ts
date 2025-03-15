import { Item } from "./item";

export class Livro extends Item {
    autor: string;
    editor: string;
    numeroPaginas: number;

    constructor(id: number, titulo: string, ano: number, 
        autor: string, editor: string, numeroPaginas: number) {
        super(id, titulo, ano);
        this.autor = autor;
        this.editor = editor;
        this.numeroPaginas = numeroPaginas;
    }

    exibirDetalhes(): string {
        return `Livro: ${this.titulo}\nAno de publicação: ${this.ano}\nAutor: ${this.autor}\nEditora: ${this.editor}\ntotal páginas: ${this.numeroPaginas}`;
    }
}
