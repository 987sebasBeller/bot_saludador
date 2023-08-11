function saludar(fecha){
    var saludo="";
    if(fecha>=0 && fecha<12){
        saludo="Buenos dias";
    }else if(fecha>=12 && fecha<18){
        saludo="Buenas tardes";
    }else{
        saludo="Buenas noches";
    }
    return saludo;
}
export default saludar;