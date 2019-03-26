var data ={
    "basic_info": {
    "name": "Julian Ngo",
        "field": "Developer, UX Designer, Project Manager",
        "email": "jultngo@gmail.com",
        "linkedin": "<a href='https://www.linkedin.com/in/juliantngo/' rel='noopener noreferrer' target='_blank' class='blue-text'>https://www.linkedin.com/in/juliantngo</a>",
        "more info": "<a onclick='openAboutMe()' class='blue-text'>About Me</a>"
    },
    "projects":[
        {
        "name": "<a onclick='openWindow()' class='blue-text'>Anti-Establishment</a>",
        "description": "Alternate reality game where the University of Washington Bothell campus was the board.",
        "type": "Alternate Reality Game",
        "role": "Web Designer, Web Developer, UX Designer, Prop Designer",
        "date": "Apr 2018 - Jun 2018"
        },
        {
        "name": "<a onclick='openVeda()' class='blue-text'>VEDA AI</a>",
        "description": "Product design idea for the elderly in a near future setting.",
        "type": "App prototype, UX design, Hi/Lo-fidelity prototyping",
        "role": "Group Manager, Lead App Dev, UX Designer",
        "date": "Jan 2018 - March 2018"
        },
        "More to come!"
    ]
}

var begStr = "vi julian.json \n";
var string = JSON.stringify(data, undefined, 2);
var underConstruction = false;
var typing = '';

var i = 0; 
//I STOLE THIS FROM SU
function type(str) {
    if(endFunc == true){
        instantSetup();
        return;
    }
  if(i < str.length){
    typing = typing+str.charAt(i);
    $('#textHere').text(typing+'_');
  }else{
    $('#textHere').text(typing);
    return false;
  }
    var ran = 0;
  setTimeout(function(){
    type(str);
  }, ran)
  i++;
};

function typeHTML(str) {
    if(endFunc == true){
        instantSetup();
        return;
    }
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

var endFunc = false;

$(document).click(function(){
    endFunc = true;
})

$(document).ready(function(){
    setTimeout(function(){
        i = 0;
        type(begStr);
    },1000);
    setTimeout(function(){
        i=0;
        if(underConstruction == false){
           typeHTML(string);
        }else {
           typeHTML("Website is still under construction! Thank you for your patience!")
        }
        
    },2000); 
})
function instantSetup(){
    $('#textHere').empty();
    $('#textHere').html(begStr + string);
};

function leaveWebsite(){
    if(confirm("Do you want to leave?") == true){
        //window.history.back();
        close();
    }
};

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
    cleanProjContent();
    $('.proj-buttons div img').remove();
    $('.project-name-fill').empty();
    $('.project-content').empty();
    $('.project-view').removeClass("transform-active");
    $('.proj-buttons').removeClass("active");
    $('.veda').remove();
    $('.sendHelp').remove();
    $('.tamatrashi').remove();
    $('.anti-est').remove();
    
}

function cleanProjContent(){
    $('#headerPic').attr("src", "");
    $('.navbar').empty();
}

function openWindow(){
    $('.project-view').addClass("transform-active");
    $('.proj-buttons').addClass("active");
}
