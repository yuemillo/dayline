import"./main-5520bd99.js";function i(){return localStorage.getItem("server-token")??!1}const s=document.querySelector(".signIn__errorMsg"),c=document.querySelector(".signIn__submitBtn"),n=document.querySelector(".signIn__userEmail"),t=document.querySelector(".signIn__userPsd");console.log(i());function o(e){const r="";e&&e.classList.add("signIn__input--invalid"),s.classList.remove("d-none"),s.textContent=r}c.addEventListener("click",e=>{if(e.preventDefault(),!n.value)return o(n);if(!t.value)return o(t)});[n,t].forEach(e=>{e.addEventListener("input",function(r){this.classList.remove("signIn__input--invalid")})});
