# Sodinox Website

## Visão Geral

O Sodinox Website é um site institucional/vitrine desenvolvido para apresentar a empresa Sodinox, divulgar seus produtos em aço inox, fortalecer sua presença online e facilitar o contato com clientes.

O objetivo principal não é realizar vendas diretamente pelo site, mas servir como um canal de apresentação da empresa e geração de oportunidades de negócio.

O site deve transmitir profissionalismo, confiança e experiência no setor de fabricação em aço inox.

---

# Objetivos Principais

* Fortalecer a presença digital da Sodinox
* Apresentar a empresa e sua história
* Exibir produtos e serviços oferecidos
* Facilitar o contato com potenciais clientes
* Disponibilizar informações de localização
* Direcionar usuários para atendimento via WhatsApp e Email
* Funcionar como vitrine institucional da empresa

---

# Público-Alvo

* Empresas que necessitam de produtos em aço inox
* Comerciantes
* Indústrias
* Restaurantes
* Padarias
* Açougues
* Clientes que buscam produtos personalizados em inox

---

# Stack Tecnológica

## Linguagem

* HTML5
* CSS3
* JavaScript

Motivos:

* Simplicidade
* Fácil manutenção
* Alta compatibilidade
* Hospedagem de baixo custo
* Excelente desempenho

---

## Interface

HTML + CSS + JavaScript

Responsabilidades:

* Estrutura visual
* Navegação
* Responsividade
* Interatividade
* Integração com WhatsApp
* Integração com Google Maps

---

## Banco de Dados

Não obrigatório na primeira versão.

O site funciona como vitrine institucional.

Caso necessário futuramente:

* SQLite
* MySQL
* PostgreSQL

Poderão ser utilizados para:

* Cadastro de produtos
* Formulário de contato
* Sistema administrativo

---

# Arquitetura

## Estrutura Geral

```text
Website
│
├── Home
├── Produtos
├── Sobre Nós
└── Contato
```

---

## Navegação

Todas as páginas são acessíveis através do cabeçalho principal.

```text
Home
Produtos
Sobre Nós
Contato
```

O menu deve permanecer consistente em todas as páginas.

---

# Estrutura de Páginas

## Home

Objetivo:

Apresentar rapidamente a empresa e direcionar o visitante para as principais áreas do site.

Conteúdo:

* Banner principal
* Apresentação da empresa
* Destaques de produtos
* Chamada para contato
* Botão WhatsApp
* Links para demais páginas

---

## Produtos

Objetivo:

Funcionar como catálogo institucional.

Conteúdo:

* Galeria de produtos
* Fotos dos produtos
* Nome do produto
* Breve descrição
* Produtos personalizados sob encomenda

Exemplos:

* Bancadas em inox
* Pias industriais
* Mesas inox
* Estruturas personalizadas
* Equipamentos sob medida

---

## Sobre Nós

Objetivo:

Transmitir credibilidade e história da empresa.

Conteúdo:

* História da Sodinox
* Tempo de atuação
* Missão da empresa
* Fotos antigas
* Logomarcas antigas
* Foto da empresa
* Localização física

---

## Contato

Objetivo:

Facilitar comunicação com clientes.

Conteúdo:

* WhatsApp
* Email
* Endereço
* Google Maps incorporado
* Horário de atendimento

Ações principais:

```text
Entrar em contato via WhatsApp

Enviar Email

Abrir localização no Google Maps
```

---

# Design e Identidade Visual

## Tema Principal

A identidade visual deve remeter ao segmento de aço inox.

Características:

* Aparência industrial moderna
* Visual limpo
* Design profissional

---

## Textura

Utilizar textura inspirada em:

```text
Aço escovado
```

Aplicações:

* Fundos
* Elementos decorativos
* Divisores de seção

Sem comprometer a legibilidade.

---

## Paleta de Cores

Sugestão:

```text
Cinza metálico
Prata
Branco
Preto
Azul escuro (detalhes)
```

Objetivo:

Transmitir:

* Robustez
* Qualidade
* Profissionalismo

---

# Funcionalidades

## Catálogo de Produtos

Permite visualizar produtos fabricados pela empresa.

Recursos:

* Imagens
* Descrições
* Organização visual

---

## Integração WhatsApp

Botão disponível em:

* Home
* Produtos
* Contato

Função:

Abrir conversa diretamente com a empresa.

---

## Integração Email

Permite contato direto através do cliente de email do usuário.

---

## Integração Google Maps

Exibir localização da empresa.

Funções:

* Visualizar endereço
* Traçar rota
* Facilitar visitas presenciais

---

## Responsividade

O site deve funcionar corretamente em:

* Desktop
* Notebook
* Tablet
* Smartphone

---

# Estrutura Inicial de Pastas

```text
sodinox-site/

├── index.html
│
├── pages/
│   ├── produtos.html
│   ├── sobre.html
│   └── contato.html
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── logos/
│
├── css/
│   ├── global.css
│   ├── home.css
│   ├── produtos.css
│   ├── sobre.css
│   └── contato.css
│
├── js/
│   ├── main.js
│   └── maps.js
│
└── docs/
    └── project.md
```

---

# Requisitos Não Funcionais

## Performance

* Carregamento rápido
* Imagens otimizadas
* Baixo consumo de recursos

---

## SEO

Implementar:

* Meta tags
* Títulos otimizados
* Descrições
* URLs amigáveis

Objetivo:

Melhor posicionamento em mecanismos de busca.

---

## Acessibilidade

Implementar:

* Textos alternativos em imagens
* Contraste adequado
* Navegação simples

---

# Roadmap de Implementação

## Fase 1

Estrutura inicial do projeto

Entrega:

```text
Estrutura HTML completa
```

---

## Fase 2

Implementação do layout

Entrega:

```text
Cabeçalho
Rodapé
Menu de navegação
```

---

## Fase 3

Página Home

Entrega:

```text
Homepage funcional
```

---

## Fase 4

Página Produtos

Entrega:

```text
Catálogo institucional
```

---

## Fase 5

Página Sobre Nós

Entrega:

```text
História da empresa
Galeria institucional
```

---

## Fase 6

Página Contato

Entrega:

```text
WhatsApp
Email
Google Maps
```

---

## Fase 7

Responsividade

Entrega:

```text
Site adaptado para dispositivos móveis
```

---

## Fase 8

Otimização Final

Entrega:

```text
SEO
Performance
Acessibilidade
```

---

# Resultado Esperado

Um site institucional moderno, leve e profissional para a Sodinox, utilizando identidade visual inspirada em aço inox escovado, apresentando produtos, história da empresa e canais de atendimento, funcionando como uma vitrine digital capaz de gerar novos contatos e oportunidades de negócio.

