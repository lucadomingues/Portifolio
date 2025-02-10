var elementPai = document.body;
//VARIAVEIS REFERENTES AS OPÇÕES DO PLAYER
var valorOp = document.getElementById("valorOp");
var opImg = document.getElementById("opImg");
var legImg = document.getElementById("legImg")

//VARIAVEIS REFERENTE AO PLACAR DO JOGO
var pontPlayer = 0;
var pontComp = 0;
var contJogadas = 0;

function imgsPrincipais(){
    if (valorOp.value == 1){
        opImg.src = "pedra.png";
        legImg.innerHTML = "PEDRA";
    }else if (valorOp.value == 2){
        opImg.src = "papel.png";
        legImg.innerHTML = "PAPEL";
    }else if (valorOp.value == 3){
        opImg.src = "tesoura.png";
        legImg.innerHTML = "TESOURA";
    }
}
//FUNÇÃO QUE ALTERA OPÇÃO PARA MENOS
function antes(){
    if (valorOp.value > 1){
        if (valorOp.value <=3){
            valorOp.value--;
        }
    }
    //FUNÇÃO PARA MUDAR IMAGEM CONFORME OPÇÃO
    imgsPrincipais(valorOp)
}
//FUNÇÃO QUE ALTERA OPÇÃO PARA MAIS
function depois(){
    if (valorOp.value < 3){
        if (valorOp.value >= 0){
            valorOp.value++;
        }
    }
    //FUNÇÃO PARA MUDAR IMAGEM CONFORME OPÇÃO
    imgsPrincipais(valorOp)
}

//VARIAVEIS REFERENTE A PÓS JOGADA -- CRIAÇÃO DE UM BUTTON(JOGAR NOVAMENTE)
function jogarNovamente(){
    var btnJogar = document.getElementById("btnJogar")
    btnJogar.remove()
    var btnTenteNovamente = document.createElement("button")
    var nomeBtn = document.createTextNode("Jogar Novamente")
    btnTenteNovamente.appendChild(nomeBtn)
    btnTenteNovamente.classList.add("tenteNovamente")
    elementPai.appendChild(btnTenteNovamente)
}

function opCompPlayer(imgSelecionada, imgCampo){
    if (imgSelecionada == 1){
        imgCampo.src = "pedra.png";
    }else if (imgSelecionada == 2){
        imgCampo.src = "papel.png";
    }else if (imgSelecionada == 3){
        imgCampo.src = "tesoura.png";
    }
}

//VARIAVEL QUE LIBERA A FUNÇÃO JOGAR
var jogoLiberado = "true";

//FUNÇÃO QUE ENTREGARÁ O VALOR FINAL DO JOGO
function jogar(){
    if (valorOp.value > 0){
        if (jogoLiberado == "true"){
            //TRAVANDO A FUNÇÃO JOGAR
            jogoLiberado = "false";

            //OPÇÃO DO PLAYER - Decidido pelas functions "antes" e "depois"
            var opPlayer = valorOp.value;

            //ESCOLHA ALEATÓRIO DO COMPUTADOR
            let opComp = [1, 2, 3];
            var randomOp = opComp[Math.floor(Math.random() * opComp.length)];

            console.log(randomOp)

            /*OPÇÃO DO COMPUTADOR
            if (randomOp == 1){
                var playerComp = "PEDRA";
            }else if (randomOp == 2){
                var playerComp = "PAPEL";
            }else{
                var playerComp = "TESOURA";
            }*/

            //VARIAVES DA OPÇÃO DO JOGADOR E DO COMPUTADOR
            var imgPlayer = document.getElementById("imgPlayer")
            var imgComp = document.getElementById("imgComp")

            var resRodada = document.getElementById("resRodada")
            //RESULTADO DA PARTIDA
            function parResultado(funRes, randomOp, opPlayer){
                resRodada.innerHTML = funRes;
                opCompPlayer(randomOp, imgComp)
                opCompPlayer(opPlayer, imgPlayer)

                //CHAMANDO FUNÇÃO DO timeClear PARA APAGAR RESULTADO
                setTimeout(timeClear, 3000)
            }
            //FUNÇÃO QUE APAGA O RESULTADO QUANDO ATINGIR O TEMPO
            //E RETORNA AS IMAGENS INICIAIS DO PLAYER E DO COMPUTADOR
            function timeClear(){
                resRodada.innerHTML = "";
                resRodada.style.background = "transparent";
                imgPlayer.src = "player.png";
                imgComp.src = "computer.png";
                //LIBERAÇÃO DA FUNÇÃO JOGAR
                jogoLiberado = "true";
            }

            //VARIAVEIS QUE RECEBEM OS VALORES DO PLACAR
            var indexPontoP = document.getElementById("pontoP")
            var indexPontoC = document.getElementById("pontoC")
            
            //VERIFICANDO O VENCEDOR DA RODADA
            if (randomOp == 1 && opPlayer == 1 || randomOp == 2 && opPlayer == 2 || randomOp == 3 && opPlayer == 3){
                parResultado("EMPATE", randomOp, opPlayer)
                resRodada.style.background = "rgb(243, 243, 28)";
            }else if (randomOp == 1 && opPlayer == 2 || randomOp == 2 && opPlayer == 3 || randomOp == 3 && opPlayer == 1){
                parResultado("RODADA VENCEDORA", randomOp, opPlayer)
                resRodada.style.background = "rgba(40, 192, 40, 0.89)";
                pontPlayer += 1;
                contJogadas += 1;
                indexPontoP.innerHTML = pontPlayer;
            }else{
                parResultado("RODADA PERDEDORA", randomOp, opPlayer)
                resRodada.style.background = "rgb(248, 43, 43)";
                pontComp += 1;
                contJogadas += 1;
                indexPontoC.innerHTML = pontComp;
            }

            var resGame = document.getElementById("resGame")
            var contJogNov = 0;
            //VERIFICA O PLACAR E FINALIZA O JOGO
            if (contJogadas == 2 && pontPlayer == 2 || contJogadas == 3 && pontPlayer == 2){
                resGame.innerHTML = "VITÓRIA";
                resGame.style.color = "rgba(40, 192, 40, 0.89)";
                contJogNov = 1;
                jogarNovamente()
            }else if (contJogadas == 2 && pontComp == 2 || contJogadas == 3 && pontComp == 2){
                resGame.innerHTML = "DERROTA";
                resGame.style.color = "red";
                contJogNov = 1;
                jogarNovamente()
            }

            if (contJogNov > 0){
                var recarregar = document.querySelector(".tenteNovamente")
                recarregar.addEventListener("click", function(){
                    window.location.reload()
                })
            }
        }
    }
}