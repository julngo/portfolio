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

var stringText = JSON.stringify(data, undefined, 2);


    
$(document).ready(function(){
    $('.terminal-body pre').text(stringText);
})
