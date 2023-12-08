import Swal from "sweetalert2";

async function deletePost(){
    const confirm = await Swal.fire({
        icon: 'info',
        iconColor: "hsl(0,75%,43%)",
        title: '注意!',
        allowOutsideClick: "false",
        text:"刪除貼文將會終止日更記錄，確定要刪除?" + '\n' + '當日日更，需再重新完成',
        buttonsStyling: false,
        customClass:{
            confirmButton:'btn px-5 btn-danger me-6',
            denyButton:'btn px-5 btn-outline-secondary'
        },
        showDenyButton: true,
        confirmButtonText : "刪除",
        denyButtonText : "取消",
    })
}

deletePost();