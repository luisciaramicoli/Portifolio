# Documentação: Páginas e Funções do Portfólio

Este documento lista todas as seções (páginas) e funções (componentes) desenvolvidas no projeto do seu portfólio. Como se trata de uma aplicação Single Page Application (SPA) desenvolvida em React, as "páginas" são seções renderizadas em uma única página principal.

## 1. Estrutura Principal (`App.jsx`)
O componente raiz que orquestra toda a aplicação.
*   **Funções Principais:**
    *   **Smooth Scrolling:** Inicializa a biblioteca `Lenis` para um scroll suave e fluido em toda a página.
    *   **Layout:** Renderiza e organiza todos os componentes principais da página (Header, Hero, About, Projects, Contact, Footer).
    *   **Elementos Globais:** Inclui os componentes globais `CustomCursor` e `ScrollProgress`.

## 2. Componentes de Interface Globais

### `Header.jsx` (Navegação Superior)
*   **Funções Principais:**
    *   **Navegação Rápida:** Links âncora para navegar suavemente entre as seções (`#hero`, `#about`, `#projects`, `#contact`).
    *   **Menu Responsivo (Mobile):** Menu hambúrguer que abre em telas menores com animações (framer-motion).
    *   **Download de Currículo:** Botão de destaque para abrir o PDF do currículo.
    *   **Efeito Sticky:** Altera a aparência da barra ao "scrollar" a página (efeito de vidro/scrolled).

### `Footer.jsx` (Rodapé)
*   **Funções Principais:**
    *   **Informações de Marca:** Exibição do logo, slogan e direitos autorais.
    *   **Redes Sociais:** Links para GitHub, LinkedIn e Currículo Lattes.
    *   **Links de Navegação Adicionais:** Repete os links de navegação para fácil acesso ao final da página.

### `CustomCursor.jsx` & `ScrollProgress.jsx`
*   **Funções Principais:**
    *   **Cursor Customizado:** Substitui o cursor padrão do sistema por um design interativo que acompanha o mouse.
    *   **Barra de Progresso:** Um indicador visual na parte superior ou lateral da tela que mostra o quanto a página já foi "scrollada".

## 3. Seções Principais (Páginas)

### 3.1. Início (`Hero.jsx`)
A primeira seção visível do site (Landing Page).
*   **Funções Principais:**
    *   **Apresentação de Impacto:** Exibe o nome ("Luis Ciaramicoli") com uma animação de digitação em cascata e um resumo do foco profissional (Sistemas Inteligentes & IA).
    *   **Botões Magnéticos (Magnetic Buttons):** Botões ("Ver Projetos", "Contatar") que interagem com o movimento do mouse, criando um efeito de atração magnética.
    *   **Integração 3D:** Renderiza o componente `Scene3D` como plano de fundo interativo.
    *   **Links Sociais:** Acesso rápido ao GitHub, LinkedIn e Lattes.

### 3.2. Sobre (`About.jsx`)
Seção focada na trajetória, habilidades e conquistas.
*   **Funções Principais:**
    *   **Biografia & Perfil:** Foto, resumo acadêmico e estatísticas rápidas (Anos P&D, Top 20 Samsung).
    *   **Arsenal Técnico (Skills):** Grade interativa que exibe as tecnologias dominadas, separadas por categorias (Mobile, Backend, Frontend, IA, IoT), com efeitos hover.
    *   **Linha do Tempo (Timeline):** Apresenta de forma cronológica as experiências (Estágio na Movement, Pesquisa FAPESP) e premiações, utilizando uma barra de progresso que se preenche conforme o scroll da página.

### 3.3. Projetos (`Projects.jsx`)
Seção de portfólio para exibir as soluções e pesquisas desenvolvidas.
*   **Funções Principais:**
    *   **Sistema de Filtros:** Permite filtrar os projetos por categorias ("Todos", "IA", "IoT", "Científico").
    *   **Cards de Projeto (3D Hover Effect):** Cada projeto (ex: climAgro, Bengala Multissensorial) é exibido em um card de vidro ("glass-card") que gira e se inclina sutilmente em 3D de acordo com a posição do mouse.
    *   **Modal de Detalhes (`ProjectModal`):** Ao clicar em um projeto, um popup animado (modal) é aberto exibindo detalhes avançados: descrição longa, objetivos alcançados, lista de tecnologias (tags) e links externos (GitHub/Demo).
    *   **Produção Acadêmica:** Subseção que lista publicações acadêmicas e artigos (ex: Revista da Atena Editora) com links diretos em cards interativos.

### 3.4. Contato (`Contact.jsx`)
Seção focada em networking e conversão.
*   **Funções Principais:**
    *   **Status de Disponibilidade:** Exibe um card visual animado indicando a disponibilidade imediata para propostas e localização (Tupã, SP).
    *   **Grade de Contatos (`ContactMethod`):** Cards interativos para diferentes meios (Email, LinkedIn, GitHub, WhatsApp).
    *   **Copiar para a Área de Transferência:** Em meios específicos (Email e WhatsApp), um botão dedicado permite ao usuário copiar os dados com um clique, apresentando um feedback visual de confirmação (ícone de "Check").

## 4. Componentes Especiais

### `Scene3D.jsx` (Plano de Fundo Interativo)
*   **Funções Principais:**
    *   **Renderização 3D:** Utiliza `@react-three/fiber` e `three.js` para criar um ambiente 3D.
    *   **Elementos Gráficos:** Renderiza uma esfera central distorcida e animada, partículas flutuantes e estrelas ao fundo.
    *   **Interatividade:** O objeto central reage ao movimento do mouse e à passagem do tempo, proporcionando um visual moderno e "tech" ao Hero da página.
