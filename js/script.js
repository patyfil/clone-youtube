var sanduiche = document.querySelector(".menu-sanduiche");
var sidebars = document.querySelectorAll(".sidebar");
var videoAreas = document.querySelectorAll(".video-container");
var filtros = document.querySelectorAll(".filtros");
var inscricoes = document.querySelectorAll(".inscricoes");
var explorar = document.querySelectorAll(".explorar");
var linhas = document.querySelectorAll(".linha");
var videos = document.querySelectorAll(".video");

sanduiche.onclick = function() {
  // Itera sobre todos os elementos encontrados com a classe e aplica as alterações
  sidebars.forEach(function(sidebar) {
    sidebar.classList.toggle("small-sidebar");
  });
  videoAreas.forEach(function(videoArea) {
    videoArea.classList.toggle("aumenta-video-container");
  });
  filtros.forEach(function(filtro) {
    filtro.classList.toggle("small-filtros");
  });
  inscricoes.forEach(function(inscricao) {
    inscricao.classList.toggle("esconde-inscricoes");
  });
  explorar.forEach(function(itemExplorar) {
    itemExplorar.classList.toggle("esconde-explorar");
  });
  linhas.forEach(function(linha) {
    linha.classList.toggle("esconde-linha");
  });
  videos.forEach(function(video) {
    video.classList.toggle("aumenta-video");
  });
}
