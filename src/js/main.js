import { EscreverTexto } from './EscreverTexto.js'
import { AlterarTema } from './AlterarTema.js';
import { MenuMobile } from './MenuMobile.js';

const nome = document.querySelector(".nome");
const texto = "Victor Santana";
const intervalo = 250;
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTema = document.getElementById("imagem-botao");
const menuNav = document.getElementById("nav");
const botaoMenuMobile = document.getElementById("botao-menu-mobile");
const hamburger = document.getElementById("hamburger");
const botaoTopo = document.getElementById("botao-topo");
const linksMobile = document.getElementsByClassName("links-mobile");

nome.innerHTML = ""

function IrProTopo(event) {
    if (event.type === "touchstart") event.preventDefault();
    window.scrollTo(0,0);
};
function Ocultar() {
    if(window.scrollY > 15) {
        botaoTopo.style.display = "flex"
    } else {
        botaoTopo.style.display = "none"
    };
};

EscreverTexto(nome, texto, intervalo);

botaoMenuMobile.addEventListener("click", function(evento){
    MenuMobile(evento, menuNav, hamburger);
});
botaoMenuMobile.addEventListener("touchstart", function(evento){
    MenuMobile(evento, menuNav, hamburger);
});
botaoAlterarTema.addEventListener("click", function(evento){
    AlterarTema(evento, body, imagemBotaoTema);
});
botaoAlterarTema.addEventListener("touchstart", function(evento){
    AlterarTema(evento, body, imagemBotaoTema);
});
botaoTopo.addEventListener("click", IrProTopo);
botaoTopo.addEventListener("touchstart", IrProTopo);
document.addEventListener("scroll", Ocultar, {passive: true});

for (let link of linksMobile) {
    link.addEventListener("click", function(evento){
        MenuMobile(evento, menuNav, hamburger);
    });
    link.addEventListener("touchstart", function(evento){
        MenuMobile(evento, menuNav, hamburger);
    });
};