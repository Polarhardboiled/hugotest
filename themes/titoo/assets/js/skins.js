//https://github.com/gone369/sass-themify

window.onload = function(){
  var $defaultBtn = document.getElementById("base-btn");
  var $redBtn = document.getElementById("roseate-btn");
  var $brownBtn = document.getElementById("auburn-btn");
  var $blueBtn = document.getElementById("beryl-btn");
  
  function changeTheme(theme){
    document.getElementsByTagName("body")[0].className = theme;
  }
  $defaultBtn.addEventListener("click",function(){
    changeTheme("base");
  })
  $redBtn.addEventListener("click",function(){
    changeTheme("roseate");
  })
  $brownBtn.addEventListener("click",function(){
    changeTheme("auburn");
  })
  $blueBtn.addEventListener("click",function(){
    changeTheme("beryl");
  })
  
}