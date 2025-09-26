# Site Marcelo Costa MA

## Estrutura
- index.html (estrutura principal do site)
- styles.css (estilos)
- scripts.js (funcionalidades)
- assets/audio/ (colocar os arquivos MP3 aqui, ex: track01.mp3 ... track21.mp3)
- assets/images/ (imagens do cantor, capas etc.)
- sitemap.xml (para SEO)
- robots.txt (para SEO e indexação)

## Como adicionar os áudios
1. Coloque os arquivos MP3 em `./assets/audio/`.
2. Nomeie como `track01.mp3, track02.mp3, ..., track21.mp3`.
3. No arquivo `scripts.js`, edite o array `musicData` e ajuste o campo `file` se os nomes forem diferentes.

## Como adicionar links do YouTube
1. No `scripts.js`, edite o array `musicData`.
2. Substitua as strings vazias no campo `youtube` pelos links reais do YouTube.

## Como habilitar downloads
1. No `scripts.js`, edite o campo `download` em cada faixa.
2. Exemplo: `download: "./assets/audio/track01.mp3"`.

## SEO
- Atualize as tags `<meta>` no `index.html` com descrições e imagens reais.
- Atualize `sitemap.xml` e `robots.txt` com o domínio correto.
