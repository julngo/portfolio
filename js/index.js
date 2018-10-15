var data ={
    "basic_info": {
    "name": "Julian Ngo",
        "field": "Developer, UX Designer",
        "email": "jultngo@gmail.com",
        "linkedin": "<a href='https://www.linkedin.com/in/juliantngo/' rel='noopener noreferrer' target='_blank' class='blue-text'>https://www.linkedin.com/in/juliantngo</a>"
    },
    "projects":[
        {
        "name": "<a onclick='projectOne()' class='blue-text'>VEDA AI</a>",
        "description": "Product design idea for the elderly in a near future setting.",
        "type": "App prototype, UX design, Hi/Lo-fidelity prototyping",
        "role": "Group Manager, Lead App Dev, UX Designer"
        },
        {
        "name": "<a onclick='projectThree()' class='blue-text'>Tamatrashi</a>",
        "description": "Tomogatchi-inspired game designed around the philosophical idea of absurdism.",
        "type": "Game prototype, Graphic Design",
        "role": "Lead Game Dev, Graphic Designer"
        },
        {
        "name": "<a onclick='projectTwo()' class='blue-text'>Send Help</a>",
        "description": "Website design and idea catered towards low income and minority students looking for higher education.",
        "type": "Full Stack Development",
        "role": "Group Manager, Lead App Dev, UX Designer",
        "frameworks": "cakephp"
        },
        {
        "name": "<a onclick='projectFour()' class='blue-text'>Anti-Establishment</a>",
        "description": "Alternate reality game where the University of Washington Bothell campus was the board.",
        "type": "Alternate Reality Game",
        "role": "Web Designer, Web Developer, UX Designer, Prop Designer"
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

function closeWindow(){
    $('.proj-buttons div img').remove();
    $('.project-name-fill').empty();
    $('.project-content').empty();
    $('.project-view').removeClass("transform-active");
    $('.proj-buttons').removeClass("active");
    $('.project-view').removeClass("vedaBGC");
    $('.project-view').removeClass("sendHelpBGC");
    $('.veda').remove();
    $('.sendHelp').remove();
    $('.tamatrashi').remove();
    $('.anti-est').remove();
    
}