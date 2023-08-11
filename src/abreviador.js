function abreviar(genero){
    var abreviacion="";
    if (genero=="M"){
        abreviacion="Sr";
    }
    else if(genero=="F"){
        abreviacion="Sra";
    }
    return abreviacion;
}
export default abreviar;