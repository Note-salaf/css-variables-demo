const dom = {
    textoInicial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, officia.',
    input: document.querySelector('input'),
    btnMostraTexto: document.querySelector('#btnMostraTexto'),
    paragrafo: document.querySelector('p'),
    btnExclui: document.querySelector('#btnExclui'),
    mostrarTexto() {
    dom.paragrafo.textContent = dom.input.value
    dom.input.value = ''
},
    excluirTexto() {
        dom.paragrafo.textContent = dom.textoInicial
    }
}

dom.btnMostraTexto.addEventListener('click', dom.mostrarTexto )

dom.btnExclui.addEventListener('click', dom.excluirTexto)
