alert("bem vindos ao jogo secreto?");
let numeroSecreto = 6;
let chute = prompt("escolha um número entre 1 a 10");
let tentativas =1;
while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 a 10?");

if(chute== numeroSecreto){
    console.log("isso ai vc acertou! com ${tentativas}");
} else{
    if(numeroSecreto> chute){
        alert("voce é burro!! o numero é maior que ${chute}");
    }else{
        alert("voce é burro!! o numero é menor que ${chute}");
    }
    
} tentativas++;
}
if (tentativas> 1){
    alert("isso mesmo suin otário, finalmente!!!! com 1 tentativa");
}else{
    alert("isso mesmo suin otário, finalmente!!!! com ${tentativas}");
}