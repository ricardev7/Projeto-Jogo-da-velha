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
        
        setTimeout(() => {
        alert("O Jogo Acabou - O vencedor foi " + playerTime )

    }, 10);
    }
    
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

// Botão de Restart abaixo
let btn = document.querySelector(".btn")
btn.addEventListener('click', restart)

function restart(){
    let blocos = document.querySelectorAll(".bloco")

    blocos.forEach(blocos => {
        blocos.innerHTML =""
    })

    board = ['','','','','','','','','']
    gameOver = false;
}