import { Item } from "./item";
import type { Pesquisavel } from "./pesquisavel";

export class Biblioteca {
    private itens: Item[] = [];

    adicionarItem(item: Item): void {
        this.itens.push(item);
    }

    removerItem(id: number): boolean {
        const index = this.itens.findIndex(item => item.id === id);
        if (index !== -1) {
            this.itens.splice(index, 1);
            return true;
        }
        return false;
    }

    buscarItens(termo: string): Item[] {
        return this.itens.filter(item => {
            // Verificar se o item implementa a interface Pesquisavel
            if ('pesquisar' in item) {
                return (item as unknown as Pesquisavel).pesquisar(termo);
            }
            return false;
        });
    }

    listarTodosItens(): Item[] {
        return [...this.itens];
    }
}