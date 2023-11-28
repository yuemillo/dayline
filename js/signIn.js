// import { showMsg } from './messageHandler';
import axios, { isCancel, AxiosError } from 'axios';
import checkToken from './tokenHandler';
//elem
const errorMsg = document.querySelector('.signIn__errorMsg');
const submitBtn = document.querySelector('.signIn__submitBtn');
const email = document.querySelector('.signIn__userEmail');
const psd = document.querySelector('.signIn__userPsd');

let isValidUser = false;

console.log(checkToken());

//sent data to check is user exist
function checkUser(email,password){
    
    // axios.post('http://localhost:3000/posts',{content:'我成功了嗎',isfa: '並沒有'})
    // .then(res=>console.log(res.data))
    // .catch(err=>console.log(err))
}
// if input invalid or not exist
function callError(input){
    const msg = ''; 
    if(input) input.classList.add('signIn__input--invalid');
    errorMsg.classList.remove('d-none');
    errorMsg.textContent = msg;
}


//EventListener
submitBtn.addEventListener('click', (e) => {
	e.preventDefault();

	if (!email.value) return callError(email);
    if (!psd.value) return callError(psd)
    //是的話跳轉頁面
    if(isValidUser) location.href = './about.html';
});
[email,psd].forEach(input=>{
    input.addEventListener('input',function(e){
        this.classList.remove('signIn__input--invalid')
    })
})

