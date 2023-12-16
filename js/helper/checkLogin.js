import { getItem } from "./StorageHandler";
import processAxios from "./processAxios";

export default async ()=>{

    const onLogin = document.querySelectorAll('.user--onLogin');
    const offLogin = document.querySelector('.user--offLogin');
    
    //檢查token
    const accessToken = getItem('token');
    const expire = getItem('token-expire');
    //token有過就登入 反之 顯示登入註冊
    if(accessToken && +expire > Date.now()){
        
        offLogin.style.display = 'none';

        const result = await processAxios('get',`600/users/${getItem('userId')}`,'',true);
        const { name , selfieImg } = result.data;

        const userPic = document.querySelectorAll('.userPic');
        const userName = document.querySelectorAll('.userPic + *');
        userPic.forEach(x=>x.src = selfieImg ? `data:image/png;base64,${selfieImg.img64}` : '../assets/images/Unknown_person.jpg');
        userName.forEach(x=>x.textContent = name);
    }
    else{
        onLogin.forEach(elem=>elem.classList.add('d-none'));
    }
};


//第一次登入要引導至個人頁面編輯資料(待續)