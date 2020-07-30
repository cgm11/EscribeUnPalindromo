var btnGuardar = document.getElementById("btn-guardar");

btnGuardar.addEventListener("click", () => {
    let palindromo = document.getElementById("palindromo").value;
    let mensaje = document.getElementById("intento");
    let tabla = document.getElementById("tabla");
    let resultado = document.getElementById("resultado");
    let revision = "";
    var datos = "";
    mensaje.innerHTML = `Tu frase o palabra fue: ${palindromo}`;
    palindromo = palindromo.replace(/ /g, "");
    for(var i = palindromo.length; 0 < i; i--){
        datos = datos + `<td>${palindromo[i-1]}</td>`;
        revision = revision + palindromo[i-1];
    }
    tabla.innerHTML = datos;

    if(palindromo === revision){
        resultado.innerHTML = "Correcto!";
    }else{
        resultado.innerHTML = "Fallaste :(";
    }

})