import abreviar from "./abreviador";
const button = document.querySelector("#btn");
const div=document.querySelector("#saludo");
const cbx_gender=document.querySelector("#gender");
const name_input = document.querySelector("#name_input");
button.addEventListener("click", ()=>{
  div.innerHTML=`<p>HOLA ${abreviar(cbx_gender.value)} ${name_input.value} 😃!!</p>`;
});
