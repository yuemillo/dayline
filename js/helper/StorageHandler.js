
export  function getItem(item){
    return localStorage.getItem(item) ?? "";
}

export function setItem(target,item){
    localStorage.setItem(target,item);
}

export function removeItem(target){
    localStorage.removeItem(target);
}