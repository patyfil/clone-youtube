var sanduiche = document.querySelector(".menu-sanduiche");
var sidebar = document.querySelector(".sidebar");
var video = document.querySelector (".video-container");
var filtros = document.querySelector(".filtros");
var inscricoes = document.querySelector(".inscricoes");
var explorar = document.querySelector(".explorar");
var linha = document.querySelector(".linha");



sanduiche.onclick = function() {
  sidebar.classList.toggle("small-sidebar");
  video.classList.toggle("aumenta-video-container");
  filtros.classList.toggle("small-filtros");
  inscricoes.classList.toggle("esconde-inscricoes");
  explorar.classList.toggle("esconde-explorar");
  linha.classList.toggle("esconde-linha");

}