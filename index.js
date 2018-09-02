var data ={
    "basic_info": {
    "name": "Julian Ngo",
        "field": "UX Designer, Developer",
        "email": "julngo@uw.edu",
        "linkedin": "UH"
    },
    "projects":[
        {
        "name": "<a onclick='projectOne()' class='blue-text'>Project 1</a>",
        "description": "what is this project about in few sentences",
        "type": "app prototype? ux design? website?",
        "frameworks": "optional: ex. cakephp"
        },
        {
        "name": "<a onclick='openWindow()' class='blue-text'>Project 2</a>",
        "description": "what is this project about in few sentences",
        "type": "app prototype? ux design? website?",
        "frameworks": "optional: ex. cakephp"
        },
        {
        "name": "<a onclick='openWindow()' class='blue-text'>Project 3</a>",
        "description": "what is this project about in few sentences",
        "type": "app prototype? ux design? website?",
        "frameworks": "optional: ex. cakephp"
        },
        {
        "name": "<a onclick='openWindow()' class='blue-text'>Project 4</a>",
        "description": "what is this project about in few sentences",
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

function openWindow(){
    $('.project-view').addClass("transform-active");
    $('.proj-buttons').addClass("active");
}

function closeWindow(){
    $('.proj-buttons div img').remove();
    $('.project-name-fill').empty();
    $('.project-content').empty();
    $('.project-view').removeClass("transform-active");
    $('.proj-buttons').removeClass("active");
}

function leaveWebsite(){
    if(confirm("Do you want to leave?") == true){
        //window.history.back();
        close();
    }
}

$('.term-buttons div').hover(
    //onhover
    function(){
        $('.term-buttons .red').append("<img src='close.svg' width='65%' class='close'>");
        $('.term-buttons .yellow').append("<img src='minimize.svg' width='65%' class='minimize'>");
        $('.term-buttons .green').append("<img src='enlarge.svg' width='65%' class='enlarge'>");
    },
    //exithover
    function(){
        $('.term-buttons div img').remove();
    }
);

$('.proj-buttons div').hover(
    //onhover
    function(){
        $('.proj-buttons .red').append("<img src='close.svg' width='65%' class='close'>");
        $('.proj-buttons .yellow').append("<img src='minimize.svg' width='65%' class='minimize'>");
        $('.proj-buttons .green').append("<img src='enlarge.svg' width='65%' class='enlarge'>");
    },
    //exithover
    function(){
        $('.proj-buttons div img').remove();
    }
);

function projectOne(){
    openWindow();
    //Veda Project
    $('.project-name-fill').text("VEDA AI");
    setTimeout(function(){
        i=0;
        $('.project-content').html(
            '<div id="nav-bar"> <ul> <li><img style="float: left" id="headerPic" src="VedaAI_Logo.png"></li> <li><a>TEXT</a></li> <li><a>TEXT</a></li> <li><a>TEXT</a></li>  <li><a>TEXT</a></li> <li><a>TEXT</a></li> </ul> </div> <h1>Roles:</h1> <p>Group Manager, Lead App Developer, and Designer</p> <div id="project-body"> <iframe src="https://player.vimeo.com/video/259108778" width="640" height="360" frameborder="0" allowfullscreen></iframe> </div>'
            
        
        );
    },1000.5); 
    
    
}