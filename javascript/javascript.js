function calcular(){
    
    var pow = document.getElementById("texto1").value;
    var tension = document.getElementById("texto2").value;
    var corrent = document.getElementById("texto3").value;
    var resist = document.getElementById("texto4").value;
    var w = parseInt(pow);
    var t = parseInt(tension);
    var i = parseInt(corrent);
    var r = parseInt(resist);
    console.log(w, t, i, r)

    if(isNaN(w) && isNaN(t)){
        w = r * Math.pow(i, 2) 
        t = r * i
    }
    else{
    if(isNaN(w) && isNaN(i)){
        w = Math.pow(t, 2)/ r
        i = t / r
        }
    else{
        if(isNaN(w) && isNaN(r)){
        w = i * t
        r = t / i
    }
    else{
        if(isNaN(t) && isNaN(i)){
        t = Math.sqrt(w * r) 
        i = Math.sqrt(w / r)
    }
    else{
        if(isNaN(i) && isNaN(r)){
        i = w / t
        r = Math.pow(t, 2) / w
    }
    }
    }
    }
    }

    document.getElementById("texto1").value = w
    document.getElementById("texto2").value = t
    document.getElementById("texto3").value = i
    document.getElementById("texto4").value = r
    console.log(w, t, i, r)
}
