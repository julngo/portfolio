var data = {
    "basic_info": {
        "name": "Julian Ngo",
        "field": "UX Designer, Developer",
        "email": "julngo@uw.edu",
        "linkedin": "insertlinkedinadress.com"
    },
    "projects":[
        {
        "name": "project name",
        "description": "what is this project about in few sentences",
        "type": "app prototype? ux design? website?",
        "frameworks": "optional: ex. cakephp"
        },
        {
        "name": "project name",
        "description": "what is this project about in few sentences",
        "type": "app prototype? ux design? website?",
        "frameworks": "optional: ex. cakephp"
        }
    ]
}
var begStr = "vi julian.json";
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
    
$(document).ready(function(){
    i = 0;
    type(string);
    //$('#textHere').text(stringText);
})


