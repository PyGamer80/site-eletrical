function capturar(){
    let pow = document.getElementById("texto1").value;
    let tension = document.getElementById("texto2").value;
    let amper = document.getElementById("texto3").value;
    let resist = document.getElementById("texto4").value;
    let w = "";
    let t = "";
    let a = "";
    let r = "";
    // Calculo potência
    if(pow.value == undefined && tension.value == undefined){
        w = parseInt(resist) * Math.pow(parseInt(amper), 2);
        pow = document.getElementById("texto1").value = w;
        t = parseInt(resist) * parseInt(amper);
        tension = document.getElementById("texto4").value = t;
    }
    if(pow.value == undefined && amper.value == undefined){
        w = mat.pow(parseInt(tension)) / parseInt(resist);
        pow = document.getElementById("texto1").value = w;
    }
    if(pow.value == undefined && resist.value == undefined){
        w = parseInt(tension) * parseInt(amper);
        pow = document.getElementById("texto1").value = w;
    }
    // Calculo corrente
    if(amper.value == undefined && tension.value == undefined){
        a = Math.sqrt(parseInt(pow) / parseInt(resist));
        amper = document.getElementById("texto3").value = a;
    }
    if(amper.value == undefined && resist.value == undefined){
        a = parseInt(pow) / parseInt(tension);
        amper = document.getElementById("texto3").value = a;
    }
    if(amper.value == undefined && pow.value == undefined){
        a = parseInt(tension) / parseInt(resist);
        amper = document.getElementById("texto3").value = a;
    }
    // Calculo de tensão
    if(tension.value == undefined && pow == undefined){
        
    }
    if(tension.value == undefined && resist == undefined){
        t = parseInt(pow) / parseInt(amper);
        tension = document.getElementById("texto4").value = t;
    }
    if(tension.value == undefined && amper == undefined){
        t = mat.sqrt(parseInt(pow) * parseInt(resist));
        tension = document.getElementById("texto4").value = t;
    }
    // Calculo de resistencia
    if(resist.value == undefined && pow == undefined){
        r = parseInt(tension) / parseInt(amper);
        resist = document.getElementById("texto4").value = r;
    }
    if(resist.value == undefined && tension == undefined){
        r = parseInt(pow) / Math.pow(parseInt(amper), 2);
        resist = document.getElementById("texto4").value = r;
    }
    if(resist.value == undefined && amper == undefined){
        r = math.pow(parseInt(tension), 2) / parseInt(pow);
        resist = document.getElementById("texto4").value = r;
    }
    console.log(pow, tension, amper, resist, w, t, a, r)
    
} 