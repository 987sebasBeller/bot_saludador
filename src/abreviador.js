function abreviar(edad,genero,idioma){
    let diccionario={};
    diccionario['es']="Sr ";
    diccionario['en']="Mr ";
    if (edad<30 || isNaN(edad)){
        return "";
    }
    else if(genero=="F"){
        diccionario['es']="Sra ";
        diccionario['en']="Mrs ";
        
    }
    return diccionario[idioma];
}
export default abreviar;