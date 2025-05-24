let btns = document.querySelectorAll('.btn').length;
for(i=0; i<btns;i++){
    //click on button
    document.querySelectorAll(".btn")[i].addEventListener('click',function()
    {
        var btncalled=this.innerHTML;
        console.log(btncalled);
        makeSound(btncalled);
        this.style.color="blue";
        setTimeout(() => {
            this.style.color = ""; // remove inline color, reverts to CSS default
        }, 300);
    });    
}
  //KEY PRESS
    document.addEventListener('keydown',function(e){
        makeSound(e.key)
    })

function makeSound(key){
    switch(key) {
            case "W":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                
                break;
            case "A":
                var audio2 = new Audio('sounds/kick-bass.mp3');
                audio2.play();
                break;
            case "S":
             var audio3 = new Audio('sounds/snare.mp3');
                audio3.play();
            break;
            case "D":
             var audio4 = new Audio('sounds/tom-1.mp3');
             audio4.play();
            break;
            case "J":
             var audio5 = new Audio('sounds/tom-2.mp3');
                audio5.play();
            break;
            case "K":
             var audio6 = new Audio('sounds/tom-3.mp3');
                audio6.play();
            break;
            case "L":
             var audio7 = new Audio('sounds/tom-4.mp3');
                audio7.play();
            break;
            default:
                console.log("Nothing clicked");
        }
}