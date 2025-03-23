# 👨‍💻 Wiki Movie #

## 🎯Objetivo :
Nesse projeto, eu quis criar uma página completa que me desafiasse, algo prático, funcional e responsivo, integrando conceitos mais avançados e exercitando minhas habilidades, principalmente em consumo de APIs. A ideia principal foi desenvolver uma plataforma que permitisse ao usuário buscar, filtrar e explorar informações detalhadas sobre filmes, como elenco, sinopse e trailers, consumindo dados da API **The Movie Database (TMDb)**.

---

## 🚧 Principais desafios :
Como me propus a criar algo maior do que os projetos que fiz antes, alguns erros que apareceram foram a parte mais desafiadora. Como os dados vinham de uma API com milhares de filmes, alguns não tinham todas as informações completas. Por isso, me preocupei em inserir arquivos padrão (*default*) em caso de erro e deixar os componentes formatados para receber dados curtos ou maiores, garantindo uma experiência mais agradável para o usuário.

---

## 🚀 Tecnologias Utilizadas
<img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png" width="40px" > <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png" width="40px" > <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png" width="32px" > <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png" width="32px" >

- **HTML5**: Estrutura.

- **CSS3**: Aplicação de estilos e transições.

- **JavaScript**: Criação de funções, arrays e condicionais. Consumo de API com o fetch.

- **React**: Criação da interface, com uso de componentes e hooks (`useState, useEffect`).

- **Styled Components**: Criação de estilo global, podendo assim precisar reescrever as propriedades e estilos.

- **React Router Dom**: Criação de rotas e uso dos parâmetros da URL.

- **Vite**: Ferramenta para build e desenvolvimento, deixando o processo mais rápido.

- **ESLint**: Pré-instalado com o Vite, usado para definir regras e deixar o código mais conciso.

---

## ⚙️ Funcionalidades
- **Listas de filmes**: Na página inicial, são renderizados carrosséis com os principais filmes de cada categoria.

- **Filtros por gênero**: O menu conta com uma lista de links para cada gênero, que leva para uma página do gênero selecionado.

- **Detalhes do filme**: Todas as capas de filmes contam com links que direcionam para uma página com detalhes do filme (elenco, sinopse, trailer).

- **Detalhes de pessoas**: Além da página de detalhes do filme, existe uma página semelhante, mas com dados das pessoas do elenco ou da equipe do filme. O link para essa página fica na imagem de cada pessoa.

- **Boas práticas de código**: Uso de tags semânticas para melhor estruturação da página.


## 🎨 Design da Página
O design foi pensado para ser moderno, responsivo e de fácil usabilidade, garantindo uma experiência agradável em qualquer dispositivo.

<img src="/gifs/design-desktop.gif" width="780px">           <img src="/gifs/design-mobile.gif" height="370px">
