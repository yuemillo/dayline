import Swal from 'sweetalert2'




export  function showMsg(){
    Swal.fire({
        icon: "error",
        title: "想吃瓜嗎",
        text: "Something went wrong!",
        // backdrop: `hsla(0,31%,81%,.61) no-repeat`,
        showDenyButton: true,
        showCancelButton: true,
      });
}