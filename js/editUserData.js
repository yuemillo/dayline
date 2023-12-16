import { getItem, removeItem, setItem } from './helper/StorageHandler';
import { messageHandler } from './helper/messageHandler';
import processAxios from './helper/processAxios';


//init
(() => getData())();

//遠端傳過來的copy
let userData = {
	// imageUrl: '../assets/images/cat_amazing.jpg',
	// name: '第八十七代貓皇(超pi)',
	// daylineType: '運動',
	// introduction:
	// 	'本喵乃這世上最高貴的存在，顫抖吧奴才們，不要懷疑就是在說你們這群鏟屎官',
};
//使用者上傳的image (base64版本)
let tempUserImage = '';
// 原使用者image
let originUserImage = '';
//elem
const selfie = document.querySelector('.userPic-selfie'); //大頭貼
const changeSelfieInput = document.querySelector('#changeSelfieInput');
const userName = document.querySelector('#userName');
const userDaylineType = document.querySelector('#userDaylineType');
const userIntroductionElem = document.querySelector('#userIntroduction');
const submitBtn = document.querySelector('#editUserSubmitBtn');
//先抓遠端資料
async function getData() {
	const data = await processAxios(
		'get',
		`600/users/${getItem('userId')}`,
		'',
		true
	);
	userData = data.data;
	renderData(userData);
}

getData();
//渲染資料
function renderData(data) {
	const { name, daylineType, introduction, selfieImg } = data;
	console.log(selfieImg);
	selfie.setAttribute(
		'src',
		selfieImg
			? `data:image/png;base64,${selfieImg.img64}`
			: '../assets/images/Unknown_person.jpg'
	);
	userName.value = name;
	userDaylineType.value = daylineType ?? '';
	userIntroductionElem.value = introduction ?? '';
	//first setting go focus
	const needfocusDaylineType = getItem('needfocusDaylineType');
	if (needfocusDaylineType) userDaylineType.focus();
	removeItem('needfocusDaylineType');
}

//大頭貼預覽
changeSelfieInput.addEventListener('change', function (e) {
	const file = e.target.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = function (e) {
			const base64 = e.target.result.split(',')[1];
			//保存
			if (selfie.src !== '') originUserImage = selfie.src;
			tempUserImage = base64;
			
			selfie.src = e.target.result;
		};
		reader.readAsDataURL(file);

	}
});

submitBtn.addEventListener('click', async (e) => {
	e.preventDefault();
	// 驗證
	// 組資料
	const data = {
		name: userName.value,
		selfieImg: {img64 : tempUserImage},
		daylineType: userDaylineType.value,
		introduction: userIntroductionElem.value,
		updateDate: Date.now(),
	};
	for (let key in data) {
		if (userData[key] === data[key]) delete data[key];
	}
	console.log(data);
	if (data.updateDate !== userData.updateDate) setItem('isNewUser', false);
	// 送資料
	const result = await processAxios(
		'patch',
		`600/users/${getItem('userId')}`,
		data,
		true
	);
	if (result)
		messageHandler('success', '更新成功', '已成功更新個人資訊٩(๑•̀ω•́๑)۶');
});
