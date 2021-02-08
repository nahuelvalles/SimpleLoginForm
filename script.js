var sbtButton = document.getElementById("send");
let nameText = document.getElementById("form3Example1");
var passWord = document.getElementById("form3Example4");

sbtButton.addEventListener("click",function(){
    prevent.default();
    console.log(nameText.textContent);
    window.localStorage.setItem("name", nameText);
    window.localStorage.setItem("passWord", passWord);

})
