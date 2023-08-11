import abreviar from "./abreviador";
const button = document.querySelector("#btn");
const div=document.querySelector("#saludo");
const cbx_gender=document.querySelector("#gender");
const name_input = document.querySelector("#name_input");
const age_input= document.querySelector("#age_input");
button.addEventListener("click", ()=>{
  age= Number.parseInt(age_input.value);
  div.innerHTML=`<p>HOLA ${abreviar(age,cbx_gender.value)} ${name_input.value} 😃!!</p>`;
});
