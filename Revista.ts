import { Item } from "./item";

export class Revista extends Item {
    editor: number;
    periodicidade : string;

    constructor(
        id: number, 
        titulo: string, 
        ano: number, 
        editor: number, 
        periodicidade: string
    ) {
        super(id, titulo, ano);
        this.editor = editor;
        this.periodicidade = periodicidade;
    }

    exibirDetalhes(): string {
        return `Revista: ${this.titulo}\nAno de publicação: ${this.ano}\nEditora: ${this.editor}\nPeriodicidade: ${this.periodicidade}`;
    }
}