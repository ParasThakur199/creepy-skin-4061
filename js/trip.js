let container = document.getElementById("container");
let arr=JSON.parse(localStorage.getItem("logStoreData")) || [];

let head = document.createElement("h2");
head.innerText="Trips";
head.setAttribute("class","heading");
let image = document.createElement("img");
image.setAttribute("src","https://a.travel-assets.com/egds/illustrations/uds-default/baggage__large.svg");
image.setAttribute("class","tripImg");
let para = document.createElement("p");
para.setAttribute("class","para"); 
arr.forEach(function(elem){
    let data = elem.email;
    let resEmail=myfun(data);
    para.innerText=`${resEmail} You have no upcomming trips . Where are you going next?`;
});
function myfun(data){
    result = data.slice(0, data.indexOf('@'));
    return(result);
}
let btn = document.createElement("button");
btn.innerText="Start exploring";
btn.addEventListener("click",function(){
    window.location.href="./home.html";
});
btn.setAttribute("class","btn");
let clickarea = document.createElement("div");
clickarea.setAttribute("class","clickarea");
let paraClick1 = document.createElement("h4");
paraClick1.innerHTML+="Find your booking <span> > </span><p>Use your itinerary number to look it up</p>";
clickarea.appendChild(paraClick1);
clickarea.addEventListener("click",function(){
    window.location.href="#";
})
container.append(head,image,para,btn,clickarea);