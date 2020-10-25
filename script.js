var contentEle = document.body.querySelector(".content");
var interactEle = document.body.querySelector(".interact");
var number = 0
function createHome(){
  contentEle.innerHTML=" ";
  contentEle.innerHTML= "Home Page";
  
}
function createAbout(){
  contentEle.innerHTML=" ";
  var headEle = document.createElement("h1");
  headEle.innerHTML="About Page"
  var headEle3 = document.createElement("h3")
  headEle3.innerHTML = "Tyler"
  contentEle.appendChild(headEle)
  contentEle.appendChild(headEle3)
}
function createInteract(){
  contentEle.innerHTML=" ";
document.body.querySelector(".content").innerHTML = number
  
}
function add(){
  number = number + 1
  document.body.querySelector(".content").innerHTML = number
}

document.body.querySelector(".HomeButton").addEventListener("click",function(){
  createHome();
})
document.body.querySelector(".AboutButton").addEventListener("click",function(){
  createAbout();
})
document.body.querySelector(".InteractButton").addEventListener("click",function(){
  createInteract();
})
document.body.querySelector(".addButton").addEventListener("click",function(){
  add();
})
createHome();