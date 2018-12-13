var counter = 0;
var stateStartGame = false;
var state1 = false;
var state2 = false;
var state3 = false;

function click(){
    counter++;
    update();
}

function update(){
    //update the value shown on the html
}

setInterval(function(){
    if(stateStartGame == true){
        click();
    }
}, 1000);