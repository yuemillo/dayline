import axios from 'axios';
import {getItem} from './StorageHandler';
import { errorHandler } from './messageHandler';
export default async function processAxios(method, path, data, needToken = false) {
	const base = 'https://json-server-dayline.onrender.com';
	const url = `${base}/${path}`;
    const header = needToken ? { headers:{authorization: `Bearer ${getItem('token')}`}} : false;  
    const argsArr = [url];        
    if(data) argsArr.push(data)
    if(header) argsArr.push(header)

    try{
        const result = await axios[method](...argsArr);
        return result
    }
	catch (err) {
        const {message} = err;
        errorHandler('error','發生錯誤',message)
    }
}
