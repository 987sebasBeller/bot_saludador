import abreviar from "./abreviador";
import saludar from "./saludador";
const button = document.querySelector("#btn");
const div=document.querySelector("#saludo");
const cbx_gender=document.querySelector("#gender");
const name_input = document.querySelector("#name_input");
const age_input= document.querySelector("#age_input");
button.addEventListener("click", ()=>{
  let fecha=new Date();
  age= Number.parseInt(age_input.value);
  hora=Number.parseInt(fecha.getHours());
  div.innerHTML=`<p>${saludar(hora)} ${abreviar(age,cbx_gender.value)} ${name_input.value} 😃!!</p>`;
});
