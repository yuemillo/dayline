import Swal from 'sweetalert2'




export function showMsg(icon,title,text){
  
Swal.fire({
  customClass: {   
    popup: "swal__popup",
    confirmButton: "swal__confirmButton"
  },
  // title: "1246",
  // icon: "error",
  // // iconColor: 'gold',
  text: "Something went wrong!",  
});
}

