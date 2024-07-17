

function converter(){
    let tUsuario = document.getElementById("tUsuario").value;
    let temp = document.getElementById("temp").value;
    let result = document.getElementById("result");

    if(temp == "CF"){
        result.innerHTML = CF(tUsuario);
    }else {
        result.innerHTML = FC(tUsuario);
    }

}

function CF(t){
    return (t * 1.8 + 32) + "° F";

}

function FC(t){
    return ((t - 32 ) / 1.8) + "° C";
}