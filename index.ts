import { Livro } from "./livro";
import { Revista } from "./revista";
import { LivroDigital } from "./livroDigital";
import { Biblioteca } from "./biblioteca";
import { Usuario } from "./usuario";

// Criando a biblioteca
const biblioteca = new Biblioteca();

// Criando instâncias de livros
const livro1 = new Livro(1, "O Senhor dos Anéis", 1954, "J.R.R. Tolkien", "Allen & Unwin", 1178);
const livro2 = new Livro(2, "Harry Potter e a Pedra Filosofal", 1997, "J.K. Rowling", "Bloomsbury", 223);

// Criando instância de revista
const revista1 = new Revista(3, "National Geographic", 2023, 120, "Ciência");

// Criando instância de livro digital
const livroDigital1 = new LivroDigital(
    4, 
    "Clean Code", 
    2008, 
    "Robert C. Martin", 
    "Prentice Hall", 
    464, 
    "PDF", 
    15.7, 
    "https://exemplo.com/download/cleancode"
);

// Adicionando itens à biblioteca
biblioteca.adicionarItem(livro1);
biblioteca.adicionarItem(livro2);
biblioteca.adicionarItem(revista1);
biblioteca.adicionarItem(livroDigital1);

// Criando usuários
const usuario1 = new Usuario(1, "João Silva", "joao@email.com", "11999887766");
const usuario2 = new Usuario(2, "Maria Oliveira", "maria@email.com", "11988776655");

console.log("=== Biblioteca Inicializada ===");
console.log("Itens disponíveis:");
biblioteca.listarTodosItens().forEach(item => {
    console.log(`- ${item.titulo} (ID: ${item.id})`);
});

// Realizando empréstimos
console.log("\n=== Realizando Empréstimos ===");
if (usuario1.emprestarItem(livro1)) {
    console.log(`${usuario1.nome} emprestou: ${livro1.titulo}`);
}

if (usuario1.emprestarItem(revista1)) {
    console.log(`${usuario1.nome} emprestou: ${revista1.titulo}`);
}

if (usuario2.emprestarItem(livro2)) {
    console.log(`${usuario2.nome} emprestou: ${livro2.titulo}`);
}

if (usuario2.emprestarItem(livroDigital1)) {
    console.log(`${usuario2.nome} emprestou: ${livroDigital1.titulo}`);
}

// Exibindo itens emprestados por usuário
console.log("\n=== Itens Emprestados por Usuário ===");
console.log(`${usuario1.nome} está com:`);
usuario1.itensEmprestados.forEach(item => {
    console.log(`- ${item.titulo}`);
});

console.log(`\n${usuario2.nome} está com:`);
usuario2.itensEmprestados.forEach(item => {
    console.log(`- ${item.titulo}`);
});

// Realizando devoluções
console.log("\n=== Realizando Devoluções ===");
if (usuario1.devolverItem(1)) {
    console.log(`${usuario1.nome} devolveu: ${livro1.titulo}`);
}

if (usuario2.devolverItem(4)) {
    console.log(`${usuario2.nome} devolveu: ${livroDigital1.titulo}`);
}

// Exibindo itens emprestados após devoluções
console.log("\n=== Itens Emprestados Após Devoluções ===");
console.log(`${usuario1.nome} está com:`);
usuario1.itensEmprestados.forEach(item => {
    console.log(`- ${item.titulo}`);
});

console.log(`\n${usuario2.nome} está com:`);
usuario2.itensEmprestados.forEach(item => {
    console.log(`- ${item.titulo}`);
});

// Demonstrando polimorfismo com busca
console.log("\n=== Demonstração de Polimorfismo com Busca ===");
console.log("Buscando por 'Potter':");
const resultadosPotter = biblioteca.buscarItens("Potter");
resultadosPotter.forEach(item => {
    console.log(item.exibirDetalhes());
    console.log("---");
});

console.log("\nBuscando por 'Code':");
const resultadosCode = biblioteca.buscarItens("Code");
resultadosCode.forEach(item => {
    console.log(item.exibirDetalhes());
    console.log("---");
});

console.log("\nBuscando por 'Ciência':");
const resultadosCiencia = biblioteca.buscarItens("Ciência");
resultadosCiencia.forEach(item => {
    console.log(item.exibirDetalhes());
    console.log("---");
});
