import axios from "axios";
import validate from "validate.js";


const signUpBtn = document.querySelector('#signUpBtn');


//驗證表單
signUpBtn.addEventListener('click', (e) => {
	e.preventDefault();

	const constraints = {
		姓名: {
			presence: {
				message: '^姓名必填',
				allowEmpty: false,
			},
		},
		// 電話: {
		//   presence: {
		//     message: "^電話必填"
		//   },
		//   numericality: {
		//     message: "^請輸入正確的電話格式"
		//   },
		//   length: {
		//     minimum: 8,
		//     message: "^電話長度至少需8位數"
		//   }
		// },
		email: {
			email: {
				message: '^信箱格式不正確',
			},
			presence: {
				message: '^信箱必填',
			},
		},
		密碼: {
			presence: {
				allowEmpty: false,
				message: '^密碼必填',
			},
		},
	};


    const obj = {
        姓名: document.querySelector("#user_name").value,
        // 電話: document.querySelector("#customerPhone").value,
        Email: document.querySelector("#user_email").value,
        密碼: document.querySelector("#user_password").value
      };
    
      // validate(都有通過會是undefined)
      const isErr = validate(obj, constraints) ?? false;

    console.log(isErr)
});



async function submitForm(data){
    // const result = await axios.post()
}