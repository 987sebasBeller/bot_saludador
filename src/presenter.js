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
  let age= Number.parseInt(age_input.value);
  let hora=Number.parseInt(fecha.getHours());
  let texto=`${saludar(hora)} ${abreviar(age,cbx_gender.value)} ${name_input.value}` ;
  texto=await traducir(texto,cbx_language.value);
  div.innerHTML=`<p>${texto} 😃!!</p>`;
});
