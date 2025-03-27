/* let nombre = "Eduardo";
console.log(`Tu nombre es: 
    ${nombre}
    Hello
    `)

    console.log(`Tu nombre es: ${nombre.toUpperCase()}` )
  */
    // Operador ternario: un if que valida la expresion valida del lado izquiero y el falso del lado derecho

let numero1 = prompt("Ingresa el número 1: " )
let numero2 = prompt("Ingresa el número 2: ")

    // suma
    function suma(n1, n2) {
        return parseInt(n1) + parseInt(n2);
        
    }
    
    var resultado = suma(numero1, numero2);
    console.log(`La suma es: ${resultado}` );

     // resta
     function resta(n1, n2) {
        return parseInt(n1) - parseInt(n2);
        
    }

     // multiplicación
     function multiplicación(n1, n2) {
        return parseInt(n1) * parseInt(n2);
        
    }

    // modulo
     function modulo(n1, n2) {
        return parseInt(n1) % parseInt(n2);
        
    }
    
    console.log(`La suma es: ${suma(numero1,numero2)}` );
    console.log(`La resta es: ${resta(numero1,numero2)}` );
    console.log(`La multiplicacion es: ${multiplicación(numero1,numero2)}` );
    console.log(`El modulo es: ${modulo(numero1,numero2)}` );


    let opcion = parseInt( prompt(`
            Operacion: 
            1.- Suma
            2.- Resta
        `));
        switch(opcion){
            case 1:
                console.log(`La suma es: ${suma(numero1,numero2)}` );
            break;
            case 2:
                console.log(`La resta es: ${resta(numero1,numero2)}` );
            break
            case 3:
                console.log(`La multiplicacion es: ${multiplicación(numero1,numero2)}` );
            break;
            case 4:
                console.log(`El modulo es: ${modulo(numero1,numero2)}` );
            break;
            default:
                console.log(`Error` );

            
 
        }

    // suma resta mult modulo usando template string
    
   // primero el menu de qué quieres hacer suma resta etc, luego pida los datos y despues la respuesta
// hacer tambien con while