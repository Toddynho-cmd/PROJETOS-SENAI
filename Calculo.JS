function calcular() {
     const select = document.getElementById("select");
     const numero1 = document.getElementById("numero1");
     const numero2 = document.getElementById("numero2");
     const resultado = document.getElementById("resultado");
     const msgerro = "Não é possível dividir por 0";
    
    console.log("select", select.value);
    console.log("num1", numero1.value);
    console.log("num2", numero2.value);

    if (!Number.isNaN(numero1.value) && !Number.isNaN(numero2.value)) {
        switch (select.value){
            case "adição":
            console.log ("num1 + num2", Number(numero1.value) + Number(numero2.value));
            resultado.value = Number(numero1.value) + Number(numero2.value);
        break;
            case "subtração":
            console.log ("num1 - num2", Number(numero1.value) - Number(numero2.value));
            resultado.value = Number(numero1.value) - Number(numero2.value);
        break;
            case "divisão":
            console.log ("num1 / num2", Number(numero1.value) / Number(numero2.value));
            resultado.value = Number(numero1.value) / Number(numero2.value);
            if (Number(numero2.value) == 0){
                console.error (msgerro);
                alert ("Não é possível dividir por 0");         
        }
        break;
            case "multiplicação":
            console.log ("num1 * num2", Number(numero1.value) * Number(numero2.value));
            resultado.value = Number(numero1.value) * Number(numero2.value);
        break;
        default:
            console.log ("não foi")
        }   
    }
}

function limpar() {
    numero1.value = null;
    numero2.value = null;
    resultado.value = null;
}