function EscreverTexto(el, txt, interval) {
    const char = txt.split("").reverse();
    const escrever = setInterval(() => {
        if(!char.length) {
            return clearInterval(escrever);
        };
        const proximo = char.pop();
        el.innerHTML += proximo;
    }, interval);
};

export {EscreverTexto};