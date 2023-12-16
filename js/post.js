import processAxios from "./helper/processAxios";

// async function deletePost(){
//     const confirm = await Swal.fire({
//         icon: 'info',
//         iconColor: "hsl(0,75%,43%)",
//         title: '注意!',
//         allowOutsideClick: "false",
//         text:"刪除貼文將會終止日更記錄，確定要刪除?" + '\n' + '當日日更，需再重新完成',
//         buttonsStyling: false,
//         customClass:{
//             confirmButton:'btn px-5 btn-danger me-6',
//             denyButton:'btn px-5 btn-outline-secondary'
//         },
//         showDenyButton: true,
//         confirmButtonText : "刪除",
//         denyButtonText : "取消",
//     })
// }

// deletePost();
let content = {};
(async ()=>{
    const postId = location?.search?.split('=')[1];
    if(postId){
        try{
            const getData = await processAxios('get',`posts/${postId}`);
            console.log(getData)
            content = getData.data.content;


            renderPost(content);
        }
        catch(err){

        }
    }
})()





const postImageElem = document.querySelector('#postImg');
const daylineDayElem = document.querySelector('#daylineDays');
const titleElem = document.querySelector('#post__title');
const textBodyElem = document.querySelector('#post__textBody');

function renderPost(post){
    console.log(post)
    const {daylineDay,title,textBody} = post;

    daylineDayElem.textContent = daylineDay;
    titleElem.textContent = title;
    textBodyElem.textContent = textBody;
    
    const img = post.postImage.img64 ? `data:image/png;base64,${post.postImage.img64}` : "../assets/images/post_tiger.jpg";
    postImageElem.src = img;
}