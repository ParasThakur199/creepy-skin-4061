let container = document.querySelector(".wrapper");
let form = document.querySelector("form").addEventListener("submit", getdata);
let arr = JSON.parse(localStorage.getItem("signStoreData")) || [];
function getdata(event) {
    event.preventDefault();
    let obj = {
        email: document.querySelector(".email").value,
        fname: document.querySelector(".fname").value,
        lname: document.querySelector(".lname").value,
        pass: document.querySelector(".pass").value
    }
    arr.push(obj);
    localStorage.setItem("signStoreData", JSON.stringify(arr));

}