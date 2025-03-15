import { Item } from "./item";
import { Pesquisavel } from "./pesquisavel";

export class Livro extends Item implements Pesquisavel {
    autor: string;
    editor: string;
    numeroPaginas: number;

    constructor(
        id: number, 
        titulo: string, 
        ano: number, 
        autor: string, 
        editor: string, 
        numeroPaginas: number
    ) {
        super(id, titulo, ano);
        this.autor = autor;
        this.editor = editor;
        this.numeroPaginas = numeroPaginas;
    }

    exibirDetalhes(): string {
        return `Livro: ${this.titulo}\nAno de publicação: ${this.ano}\nAutor: ${this.autor}\nEditora: ${this.editor}\ntotal páginas: ${this.numeroPaginas}`;
    }

    pesquisar(termo: string): boolean {
        const termoLowerCase = termo.toLowerCase();
        return this.titulo.toLowerCase().includes(termoLowerCase) || 
               this.autor.toLowerCase().includes(termoLowerCase) || 
               this.editor.toLowerCase().includes(termoLowerCase);
    }
}