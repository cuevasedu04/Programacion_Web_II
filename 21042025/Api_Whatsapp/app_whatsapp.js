function generarqr(){
    let input1 = document.getElementById("input1").value.trim();
    let input2 = document.getElementById("input2").value.trim();
    let textoConcatenado = input1+","+input2+","
    console.log(textoConcatenado);
    if(textoConcatenado === ",,"){
        alert("Requiere llenar los campos");
    }else{
        let numero=input1;
        let mensaje=input2;
        let urlWhatsapp = ` https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensaje)}`;

        window.open(urlWhatsapp, '_blank');
    }
}

//Pedir numero de celular y mensaje, cuando de a enviar que mande a la API de
//whatsapp para mandar el mensaje
//que mande a la pagin