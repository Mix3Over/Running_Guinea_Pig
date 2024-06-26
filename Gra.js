var character = document.getElementById('character');
var block = document.getElementById('block');


var pkt = 0;


function Functions(){
    StartGry();
    jump();
}

function StartGry(){
    if(block.classList != 'animacjaBloku'){
            pkt=0;
            block.classList.add('animacjaBloku');
        }
}

function jump(){

    if(character.classList != 'Podskok'){
        character.classList.add('Podskok');
    }
    setTimeout(function(){
        character.classList.remove('Podskok');
    },650);
}

var checkDead = setInterval(function(){

    var vcharacter = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var vblock = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(vblock<400 && vblock>200 && vcharacter>=500){
        block.classList.remove('animacjaBloku');
        //block.style.display = "none";
        alert(pkt);
    }

},10);

var Points = setInterval(function(){
    pkt++;
}, 2000)
