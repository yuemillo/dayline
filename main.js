import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

//搜尋功能
import searchPost from './js/searchPost';
import checkLogin from './js/helper/checkLogin';
import beforeAddPost from './js/helper/beforeAddPost';

checkLogin();
searchPost();
beforeAddPost();
