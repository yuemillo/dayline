import { setItem } from './helper/StorageHandler';
import processAxios from './helper/processAxios';
//elem
const errorMsg = document.querySelector('.signIn__errorMsg');
const submitBtn = document.querySelector('.signIn__submitBtn');
const email = document.querySelector('.signIn__userEmail');
const psd = document.querySelector('.signIn__userPsd');


submitBtn.addEventListener('click', async (e) => {
	e.preventDefault();
	//如果為空值返回
	if (!email.value || !psd.value) return;
	//有值的話丟去檢查
	try {
		const result = await processAxios('post', 'signin', {
			email: email.value,
			password: psd.value,
		});
		//是的話跳轉頁面
		if (result.status === 200) {
			setItem('userId', result.data.user.id);
			setItem('token', result.data.accessToken);
			setItem('token-expire', Date.now() + 3600000);

			location.href = './index.html';
		}
	} catch (err) {
		console.log(err);
		const error = err.response.data;
		//信箱格式錯誤
		if (error === 'Email format is invalid') showError(email, '信箱格式錯誤!!');
		//信箱不存在
		if (error === 'Cannot find user') showError(email, '此帳號不存在!!');
		//密碼錯誤
		if (error === 'Incorrect password' || error === 'Password is too short')
			showError(psd, '密碼錯誤!!');
	}
});

// 錯誤反饋
function showError(input, msg) {
	if (input) input.classList.add('signIn__input--invalid');
	errorMsg.classList.remove('d-none');
	errorMsg.textContent = msg;
}

//錯誤反饋清除
[email, psd].forEach((input) => {
	input.addEventListener('input', function (e) {
		if (this.classList.contains('signIn__input--invalid')) {
			this.classList.remove('signIn__input--invalid');
			errorMsg.classList.add('d-none');
		}
	});
});
