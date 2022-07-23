let container = document.getElementById("container");
let arr=JSON.parse(localStorage.getItem("logStoreData")) || [];

let head = document.createElement("h2");
head.innerText="Find your booking";
head.setAttribute("class","heading");
let enterNoHead = document.createElement("h3");
enterNoHead.innerText="Enter your itinerary number";
enterNoHead.setAttribute("class","enterNoHead");
let para = document.createElement("p");
para.setAttribute("class","para"); 
arr.forEach(function(elem){
    let data = elem.email;
    para.innerText=` Your Itinerary number was emailed ${data} `;
});
let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder","Itinerary number");
input.setAttribute("class","inputBox");
let forget = document.createElement("span");
forget.setAttribute("class","forget");
forget.innerText="Forgot your itinerary number?";
forget.addEventListener("click",function(){
    forget.location.href="./trip.html";
})
let btn = document.createElement("button");
btn.innerText="Continue";
btn.addEventListener("click",function(){
    window.location.href="./home.html";
});
btn.setAttribute("class","btn");
let clickarea = document.createElement("div");
clickarea.setAttribute("class","clickarea");
let paraClick1 = document.createElement("h4");
paraClick1.innerHTML+="Find a booking you made using a different email address <span> > </span><p>Look up an item you booked with another email or social media account</p>";
clickarea.appendChild(paraClick1);
clickarea.addEventListener("click",function(){
    window.location.href="#";
})
container.append(head,enterNoHead,para,input,forget,btn,clickarea);