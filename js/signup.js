let container = document.querySelector(".wrapper");
let form = document.querySelector("form").addEventListener("submit", getdata);
let arr = JSON.parse(localStorage.getItem("signStoreData")) || [];
let arr2 = JSON.parse(localStorage.getItem("logStoreData")) || [];
function getdata(event) {
    event.preventDefault();
    let email = document.querySelector(".email").value;
    let fname = document.querySelector(".fname").value;
    let lname = document.querySelector(".lname").value;
    let pass = document.querySelector(".pass").value;
    
    let flag = "false";
    arr2.forEach(function(event){
        if(event["email"] == email){
            flag = "true";
        }
    })
    if(flag == "true"){
        document.querySelector(".email").style.border="1px solid red";
        alert("Email id Already Exist");
    }else{
    let obj={
        email: email,
        fname: fname,
        lname: lname,
        pass: pass
    }    
    arr.push(obj);
    localStorage.setItem("signStoreData",JSON.stringify(arr));    
    window.location.href="./signin.html";
    }
}