import axios from 'axios';
import { validate } from 'validate.js';

export default function () {
	const searchInput = document.querySelectorAll('.js-search-input');

	searchInput.forEach((input) => {
		input.addEventListener('input', function (e) {
			const isError =
				validate(
					{ search: this.value },
					{ search: { presence: { allowEmpty: false } }}
				) ?? false;
			if (isError) return;

			//送資料檢查有沒有符合的
		});
		input.addEventListener('keydown', function (e) {
			e.preventDefault();
            //送出
            if(e.key === 'Enter'){

            }
		});
	});
	// const doThrottle = await (value) =>
	//節流
	function throttle(callback, delay = 1000) {
		let temp = null;
		let timer = null;
		return (value) => {
			temp = value;
			//下面有計時器的時候不做任何事件
			if (timer) return;
			//若沒有計時器了-------------------------

			//執行
			callback(temp);
			//清除暫存值
			temp = null;

			//重開一個計時器
			timer = setTimeout(() => {
				//時間到timer會被清除
				timer = null;
				if (temp) callback(temp);
			}, delay);
		};
	}
}
