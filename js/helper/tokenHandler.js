
export default function getToken(){
    return localStorage.getItem('server-token') ?? "";
}

export function setToken(token){
    localStorage.setItem('server-token',token)
}

