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
    },
    btnTema: document.querySelector('#btnTema'),

    alternarTema() {
        document.body.classList.toggle('dark')
        dom.btnTema.textContent =
            document.body.classList.contains('dark')
                ? 'Light Mode'
                : 'Dark Mode'
    }

}

dom.btnMostraTexto.addEventListener('click', dom.mostrarTexto)

dom.btnExclui.addEventListener('click', dom.excluirTexto)

dom.btnTema.addEventListener('click', dom.alternarTema)
