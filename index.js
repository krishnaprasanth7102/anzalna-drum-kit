for(var i=0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var btnclick=this.innerHTML;
        switch (btnclick) {
            case 'w':
                var crash = new Audio('sounds/crash.mp3');
                crash.play()
                break;
                case 'a':
                var kick= new Audio('sounds/kick-bass.mp3');
                kick.play()
                break;
                case 's':
                var snare = new Audio('sounds/snare.mp3');
                snare.play()
                break;
                case 'd':
                var tom= new Audio('sounds/tom-1.mp3');
                tom.play()
                break;
                case 'j':
                var tom = new Audio('sounds/tom-2.mp3');
                tom.play()
                break;
                case 'k':
                var tom = new Audio('sounds/tom-3.mp3');
                tom.play()
                break;
                case 'l':
                var tom = new Audio('sounds/tom-4.mp3');
                tom.play()
                break;
            default:alert("error")
                break;
        }}

        ) };







        // var audio = new Audio('sounds/crash.mp3');
        // audio.play() 
