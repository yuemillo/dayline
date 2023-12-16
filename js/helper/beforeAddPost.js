import { getItem, setItem } from './StorageHandler';
import { errorHandler, messageHandler } from './messageHandler';

export default function beforeAddPost() {

	const addPostBtn = document.querySelector('#addPostBtn');

	addPostBtn.addEventListener('click', async () => {
		//檢查日更項目(註冊完使用者還未選定項目)
		const isNewUser = getItem('isNewUser');
        try{
            if (isNewUser === 'true') {
                const result = await messageHandler('info', '尚未選擇類型', "", {
                    html: `<p>親，你還沒決定你的日更類型喔!<br><br>是否要現在就去編輯?</p> `,
                    allowOutsideClick: 'false',
                    buttonsStyling: false,
                    customClass: {
                        title:"fs-3",
                        confirmButton: 'btn px-5 btn-success me-6',
                        denyButton: 'btn px-5 btn-outline-secondary',
                    },
                    showDenyButton: true,
                    confirmButtonText: '馬上去',
                    denyButtonText: '再等等',
                });
    
                if(result.isConfirmed){
                    setItem('needfocusDaylineType',true);
                    location.href = './userEdit.html';
                }
            }
            else location.href = './addPost.html'
        }
		catch(err){
            const error = {
                msg : "Something go wrong!",
                status: "OOps!"
            }

            errorHandler(error)
        }
	});
}
