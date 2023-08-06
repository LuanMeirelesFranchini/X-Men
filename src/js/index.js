// Introdução ao Java no Projeto

const personagens = document.querySelectorAll(".personagem");

personagens.forEach(personagem => {
    personagem.addEventListener("mouseenter", () => {

      /*  if(window.innerWidth < 450 );{
            window.scrollTo({
                top: 0, behavior: "smooth"
            });
        }*/

        removerSelecaodoPersonagem();

        personagem.classList.add("selecionado");

        alterimagemPersonagemSelecionado(personagem);

        alterarNomePersonagem(personagem);
        
        alterarDescricaoPersonagem(personagem);
    })
});

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById("descricao-personagem");
    descricaoPersonagem.innerText = personagem.getAttribute("data-descriptions");
}

function alterarNomePersonagem(personagem) {
    const nomePersonagem = document.getElementById("nome-personagem");
    // nomePersonagem.innerText = idPersonagem;
    nomePersonagem.innerText = personagem.getAttribute("data-name");
}

function alterimagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector(".personagem-grande");
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaodoPersonagem() {
    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

