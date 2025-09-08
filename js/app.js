function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
  
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        let confirmarDevolucao = confirm('Tem certeza que deseja devolver este jogo?');

        if (confirmarDevolucao) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.textContent = 'Alugar';
            botao.classList.remove('dashboard__item__button--return');
            alert('Jogo devolvido com sucesso!');
        } else {
            alert('A devolução foi cancelada.');
        }

    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }
      contarJogosAlugados();
}
function contarJogosAlugados() {
  let alugados = document.querySelectorAll('.dashboard__item__img--rented').length;
  
  console.log(`Total de jogos alugados: ${alugados}`);
}
