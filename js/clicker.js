var counter = 0;
var stateStartGame = false;
var state1 = false;
var state2 = false;
var state3 = false;

function click(){
    if(stateStartGame == false){
        stateStartGame = true;
    }
    console.log("click");
    counter++;
    update();
}

function update(){
    //update the value shown on the html
    $('#counter').empty;
    $('#counter').html(counter);
}

setInterval(function(){
    if(stateStartGame == true){
        click();
    }
}, 1000);