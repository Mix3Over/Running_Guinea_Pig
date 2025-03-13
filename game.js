var character = document.getElementById('character');
var block = document.getElementById('block');
let displayCount = document.getElementById("count")

var pts = 0;
var isAlive = false;


function Functions(){
    StartGry();
    jump();
}

function StartGry(){
    if(block.classList != 'animacjaBloku'){
        pts=0;
            isAlive = true;
            displayCount.textContent = 0;
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

    if(vblock<450 && vblock>270 && vcharacter>=500){
        isAlive = false;
        block.classList.remove('animacjaBloku');
        alert("Oh no, Guinea Pig got caught! Points: " + pts);
    }

},10);

var Points = setInterval(function(){
    if(isAlive){
        pts++;
        displayCount.textContent = pts;
    }
}, 2000)