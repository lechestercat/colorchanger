var butt = document.querySelector("button");
var isBlue = false;

butt.addEventListener("click",function(){
    if(isBlue){
        document.body.style.backgroundColor = "white";
        isBlue = false;
    }else{
        document.body.style.backgroundColor = "blue";
        isBlue = true;
    }
}
);