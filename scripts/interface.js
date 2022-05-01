document.addEventListener('DOMContentLoaded', () => {

        let blocos = document.querySelectorAll(".bloco");

        blocos.forEach((bloco) => {
            bloco.addEventListener('click', handleClick);
        })
    })

function handleClick(event) {
    let bloco = event.target ;
    let position = bloco.id ;

    if (handleMove(position)) {
        alert("O Jogo Acabou !")

    };
    updateBloco();


}

function updateBloco() {
    
    let blocos = document.querySelectorAll(".bloco");

    blocos.forEach((bloco) => {
        let position = bloco.id;
        let symbol = board[position];

        if (symbol !='') {
            bloco.innerHTML = `<div class='${symbol}'></div>`
        }

    })
}