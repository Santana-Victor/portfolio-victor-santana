function AlterarTema(event, el, img) {
    if (event.type === "touchstart") event.preventDefault();
    const modoClaroAtivo = el.classList.contains("modo-claro")
    el.classList.toggle("modo-claro");
    if (modoClaroAtivo) {
        img.classList.remove("fa-moon");
    } else {
        img.classList.add("fa-moon");
    };
};

export { AlterarTema };