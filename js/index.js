var data ={
    "basic_info": {
    "name": "Julian Ngo",
        "field": "UX Designer, Developer",
        "email": "julngo@uw.edu",
        "linkedin": "<a href='https://www.linkedin.com/in/juliantngo/' rel='noopener noreferrer' target='_blank' class='blue-text'>https://www.linkedin.com/in/juliantngo</a>"
    },
    "projects":[
        {
        "name": "<a onclick='projectOne()' class='blue-text'>VEDA AI</a>",
        "description": "what this project is about in few sentences",
        "type": "app prototype? ux design? website?",
        "frameworks": "optional: ex. cakephp"
        },
        {
        "name": "<a onclick='openWindow()' class='blue-text'>Project 2</a>",
        "description": "what this project is about in few sentences",
        "type": "app prototype? ux design? website?",
        "frameworks": "optional: ex. cakephp"
        },
        {
        "name": "<a onclick='openWindow()' class='blue-text'>Project 3</a>",
        "description": "what this project is about in few sentences",
        "type": "app prototype? ux design? website?",
        "frameworks": "optional: ex. cakephp"
        },
        {
        "name": "<a onclick='openWindow()' class='blue-text'>Project 4</a>",
        "description": "what this project is about in few sentences",
        "type": "app prototype? ux design? website?",
        "frameworks": "optional: ex. cakephp"
        }
    ]
}

var begStr = "vi julian.json \n";
var string = JSON.stringify(data, undefined, 2);

var typing = ' ';
var i = 0; 
//I STOLE THIS FROM SU
function type(str) {
  if(i < str.length){
    typing = typing+str.charAt(i);
    $('#textHere').text(typing+'_');
  }else{
    $('#textHere').text(typing);
    return false;
  }
    var ran = 0;
  //var ran = Math.floor(Math.random() * 150) + 75;
    //this gives a random delay between each character so it's more realistic
  //set ran to a fixed number if you want consistent speed.
  setTimeout(function(){
    type(str);
  }, ran)
  i++;
};

function typeHTML(str) {
  if(i < str.length){
    typing = typing+str.charAt(i);
    $('#textHere').html(typing+'_');
  }else{
    $('#textHere').html(typing);
    return false;
  }
    var ran = 0;
  setTimeout(function(){
    typeHTML(str);
  }, ran)
  i++;
};

$(document).ready(function(){
    setTimeout(function(){
        i = 0;
        type(begStr);
    },1000);
    setTimeout(function(){
        i=0;
        typeHTML(string);
    },2500); 
})

function leaveWebsite(){
    if(confirm("Do you want to leave?") == true){
        //window.history.back();
        close();
    }
}

$('.term-buttons div').hover(
    //onhover
    function(){
        $('.term-buttons .red').append("<img src='images/close.svg' width='60%' class='close'>");
        $('.term-buttons .yellow').append("<img src='images/minimize.svg' width='60%' class='minimize'>");
        $('.term-buttons .green').append("<img src='images/enlarge.svg' width='60%' class='enlarge'>");
    },
    //exithover
    function(){
        $('.term-buttons div img').remove();
    }
);

$('.proj-buttons div').hover(
    //onhover
    function(){
        $('.proj-buttons .red').append("<img src='images/close.svg' width='60%' class='close'>");
        $('.proj-buttons .yellow').append("<img src='images/minimize.svg' width='60%' class='minimize'>");
        $('.proj-buttons .green').append("<img src='images/enlarge.svg' width='60%' class='enlarge'>");
    },
    //exithover
    function(){
        $('.proj-buttons div img').remove();
    }
);

