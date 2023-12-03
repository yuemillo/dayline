
export default function checkToken(){
    return localStorage.getItem('server-token') ?? false;
}

export function setToken(token){
    localStorage.setItem('server-token',token)
}

