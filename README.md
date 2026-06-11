# 🌾 Guardiões do Solo - Concurso Agrinho 2026

> **Tema:** "Agro forte, futuro sustentável: equilíbrio entre produção e ambiente"
>
> **Categoria:** Programação / Desenvolvimento Web
---

## 🎯 Objetivo do Projeto
O objetivo deste site é conscientizar a nossa comunidade escolar e os produtores locais sobre a importância da conservação e do manejo correto do solo. Queremos mostrar, de forma simples e prática, que o Paraná pode continuar com uma produção agrícola forte e tecnológica sem esgotar os recursos naturais, alcançando o equilíbrio perfeito entre a produtividade e a sustentabilidade ambiental.

---

## 💻 Recursos Técnicos do Projeto
Para garantir que o site funcione bem, seja acessível e siga as boas práticas que estamos aprendendo em programação, aplicamos os seguintes recursos técnicos no código:

* **HTML5 Semântico:** Em vez de usar apenas tags genéricas (como `<div>`), utilizamos tags semânticas como `<header>`, `<nav>`, `<section>` e `<footer>`. Isso melhora a acessibilidade para leitores de tela e ajuda nos motores de busca (SEO).
* **Responsividade Nativa:** O site utiliza propriedades de largura dinâmica (`max-width: 900px` e `width: 100%`) combinadas com a tag `<meta name="viewport">`. Isso garante que o layout se adapte automaticamente tanto em computadores quanto em celulares.
* **Arquitetura Flexbox:** Usamos o modelo de caixa `display: flex` com `flex-direction: column` na folha de estilo para organizar os cards de conteúdos. Isso deixa o alinhamento dos blocos limpo e maleável.
* **Otimização de Carregamento (Performance):** O código foi construído sem dependências externas (como JQuery ou Bootstrap) e sem imagens pesadas de servidores terceiros. Toda a estilização é feita via CSS puro, fazendo o site carregar instantaneamente, mesmo em conexões 3G/4G instáveis do meio rural.
* **Versionamento de Código:** Uso do Git e GitHub para o controle de versões do projeto, garantindo o histórico de modificações e a hospedagem segura através do GitHub Pages.

---

## 🎨 UI/UX & Design (Experiência do Usuário)
Pensamos em um design focado na simplicidade e na leitura agradável, já que o público do site vai desde alunos até trabalhadores do campo.

* **Paleta de Cores:** * `Verde Escuro (#2e7d32)`: Cor principal, representa a nossa vegetação, as matas e o agro sustentável.
  * `Verde Claro (#e8f5e9)`: Usado nos blocos de destaque (cards) para dar contraste e facilitar a leitura.
  * `Fundo (#f4f9f4)`: Um tom off-white levemente esverdeado para não cansar a vista de quem lê.
* **Navegação Simples:** Criamos um menu de ancoragem (`nav`) fixo no topo usando IDs do HTML. Quando o usuário clica, a página desliza direto para a seção escolhida, sem precisar ficar rolando a tela toda hora.

---

## 🛠️ Tecnologias Utilizadas
Focamos em dominar as tecnologias de base da internet (Front-End padrão):

1. **HTML5:** Para construir a estrutura e esqueleto lógico do site.
2. **CSS3:** Para a estilização visual (cores, fontes, espaçamentos e bordas).
3. **GitHub Pages:** Para publicar e hospedar o site direto na internet de forma gratuita.

---

## 📁 Estrutura do Arquivo
O projeto foi estruturado da forma mais limpa possível para facilitar a correção da banca examinadora:

```text
guardioes-do-solo/
├── index.html        # Arquivo principal do site (Estrutura e Estilização CSS juntas)
└── README.md         # Documentação completa do projeto (Este arquivo aqui)
