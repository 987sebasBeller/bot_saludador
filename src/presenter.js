const button = document.querySelector("#btn")
const div=document.querySelector("#saludo")
button.addEventListener("click", ()=>{
  var name_input = document.querySelector("#name_input")
  div.innerHTML=`<p>HOLA ${name_input.value} 😃!!</p>`
});
