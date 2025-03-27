let numero1 = prompt("Ingresa el número 1: " )
let numero2 = prompt("Ingresa el número 2: ")

    // suma
    function suma(n1, n2) {
        return parseInt(n1) + parseInt(n2);
        
    }

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

