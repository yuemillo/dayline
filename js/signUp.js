import validate from 'validate.js';
import processAxios from './helper/processAxios';
import { errorHandler, messageHandler } from './helper/messageHandler';

// {
// 	"id": 1,
// 	"name": "胡迪尼",
// "selfieImg" : "",
// "introduction" : "大魔術師穿越現代幫我做專題",
// 	"email": "houdini@test.com",
// 	"password": "test20406080",
// 	"daylineType": "寫程式",
// 	"daylineDays": 31,
// 	"isDoneToday": false,
// 	"historyDaylineStatus": [
// 		{
// 			"type": "魔術",
// 			"days": 3,
// 			"endDate": "1926/10/31",
// 			"posts": ["#1", "#2", "#3"]
// 		}
// 	],
// 	"achievement": [
// 		{
// 			"icon": "sliver",
// 			"status": "連續30天不中斷日更",
// 			"title": "後起之秀"
// 		},
// 		{
// 			"icon": "diamond",
// 			"status": "人氣超過10000",
// 			"title": "超級巨星"
// 		}
// 	],
// "createAt": ""
// }

const signUpBtn = document.querySelector('#signUpBtn');
//驗證表單
signUpBtn.addEventListener('click', (e) => {
	e.preventDefault();
	//驗證格式
	const constraints = {
		name: {
			presence: {
				message: '^暱稱必填',
				allowEmpty: false,
			},
		},
		email: {
			email: {
				message: '^信箱格式不正確',
			},
			presence: {
				message: '^信箱必填',
			},
		},
		password: {
			presence: {
				allowEmpty: false,
				message: '^密碼必填',
			},
		},
	};
	//被驗證的資料
	const obj = {
		name: document.querySelector('#user_name').value,
		email: document.querySelector('#user_email').value,
		password: document.querySelector('#user_password').value,
	};
	// validate(都有通過會是undefined)
	const isErr = validate(obj, constraints) ?? false;

	if(isErr) Object.keys(isErr).forEach(key=> showErr(key,isErr[key]))
	else submitForm(obj);
});

async function submitForm(data) {
	try {
		const result = await processAxios('post', 'signup', data);
		console.log(result);
	} catch (err) {
		const { message: status } = err;
		const { data: msg } = err.response;
		//有相同信箱存在 Email already exists
		if (msg === 'Email already exists') showErr("email",'該信箱已經被註冊了');
	}
}

function showErr(target,msg) {
	const elem = document.getElementById(`user_${target}`).nextElementSibling;
	elem.textContent = msg;
	elem.style.display = 'block';
}

const inputs = document.querySelectorAll('input.form-control');
//輸入後清空錯誤反饋
inputs.forEach((input) =>
	input.addEventListener('input', function (e) {
		const pElem = this.nextElementSibling;
		if (pElem.textContent !== '') {
			pElem.textContent = '';
			pElem.style.display = 'none';
		}
	})
);
