import Swal from 'sweetalert2'
import { async } from 'validate.js';




export async function messageHandler(icon,title,text){
  console.log(text)
Swal.fire({
  customClass: {   
    popup: "swal__popup",
    confirmButton: "swal__confirmButton"
  },
  title,
  icon, //success ,error ,warning ,info ,question
  text  
});
}

export async function errorHandler(err){
  const { msg , status } = err;


  Swal.fire({
    icon:'error',
    title: `錯誤:${status}`,
    text : msg
  })
}