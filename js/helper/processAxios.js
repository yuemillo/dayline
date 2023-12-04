import axios from 'axios';
import getToken from './tokenHandler';

export default async function processAxios(method, path, data, needToken = false) {
	const base = 'http://localhost:3000';
	const url = `${base}/${path}`;
    const header = needToken ? { Authorization: `Bearer ${getToken}`} : false;  

    let argsArr = [url];        
    if(data) argsArr.push(data)
    if(header) argsArr.push(header)

    try{
        const result = axios[method](...argsArr)
        return result
    }
	catch (err) {
        const {message} = err;
        showMsg('error','發生錯誤',message)
    }
}
