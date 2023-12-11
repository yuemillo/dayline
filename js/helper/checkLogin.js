export default ()=>{

    const onLogin = document.querySelectorAll('.user--onLogin');
    const offLogin = document.querySelector('.user--offLogin');

    //檢查token
    
    //token有過就登入 反之 顯示登入註冊
    if(true){
        offLogin.style.display = 'none';
    }
    else{
        onLogin.forEach(elem=>elem.classList.add('d-none'));
    }
};


//第一次登入要引導至個人頁面編輯資料(待續)