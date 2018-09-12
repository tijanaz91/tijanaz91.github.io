function fjaMenu() {
  if(document.getElementById('nav2').style.display=="none"){
      document.getElementById('nav2').style.display = "block";
  } else{
    document.getElementById('nav2').style.display = "none";
  }
}
function fja2() {
   var w = window.outerWidth;
   if (w>520) {
       document.getElementById('nav2').style.display = "none";
       document.getElementById('log2').style.display = "none";
       document.getElementById('srch').style.display = "none";
   }
}
function fjaLog() {
  if(document.getElementById('log2').style.display=="none"){
      document.getElementById('log2').style.display = "block";
  } else{
    document.getElementById('log2').style.display = "none";
  }
}
function fjaSrch() {
  if(document.getElementById('srch').style.display=="none"){
      document.getElementById('srch').style.display = "block";
  } else{
    document.getElementById('srch').style.display = "none";
  }
}
