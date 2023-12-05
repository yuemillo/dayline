import axios from 'axios';
import {getItem} from './StorageHandler';
import { errorHandler } from './messageHandler';
export default async function processAxios(method, path, data, needToken = false) {
	const base = 'http://localhost:3000';
	const url = `${base}/${path}`;
    const header = needToken ? { Authorization: `Bearer ${getItem('token')}`} : false;  

    const argsArr = [url];        
    if(data) argsArr.push(data)
    if(header) argsArr.push(header)

    try{
        const result = axios[method](...argsArr);
        return result
    }
	catch (err) {
        const {message} = err;
        errorHandler('error','發生錯誤',message)
    }
}
