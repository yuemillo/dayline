import Swal from 'sweetalert2'
import { async } from 'validate.js';




export async function messageHandler(icon,title,text,obj = {}){
  const result = await Swal.fire({
  customClass: {   
    popup: "swal__popup",
    confirmButton: "swal__confirmButton"
  },
  title,
  icon, //success ,error ,warning ,info ,question
  text ,
  ...obj 
  });
  return result
}

export async function errorHandler(err,obj = {}){
  const { msg , status } = err;


  Swal.fire({
    icon:'error',
    title: status,
    text : msg,
    ...obj
  })
}