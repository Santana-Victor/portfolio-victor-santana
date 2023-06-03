function MenuMobile(event, el, img) {
    if (event.type === "touchstart") event.preventDefault();
    const menuAtivado = el.classList.contains("aberto");
    el.classList.toggle("aberto");
    if (menuAtivado) {
        img.classList.remove("fa-xmark");
    } else {
        img.classList.add("fa-xmark");
    };
};

export { MenuMobile };