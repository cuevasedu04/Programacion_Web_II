    var dato1=Number(prompt("Ingresa Numero 1: "));
    var dato2=Number(prompt("Ingresa Numero 2: "));
    var dato3=Number(prompt("Ingresa Numero 3: "));

        if(dato1>dato2 && dato1>dato3){
            console.log("El número mayor es el 1 y es: " + dato1);
        }else if(dato2>dato1 && dato2>dato3){
            console.log("El número mayor es el segundo y es: " + dato2);
        }else if(dato3>dato1 && dato3>dato2){
            console.log("El número mayor es el 3 y es : " + dato3);
        }else if(dato1==dato2 && dato2==dato3){
            console.log("Los tres números son iguales")
        }else if(dato1==dato2){
            console.log("Los números son iguales")
        }else if(dato1==dato3){
            console.log("Los números 1 y 3 son iguales")
        }else if(dato2==dato3){
            console.log("Los números 2 y 3 son iguales")
        }else{
            console.log("Los números son invalidos")
        }





    
        
