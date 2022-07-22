let container=document.querySelector(".wrapper");
let form = document.querySelector("form").addEventListener("submit",getdata);
let arr=JSON.parse(localStorage.getItem("logStoreData")) || [];
function getdata(event){
    event.preventDefault();
    let email = document.querySelector(".email").value;
    let pass = document.querySelector(".pass").value;
    let obj={
        email: email,
        pass: pass
    }    
    arr.push(obj);
    localStorage.setItem("logStoreData",JSON.stringify(arr));
    
}