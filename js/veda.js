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
//<img id="headerPic" src="images/VedaAI_Logo.png">
var pageHeader = '<div id="nav-bar"> <ul> <li style="float: left; width: 200px;" ><img id="headerPic" src="images/VedaAI_Logo.png"></li> <li onclick="fillPageFour()"><a><div>More Info</div></a></li> <li onclick="fillPageThree()"><a><div>Drafts & Prototypes</div></a></li> <li onclick="fillPageTwo()"><a><div>Research</div></a></li> <li onclick="fillPageOne()"><a><div>Home</div></a></li> </ul> </div> <hr><div class="veda-content"></div>';

var pageOne =  '<h1>VEDA AI</h1><iframe src="https://player.vimeo.com/video/259108778" width="640" height="360" frameborder="0" allowfullscreen></iframe> </div> <div> <h3>Features:</h3> <ul> <li><p>Wearable & Easy To Use Device</p></li> <li><p>A.I. to Monitor Health & Surroundings</p></li> <li><p>Connect to Pre-existing Smart Devices</p></li> <li><p>App Pairing to Create Reminders and Tasks</p></li>  </ul> ';

var pageTwo = '<p> About 21% of the United States population will be over the age of 65 by 2050. Having a technology that could assist this growing minority is a cool idea and could possibly see actual use in the future. We also found out that less than 50% of them currently use smartphones and that the elderly typically don\'t want to learn how to use new technologies. Finding a solution that could help them but not force them to learn how to use new technologies was the main idea we had to build this product around. </p> <p>We also found the major problems that elders face are loneliness, lack of independence, and not wanting to go to a nursing home. We wanted to create an idea that could help fix these problems and looked into different technologies that already exist that could be changed to help our idea.</p>';

var pageThree = '<h3>Ideation/Concepts:</h3><p>The original idea was to create a Virtual Reality world for the elderly to interact with other people online and do fun activities. We quickly changed our idea to have technology act as an assistant to the user. We went through several ideas such as a whole AI living as new smart house that monitors health, possibly having a hologram person talking back to them. We however wanted a device to be able to monitor them wherever they are instead of just in the vicinity of your their house, so we changed it so that the AI would be on a watch so that it could keep track of their health wherever.</p> <p>Here are some concept sketches that I made for a possible watch and ring design.</p> <img src="images/Veda_RingIdea.jpg"> <img src="images/Veda_WatchIdea.jpg">  <p>We decided that including too many functionalities onto a watch would take away from the experience and make our original intended audience have a more difficult time using. After receiving feedback from the class, we decided to simplify the watch into just a regular wristband that would connect to smart homes and devices as well as only monitoring health. We also decided to include a phone app that would allow caretakers to be able to make sure that the user is taking care of themselves properly as well as receive notifications in case an emergency occurs.</p> <h3>Storyboard</h3><iframe src="https://player.vimeo.com/video/255853935" width="640" height="360" frameborder="0" allowfullscreen></iframe>';

var pageFour = '<h3>Problem/Topic & Purpose:</h3> <p> In this class project, we had to create a product or an art piece based on a social justice topic that assisted or educated people about the topic. Our group decided to build create and design a product that would help with elderly living by themselves. We found that there hasn\'t been any real technologies being developed that targets only the elderly and solve their biggest issues that they face in their everyday life. Our group decided that we wanted to find a way to help solve their problem. </p> <h3>My Roles:</h3> <p>Group Manager, Lead App Developer, and Designer</p>';

var i = 0;
function projectOne(){
    openWindow();
    //Veda Project
    $('.project-name-fill').text("VEDA AI");
    setTimeout(function(){
        i=0;
        $('.project-content').html(pageHeader);
        $('.veda-content').html(pageOne);
    },1000.5); 
}

function removeVedaContent(){
    $('.veda-content').remove();
    $('.project-content').append('<div class="veda-content"></div>');
}

function fillPageOne(){
    removeVedaContent();
    $('.veda-content').html(pageOne);
}

function fillPageTwo(){
    removeVedaContent();
    $('.veda-content').html(pageTwo);
}

function fillPageThree(){
    removeVedaContent();
    $('.veda-content').html(pageThree);
}

function fillPageFour(){
    removeVedaContent();
    $('.veda-content').html(pageFour);
}