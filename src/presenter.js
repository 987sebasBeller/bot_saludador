import abreviar from "./abreviador";
import saludar from "./saludador";
import traducir from "./traductor";
const button = document.querySelector("#btn");
const div=document.querySelector("#saludo");
const cbx_gender=document.querySelector("#gender");
const name_input = document.querySelector("#name_input");
const age_input= document.querySelector("#age_input");
const cbx_language=document.querySelector("#lenguage");
button.addEventListener("click", async()=>{
  let fecha=new Date();
  age= Number.parseInt(age_input.value);
  hora=Number.parseInt(fecha.getHours());
  texto=`${saludar(hora)} ${abreviar(age,cbx_gender.value)} ${name_input.value}` ;
  texto=await traducir(texto,'en');
  div.innerHTML=`<p>${texto} 😃!!</p>`;
});
