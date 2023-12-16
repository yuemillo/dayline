
	const newsListBtn01 = document.querySelector('#newsListBtn01');
	const newsListBtn02 = document.querySelector('#newsListBtn02');
	const newsListBtn03 = document.querySelector('#newsListBtn03');
	const newsListBtn04 = document.querySelector('#newsListBtn04');
	const newsListBtn05 = document.querySelector('#newsListBtn05');
	const newsListBtn06 = document.querySelector('#newsListBtn06');
	const newsBigPic = document.querySelector('.newsBigPic');
	const newsUserInfoTitle = document.querySelector('.newsUserInfoTitle');
	const userTag01 = document.querySelector('#userTag01');
	const userTag02 = document.querySelector('#userTag02');
	const userNamePic = document.querySelector('.userNamePic');

	newsListBtn01.addEventListener('click', (e) => {
		e.preventDefault();
		let renderNewsBigPic01 = `<img src="/assets/images/newsbigpic01.jpg" alt="" class="newsPic01">`;
		newsBigPic.innerHTML = renderNewsBigPic01;
		newsUserInfoTitle.textContent = `我要天涯海角的跑下去`;
		userTag01.textContent = `莫莫無名`;
		userTag02.textContent = `平民`;
		userNamePic.innerHTML = `<img src="/assets/images/unsplash_lAKbS9nUMc4.jpg" alt="" class="userPic me-3" id="newsUserPic">
        <p class="fs-6 text-light ms-2 mb-0">林一杰</p>`;
	});
	newsListBtn02.addEventListener('click', (e) => {
		e.preventDefault();
		let renderNewsBigPic02 = `<img src="/assets/images/newsbigpic02.jpg" alt="" class="newsPic02">`;
		newsBigPic.innerHTML = renderNewsBigPic02;
		newsUserInfoTitle.textContent = `我住的城市每日夕陽`;
		userTag01.textContent = `受歡迎`;
		userTag02.textContent = `創作家`;
		userNamePic.innerHTML = `<img src="/assets/images/unsplash_aOPeNWjt03k.jpg" alt="" class="userPic me-3" id="newsUserPic">
        <p class="fs-6 text-light ms-2 mb-0">魏得剩</p>`;
	});
	newsListBtn03.addEventListener('click', (e) => {
		e.preventDefault();
		let renderNewsBigPic03 = `<img src="/assets/images/newsbigpic03.jpg" alt="" class="newsPic03">`;
		newsBigPic.innerHTML = renderNewsBigPic03;
		newsUserInfoTitle.textContent = `最潮的街頭塗鴉`;
		userTag01.textContent = `莫莫無名`;
		userTag02.textContent = `草民`;
		userNamePic.innerHTML = `<img src="/assets/images/unsplash_lAKbS9nUMc4443.jpg" alt="" class="userPic me-3" id="newsUserPic">
        <p class="fs-6 text-light ms-2 mb-0">彼得潘</p>`;
	});
	newsListBtn04.addEventListener('click', (e) => {
		e.preventDefault();
		let renderNewsBigPic04 = `<img src="/assets/images/newsbigpic04.jpg" alt="" class="newsPic04">`;
		newsBigPic.innerHTML = renderNewsBigPic04;
		newsUserInfoTitle.textContent = `手寫的溫度`;
		userTag01.textContent = `眾所矚目`;
		userTag02.textContent = `創作之王`;
		userNamePic.innerHTML = `<img src="/assets/images/unsplash_lAKbS9nUMc44466.jpg" alt="" class="userPic me-3" id="newsUserPic">
        <p class="fs-6 text-light ms-2 mb-0">王羲之</p>`;
	});
	newsListBtn05.addEventListener('click', (e) => {
		e.preventDefault();
		let renderNewsBigPic05 = `<img src="/assets/images/newsbigpic05.jpg" alt="" class="newsPic05">`;
		newsBigPic.innerHTML = renderNewsBigPic05;
		newsUserInfoTitle.textContent = `一日一漫畫`;
		userTag01.textContent = `受歡迎`;
		userTag02.textContent = `創作家`;
		userNamePic.innerHTML = `<img src="/assets/images/unsplash_lAKbS9nUMc42455.jpg" alt="" class="userPic me-3" id="newsUserPic">
        <p class="fs-6 text-light ms-2 mb-0">鳥三民</p>`;
	});
	newsListBtn06.addEventListener('click', (e) => {
		e.preventDefault();
		let renderNewsBigPic06 = `<img src="/assets/images/newsbigpic06.jpg" alt="" class="newsPic06">`;
		newsBigPic.innerHTML = renderNewsBigPic06;
		newsUserInfoTitle.textContent = `為妳寫詩`;
		userTag01.textContent = `眾所矚目`;
		userTag02.textContent = `創作家`;
		userNamePic.innerHTML = `<img src="/assets/images/unsplash_aOPeNWjt03kdfd.jpg" alt="" class="userPic me-3" id="newsUserPic">
        <p class="fs-6 text-light ms-2 mb-0">蘇東坡</p>`;
	});

