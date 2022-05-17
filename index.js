var boxes = document.getElementsByClassName("box");
var i;

for(i=0;i<boxes.length;i++){
    boxes[i].addEventListener("click", function(){
        this.classList.toggle("active");

        var dot = this.firstElementChild;

        if(dot.style.display==="block"){
            dot.style.display="none";
        } else{
            dot.style.display="block";
        }
    });
}