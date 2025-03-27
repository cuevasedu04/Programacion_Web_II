let numeroMaquina = Math.floor(Math.random()*(10-1)+1);
    console.log(numeroMaquina);
let numeroUser= parseInt(prompt("Ingresa un numero del 1 al 10"));

let vidas=5;

while(numeroMaquina !== numeroUser && vidas >1 ){
    vidas--;
    numeroUser= parseInt(prompt("El numero no es correcto. Te quedan:"+vidas));
}

if(numeroMaquina == numeroUser){
    alert("Ganaste, el número era: " + numeroMaquina);
}else{
    alert("No le sabes hijo, el numero era: "+numeroMaquina)
}