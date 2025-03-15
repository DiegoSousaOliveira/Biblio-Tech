import { Item } from "./item";

export class Usuario {
    private _id: number;
    private _nome: string;
    private _email: string;
    private _telefone: string;
    private _itensEmprestados: Item[];

    constructor(
        id: number,
        nome: string,
        email: string,
        telefone: string
    ) {
        this._id = id;
        this._nome = nome;
        this._email = email;
        this._telefone = telefone;
        this._itensEmprestados = [];
    }

    get id(): number {
        return this._id;
    }

    get nome(): string {
        return this._nome;
    }

    get email(): string {
        return this._email;
    }

    get telefone(): string {
        return this._telefone;
    }

    get itensEmprestados(): Item[] {
        return this._itensEmprestados;
    }

    set id(id: number) {
        this._id = id;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    set email(email: string) {
        this._email = email;
    }

    set telefone(telefone: string) {
        this._telefone = telefone;
    }

    emprestarItem(item: Item): boolean {
        if (this._itensEmprestados.length < 3) {
            this._itensEmprestados.push(item);
            return true;
        }
        return false;
    }

    devolverItem(id: number): boolean {
        const index = this._itensEmprestados.findIndex((item) => item.id === id);
        if (index !== -1) {
            this._itensEmprestados.splice(index, 1);
            return true;
        }
        return false;
    }
}
