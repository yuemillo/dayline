import processAxios from './helper/processAxios';

const userData = {
	imageUrl: '../assets/images/cat_amazing.jpg',
	name: '第八十七代貓皇(超pi)',
	daylineType: '運動',
	introduction:
		'本喵乃這世上最高貴的存在，顫抖吧奴才們，不要懷疑就是在說你們這群鏟屎官',
};

//elem
const selfie = document.querySelector('.userPic-selfie'); //大頭貼
const changeSelfieInput = document.querySelector('#changeSelfieInput');
const userName = document.querySelector('#userName');
const userDaylineType = document.querySelector('#userDaylineType');
const userIntroductionElem = document.querySelector('#userIntroduction');
const submitBtn = document.querySelector('#editUserSubmitBtn');
//先抓遠端資料

//渲染資料
function renderData(data) {
	selfie.setAttribute('src', data.imageUrl);

	const { name, daylineType, introduction } = data;

	userName.value = name;
	userDaylineType.value = daylineType;
	userIntroductionElem.value = introduction;
}


renderData(userData);

submitBtn.addEventListener('click',async ()=>{
    // 驗證
    // 組資料
    const finalData = {
        ...userData,
        updateDate: new Date().getTime()
    }
    // 送資料
    // processAxios('post',)
})