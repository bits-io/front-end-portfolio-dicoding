var x = document.querySelector('.banner');
var color = ["#25316D", "#5F6F94", "#0F3460", "#16213E"];
setInterval(function() {
   for(let y = 0; y < 4; y++){
    x.style.backgroundColor = color[Math.floor(Math.random() * 3)];  
  }
}, 1000) ;