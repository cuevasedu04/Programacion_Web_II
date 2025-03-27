let opcion;

while (opcion !== 0) {
    opcion = parseInt(prompt(`
    Operación: 
    1.- Suma
    2.- Resta
    3.- Multiplicación
    4.- Módulo
    0.- Salir
`));

    if (opcion === 0) {
        alert("Saliendo del programa...");
        break;
    }

    let numero1 = prompt("Ingresa el número 1: ");
    let numero2 = prompt("Ingresa el número 2: ");

    // Función suma
    function suma(n1, n2) {
        return parseInt(n1) + parseInt(n2);
    }

    // Función resta
    function resta(n1, n2) {
        return parseInt(n1) - parseInt(n2);
    }

    // Función multiplicación
    function multiplicacion(n1, n2) {
        return parseInt(n1) * parseInt(n2);
    }

    // Función módulo
    function modulo(n1, n2) {
        return parseInt(n1) % parseInt(n2);
    }

    switch (opcion) {
        case 1:
            alert(`La suma de ${numero1} más ${numero2} es: ${suma(numero1, numero2)}`);
            break;
        case 2:
            alert(`La resta de ${numero1} menos ${numero2} es: ${resta(numero1, numero2)}`);
            break;
        case 3:
            alert(`La multiplicación de ${numero1} por ${numero2} es: ${multiplicacion(numero1, numero2)}`);
            break;
        case 4:
            alert(`El módulo de ${numero1} entre ${numero2} es: ${modulo(numero1, numero2)}`);
            break;
        default:
            alert(`Error`);
    }
}
