// src/data/menuData.js

// 1. Dados de Cafés Quentes
export const cafesQuentes = [
  { nome: "ESPRESSO", descricao: "Café expresso (30ml).", preco: "R$ 7,00" },
  {
    nome: "CARIOCA",
    descricao: "Café expresso (30ml), completado com água quente (150ml).",
    preco: "R$ 7,00",
  },
  {
    nome: "DOPPIO",
    descricao: "Duas extrações de espresso em uma única xícara (60ml).",
    preco: "R$ 12,00",
  },
  {
    nome: "MACCHIATO",
    descricao: "Espresso completado com a crema do leite (80ml).",
    preco: "R$ 9,00",
  },
  {
    nome: "DULCE MACCHIATO",
    descricao: "Espresso completado com crema de leite e doce de leite (80ml).",
    preco: "R$ 11,00",
  },
  {
    nome: "CAFÉ COADO",
    descricao: "Extraído de forma artesanal, notas aromáticas especiais.",
    preco: "R$ 15,00",
  },
];

// 2. Dados de Cafés Gelados
export const cafesGelados = [
  {
    nome: "MOCHA GELADO",
    descricao: "Sorvete de creme, ovomaltine, espresso e chantilly (300ml).",
    preco: "R$ 26,00",
  },
  {
    nome: "AFFOGATO",
    descricao: "2 bolas de sorvete, flor de chantilly, cacau em pó por cima.",
    preco: "R$ 23,00",
  },
  {
    nome: "COLD BREW",
    descricao: "Café gelado infusionado por 24h (200ml).",
    preco: "R$ 20,00",
  },
  {
    nome: "COLD BREW TANGERINA",
    descricao: "Café gelado com xarope de tangerina e hortelã (300ml).",
    preco: "R$ 23,00",
  },
];

// 3. Dados de Doces
export const doces = [
  {
    nome: "BOLO DE CENOURA",
    descricao: "Fatia generosa com cobertura de brigadeiro cremoso.",
    preco: "R$ 11,00",
  },
  {
    nome: "BROWNIE DE CHOCOLATE",
    descricao: "Servido quente com sorvete de baunilha.",
    preco: "R$ 18,00",
  },
  {
    nome: "PÃO DE MEL",
    descricao: "Coberto com chocolate ao leite e recheio de doce de leite.",
    preco: "R$ 9,00",
  },
];

// 4. O ARRAY PRINCIPAL menuSections (CORREÇÃO DE ESTRUTURA)
export const menuSections = [
  {
    id: "quentes",
    title: "Cafés Quentes",
    data: cafesQuentes,
  },
  {
    id: "gelados",
    title: "Cafés Gelados",
    data: cafesGelados,
  },
  {
    id: "doces",
    title: "Doces",
    data: doces, // Garante que a seção de doces também tenha a propriedade 'data'.
  },
];
