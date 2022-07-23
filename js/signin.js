let container=document.querySelector(".wrapper");
let form = document.querySelector("form").addEventListener("submit",getdata);
let arr=JSON.parse(localStorage.getItem("logStoreData")) || [];
let arr2=JSON.parse(localStorage.getItem("signStoreData")) || [];
function getdata(event){
    event.preventDefault();
    let email = document.querySelector(".email").value;
    let pass = document.querySelector(".pass").value;
    let flag = "false";
    arr2.forEach(function(elem){
    if(elem["email"]==email){
        flag = "true";
    }    
})
    if(flag=="false"){
        document.querySelector(".email").style.border="1px solid red";
        alert("Wrong Credientials! Please Try-Again");
        return;
    }else{
        alert("Login Successfully :)");    
        window.location.href="./home.html";
    }
    let obj={
        email: email,
        pass: pass
    }    
    arr.push(obj);
    localStorage.setItem("logStoreData",JSON.stringify(arr));
}