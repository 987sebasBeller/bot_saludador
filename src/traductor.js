import translate from 'translate';
const translator =require('translate');
async function traducir(str,translateTo){
  try{
  translator.engine='libre';
    const translated_string = await  translate(str, {
      from: 'es', 
      to: translateTo
    });
    return translated_string;
  }catch(error){
    console.log(error)
  }
}

export default traducir;
