function abreviar(edad,genero){
    var abreviacion="Sr";
    console.log(edad);
    if (edad<30 || isNaN(edad)){
        abreviacion=" ";
    }
    else if(genero=="F"){
        abreviacion="Sra";
    }
    return abreviacion;
}
export default abreviar;