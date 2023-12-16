import { getItem, setItem } from './helper/StorageHandler';
import { formateDate } from './helper/format';
import { messageHandler } from './helper/messageHandler';
import processAxios from './helper/processAxios';

//elem
const postImgElem = document.querySelector('#postImg');
const addPostImgInput = document.querySelector('#addPostImg');

const daylineTypeElem = document.querySelector('#daylineType');
const daylineDaysElem = document.querySelector('#daylineDays');

const postTitleElem = document.querySelector('#addPostTitle');
const postTextElem = document.querySelector('#addPostText');
const submitPostBtn = document.querySelector('#submitPostBtn');
let userPost = [];
(async () => {
	
	const result = await processAxios(
		'get',
		`600/users/${getItem('userId')}`,
		'',
		true
	);
	const { daylineType, daylineDay } = result.data;
	daylineDaysElem.textContent = daylineDay ? daylineDay + 1 : 1;
	daylineTypeElem.textContent = daylineType;

	userPost = result.data.posts;	
})();

let postTempImg = '';

addPostImgInput.addEventListener('change', function (e) {
	const file = e.target.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = function (e) {
			const base64 = e.target.result.split(',')[1];
			postTempImg = base64;
			postImgElem.src = e.target.result;
		};
		reader.readAsDataURL(file);
		if (postImgElem.classList.contains('d-none'))
			postImgElem.classList.remove('d-none');
	}
});

submitPostBtn.addEventListener('click', async function (e) {
	e.preventDefault();
	const currDate = new Date();
	//貼文內容
	const data = {
		content: {
			postImage: { img64: postTempImg },
			title: postTitleElem.value,
			textBody: postTextElem.value,
			daylineDay: +daylineDaysElem.textContent,
			daylineType: daylineTypeElem.textContent,
		},
		createDay: formateDate(currDate, 'yyyy/mm/dd'),
		userId: +getItem('userId'),
	};

	try {
		// //更新貼文內容
		const result = await processAxios('post', '664/posts', data, true);		
		//更新個人資訊(每日是否完成)
		const userResult = await processAxios(
				'patch',
				`600/users/${getItem('userId')}`,
				{	
						isDoneToday: true,
				updateDate: currDate.getTime(),
				daylineDay: +daylineDaysElem.textContent
			},
			true
		);
		// 跳轉該貼文頁面
		messageHandler('success','發布日更成功!','',{
			html: '<p class="fs-4">已成功發布貼文!</p>',
			timer : 1800,
			timerProgressBar : true,
			allowEnterKey : false,
			allowOutsideClick : false,
			allowEscapeKey : false,
			showConfirmButton : false
		})
		.then(()=>{
			location.href = `./post.html?id=${result.data.id}`;
		})
	} catch (err) {}
});
