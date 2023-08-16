function saludar(fecha=new Date().getHours(),idioma){
    let diccionario={};
    if(fecha>=0 && fecha<12){
        diccionario['es']="Buenos dias ";
        diccionario['en']="Good Morning ";
    }else if(fecha>=12 && fecha<18){
        diccionario['es']="Buenos tardes ";
        diccionario['en']="Good afternoon ";  
    }
    else{
        diccionario['es']="Buenos noches ";
        diccionario['en']="Good evening ";  
    }
    return diccionario[idioma];
}
export default saludar;