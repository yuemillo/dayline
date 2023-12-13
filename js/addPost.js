import { getItem } from './helper/StorageHandler';
import processAxios from './helper/processAxios';

//elem
const postImgElem = document.querySelector('#postImg');
const addPostImgInput = document.querySelector('#addPostImg');

const daylineTypeElem = document.querySelector('#daylineType');
const daylineDaysElem = document.querySelector('#daylineDays');

const postTitleElem = document.querySelector('#addPostTitle');
const postTextElem = document.querySelector('#addPostText');
const submitPostBtn = document.querySelector('#submitPostBtn');

// (async()=>{
//     // const result = processAxios('get',`600/users/${getItem('userId')}`,'',true);
// })()

// ../assets/images/doramon.jpg
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

submitPostBtn.addEventListener('click', function (e) {
	const data = {        
		content: {
			postImage: {base64:postTempImg},
			title : postTitleElem.value,
			textBody : postTextElem.value,
		},
        
	};
});
