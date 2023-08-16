import abreviar from "./abreviador";
import saludar from "./saludador";
import traducir from "./traductor.js";
describe("Saludador" ,()=>{
    it("Deberia saludar a juan por la maniana",()=>{
        let idioma='es';
        let texto=`${saludar(11,idioma)}${abreviar(31,'M',idioma)}${'Juan'}`;
        expect(texto).toEqual("Buenos dias Sr Juan")
    }
    );
    it("Deberia saludar a juan por la tarde",()=>{
        let idioma='es';
        let texto=`${saludar(17,idioma)}${abreviar(31,'M',idioma)}${'Juan'}`;
        expect(texto).toEqual("Buenos tardes Sr Juan")
    }
    );
    it("Deberia saludar a juan por la noche sin ser Sr",()=>{
        let idioma='es';
        let texto=`${saludar(22,idioma)}${abreviar(15,'M',idioma)}${'Juan'}`;
        expect(texto).toEqual("Buenos noches Juan")
    }
    );
    it("Deberia saludar a ana por la maniana considerando su edad",()=>{
        let idioma='en';
        let texto=`${saludar(11,idioma)}${abreviar(10,'F',idioma)}${'ana'}`;
        expect(texto).toEqual("Good Morning ana")
    }
    );
    it("Deberia saludar a ana por la tarde",()=>{
        let idioma='en';
        let texto=`${saludar(16,idioma)}${abreviar(31,'F',idioma)}${'ana'}`;
        expect(texto).toEqual("Good afternoon Mrs ana")
    }
    );   it("Deberia saludar a ana por la noche",()=>{
        let idioma='en';
        let texto=`${saludar(21,idioma)}${abreviar(31,'F',idioma)}${'ana'}`;
        expect(texto).toEqual("Good evening Mrs ana")
    }
    );
}

);