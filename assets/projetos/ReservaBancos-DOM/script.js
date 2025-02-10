const btn = document.querySelector("#send");
var tipoAcento = document.querySelector("#tipo-acento");
const primClasse = document.querySelectorAll(".prim-classe");
const economica = document.querySelectorAll(".economica");
let lugares = [];
let lugaresEconomica = ['5', '6', '7', '8', '9', '10'];
let lugaresPrimClasse = ['1', '2', '3', '4'];

btn.addEventListener("click", function(){
    var x;
    
    if(lugares.indexOf(lugaresPrimClasse) == -1 && lugares.indexOf(lugaresEconomica) == -1){
        if(lugares.indexOf(lugaresPrimClasse) == -1){
            if(tipoAcento.value == 1){
                console.log("Lugares Primeira Classe");
                console.log(lugares);
                for(x=0; x<primClasse.length; x++){
                    primClasse[x].classList.toggle('selecionavel-prim-classe');
                    primClasse[x].style.backgroundColor = 'rgb(0, 132, 255)';
                }
                for(x=0; x<economica.length; x++){
                    economica[x].classList.toggle('selecionavel-economica');
                    economica[x].style.backgroundColor = 'gray';
                }
            }
        }else{
            alert("Primeira Classe lotada! Mas ainda temos vagas na Econômica.");
        }

        if(lugares.indexOf(lugaresEconomica) == -1){
            if(tipoAcento.value == 2){
                console.log("Lugares Econômica");
                console.log(lugares);
                for(x=0; x<economica.length; x++){
                    economica[x].classList.toggle('selecionavel-economica');
                    economica[x].style.backgroundColor = 'rgb(0, 145, 7)';
                }
                for(x=0; x<primClasse.length; x++){
                    primClasse[x].classList.toggle('selecionavel-prim-classe');
                    primClasse[x].style.backgroundColor = 'gray';
                }
            }
        }else{
            alert("Economica lotada! Mas ainda temos vagas na Primeira Classe.");
        }
    }else{
        alert("Todos os lugares já foram reservados! Próxima viagem sai somente amanhã.");
    }
});

let acento = document.getElementById("acento");
const btnConfirmar = document.querySelector("#btn-confirmar");
const cartao = document.getElementById("cart-embarque");


btnConfirmar.addEventListener("click", function(){
    if(lugares.indexOf(acento.value) == -1){
        var banco = document.getElementById('banco').innerHTML;
        var classe = document.getElementById('classe').innerHTML;
        if(tipoAcento.value == 1){
            if(acento.value > 0 && acento.value < 5){
                cartao.style.display = "block";
                document.getElementById('banco').innerHTML = banco + acento.value;
                document.getElementById('classe').innerHTML =  classe + "Primeira Classe";
                var res = confirm("Confirma Classe " + "PRIMEIRA CLASSE - " + "Acento " + acento.value);

                if(res){
                    lugares.push(acento.value);
                }
            }else{
                alert("Acento inexistente na Primeira Classe.");
            }
        }
        else if(tipoAcento.value == 2){
            if(acento.value > 4 && acento.value < 11){
                cartao.style.display = "block";
                document.getElementById('banco').innerHTML = banco + acento.value;
                document.getElementById('classe').innerHTML =  classe + "Econômica";
                var res = confirm("Confirma Classe " + "ECONÔMICA - " + "Acento " + acento.value);

                if(res){
                    lugares.push(acento.value);
                }
            }else{
                alert("Acento inexistente na Classe Econômica.");
            }
        }
        else{
            alert("CLASSE INEXISTENTE! CORRIGIR CAMPO.");
            tipoAcento.value = '';
        }
    }else{
        alert("Acento escolhido já está ocupado!");
    }
})

const btnNovoEmbarque = document.getElementById("novo-embarque");
btnNovoEmbarque.addEventListener("click", function(){
    cartao.style.display = "none";
    acento.value='';
    tipoAcento.value='';
    banco.innerHTML = 'BANCO: '
    classe.innerHTML = 'CLASSE: '

    for(x=0; x<primClasse.length; x++){
        primClasse[x].style.backgroundColor = 'gray';
    }
    for(x=0; x<economica.length; x++){
        economica[x].style.backgroundColor = 'gray';
    }
})