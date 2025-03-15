# Biblio-Tech
Sistema simples para gerenciamento de Biblioteca

## Integrantes do Grupo
- DIEGO DE SOUSA OLIVEIRA
- CAIQUE NASCIMENTO DOS SANTOS
- VINÍCIUS GABRIEL DE SOUSA SOARES
- ALEXANDRE DE ALENCAR VASCONCELOS

## Instalação e Execução

Para instalar as dependências:
```bash
bun install
```

Para rodar o programa:
```bash
bun run index.ts
```

## Estrutura do Projeto

O Biblio-Tech é um sistema de gerenciamento de biblioteca que implementa conceitos de programação orientada a objetos como herança, polimorfismo e encapsulamento.

### Arquivos e Classes

#### `item.ts`
Contém a classe abstrata `Item` que serve como base para todos os itens da biblioteca.
- **Propriedades**: id, titulo, ano
- **Métodos**: exibirDetalhes (abstrato)

#### `livro.ts`
Implementa a classe `Livro` que herda de `Item`.
- **Propriedades**: autor, editor, numeroPaginas
- **Métodos**: exibirDetalhes, pesquisar

#### `livroDigital.ts`
Implementa a classe `LivroDigital` que herda de `Livro`.
- **Propriedades**: formato, tamanhoMB, linkDownload
- **Métodos**: exibirDetalhes

#### `revista.ts`
Implementa a classe `Revista` que herda de `Item`.
- **Propriedades**: editor, numeroPaginas, categoria
- **Métodos**: exibirDetalhes, pesquisar

#### `biblioteca.ts`
Implementa a classe `Biblioteca` que gerencia a coleção de itens.
- **Propriedades**: itens
- **Métodos**: adicionarItem, removerItem, buscarItens, listarTodosItens

#### `usuario.ts`
Implementa a classe `Usuario` que representa um usuário da biblioteca.
- **Propriedades**: id, nome, email, telefone, itensEmprestados
- **Métodos**: emprestarItem, devolverItem

#### `index.ts`
Arquivo principal que demonstra o funcionamento do sistema:
- Cria instâncias de livros, revistas e livros digitais
- Cria usuários
- Realiza operações de empréstimo e devolução
- Demonstra o polimorfismo usando o método de busca da biblioteca

## Interfaces

#### `Pesquisavel`
Interface implementada por classes que podem ser pesquisadas.
- **Métodos**: pesquisar

## Funcionalidades

- Cadastro e gerenciamento de diferentes tipos de itens (livros, revistas, livros digitais)
- Cadastro e gerenciamento de usuários
- Empréstimo e devolução de itens
- Busca de itens por termo
- Listagem de todos os itens disponíveis

## Conceitos Demonstrados

- **Herança**: Livro e Revista herdam de Item; LivroDigital herda de Livro
- **Polimorfismo**: Método exibirDetalhes implementado de forma diferente em cada classe
- **Encapsulamento**: Propriedades privadas com getters e setters na classe Usuario
- **Classes Abstratas**: Item é uma classe abstrata
- **Interfaces**: Pesquisavel define um contrato para classes que podem ser pesquisadas

O Biblio-Tech é um sistema de gerenciamento de biblioteca que implementa conceitos de programação orientada a objetos como herança, polimorfismo e encapsulamento.

### Arquivos e Classes

#### `item.ts`
Contém a classe abstrata `Item` que serve como base para todos os itens da biblioteca.
- **Propriedades**: id, titulo, ano
- **Métodos**: exibirDetalhes (abstrato)

#### `livro.ts`
Implementa a classe `Livro` que herda de `Item`.
- **Propriedades**: autor, editor, numeroPaginas
- **Métodos**: exibirDetalhes, pesquisar

#### `livroDigital.ts`
Implementa a classe `LivroDigital` que herda de `Livro`.
- **Propriedades**: formato, tamanhoMB, linkDownload
- **Métodos**: exibirDetalhes

#### `revista.ts`
Implementa a classe `Revista` que herda de `Item`.
- **Propriedades**: editor, numeroPaginas, categoria
- **Métodos**: exibirDetalhes, pesquisar

#### `biblioteca.ts`
Implementa a classe `Biblioteca` que gerencia a coleção de itens.
- **Propriedades**: itens
- **Métodos**: adicionarItem, removerItem, buscarItens, listarTodosItens

#### `usuario.ts`
Implementa a classe `Usuario` que representa um usuário da biblioteca.
- **Propriedades**: id, nome, email, telefone, itensEmprestados
- **Métodos**: emprestarItem, devolverItem

#### `index.ts`
Arquivo principal que demonstra o funcionamento do sistema:
- Cria instâncias de livros, revistas e livros digitais
- Cria usuários
- Realiza operações de empréstimo e devolução
- Demonstra o polimorfismo usando o método de busca da biblioteca

## Interfaces

#### `Pesquisavel`
Interface implementada por classes que podem ser pesquisadas.
- **Métodos**: pesquisar

## Funcionalidades

- Cadastro e gerenciamento de diferentes tipos de itens (livros, revistas, livros digitais)
- Cadastro e gerenciamento de usuários
- Empréstimo e devolução de itens
- Busca de itens por termo
- Listagem de todos os itens disponíveis

## Conceitos Demonstrados

- **Herança**: Livro e Revista herdam de Item; LivroDigital herda de Livro
- **Polimorfismo**: Método exibirDetalhes implementado de forma diferente em cada classe
- **Encapsulamento**: Propriedades privadas com getters e setters na classe Usuario
- **Classes Abstratas**: Item é uma classe abstrata
- **Interfaces**: Pesquisavel define um contrato para classes que podem ser pesquisadas
