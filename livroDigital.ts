import { Livro } from "./livro";

export class LivroDigital extends Livro {
    formato: string;
    tamanhoMB: number;
    linkDownload: string;

    constructor(
        id: number,
        titulo: string,
        ano: number,
        autor: string,
        editor: string,
        numeroPaginas: number,
        formato: string,
        tamanhoMB: number,
        linkDownload: string
    ) {
        super(id, titulo, ano, autor, editor, numeroPaginas);
        this.formato = formato;
        this.tamanhoMB = tamanhoMB;
        this.linkDownload = linkDownload;
    }

    exibirDetalhes(): string {
        return `Livro Digital: ${this.titulo}\nAno de publicação: ${this.ano}\nAutor: ${this.autor}\nEditora: ${this.editor}\ntotal páginas: ${this.numeroPaginas}\nFormato: ${this.formato}\nTamanho: ${this.tamanhoMB} MB\nLink de download: ${this.linkDownload}`;
    }
}
