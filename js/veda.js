function openWindow(){
    $('.project-view').addClass("transform-active");
    $('.proj-buttons').addClass("active");
}



var i = 0;
function openVeda(){
    openWindow();
    $('head').append('<link class="veda" href="css/veda.css" rel="stylesheet">');
    //Veda Project
    $('.project-name-fill').text("VEDA AI");
    setTimeout(function(){
        i=0;
        fillHeaderVeda();
        fillContentVeda();
    },1000.5); 
}

function fillHeaderVeda(){
    $('#headerPic').attr("src", "images/VedaAI_Logo.png");
    $('.navbar').html('<hr><div><p>App & Prototypes</p></div><div><p>Concepting</p></div><div><p>Research</p></div><div><p>Intro</p></div>');
    
}

function fillContentVeda(){
    //$('.veda-content').html(VedaPageOne);
}

function removeVedaContent(){
    $('.veda-content').remove();
    $('.project-content').append('<div class="veda-content"></div>');
}

function fillVedaPageOne(){
    removeVedaContent();
    $('.veda-content').html(VedaPageOne);
}

function fillVedaPageTwo(){
    removeVedaContent();
    $('.veda-content').html(VedaPageTwo);
}

function fillVedaPageThree(){
    removeVedaContent();
    $('.veda-content').html(VedaPageThree);
}

function fillVedaPageFour(){
    removeVedaContent();
    $('.veda-content').html(VedaPageFour);
}
var VedaPageHeader = '<div id="nav-bar"> <ul> <li style="float: left; width: 200px;" ><img onclick="fillVedaPageOne()" id="headerPic" src="images/VedaAI_Logo.png"></li> <li onclick="fillVedaPageFour()"><a><div>App & Prototypes</div></a></li> <li onclick="fillVedaPageThree()"><a><div>Concepts</div></a></li> <li onclick="fillVedaPageTwo()"><a><div>Research</div></a></li> <li onclick="fillVedaPageOne()"><a><div>Home</div></a></li> </ul> </div> <hr> <div class="veda-content"></div>';

var VedaPageOne =  '<iframe src="https://player.vimeo.com/video/259108778" width="640" height="360" frameborder="0" allowfullscreen></iframe> </div> <div> <h3>Problem/Topic & Purpose:</h3> <p> In this class project, we had to create a product or an art piece based on a social justice topic that assisted or educated people about the topic. Our group decided to build create and design a product that would help with elderly living by themselves. We found that there hasn\'t been any real technologies being developed that targets only the elderly and solve their biggest issues that they face in their everyday life. Our group decided that we wanted to find a way to help solve their problem. </p> <h3>Features:</h3> <ul> <li><p>Wearable & Easy To Use Device</p></li> <li><p>A.I. to Monitor Health & Surroundings</p></li> <li><p>Connect to Pre-existing Smart Devices</p></li> <li><p>App Pairing to Create Reminders and Tasks</p></li> </ul> <h3>My Roles:</h3> <p>Group Manager, Lead App Developer, and Designer</p> <h3>Project Date:</h3> <p>January 2018 - March 2018</p> ';

var VedaPageTwo = '<h3>Research</h3><image class="border" src="images/lifealert.png"> <p>This project requirement was to make a product that was social justice oriented combined with speculative design and technology. The four of us explored social justice issues, and after doing a little bit of research on three different ones by ourselves, we came together to share before deciding our topic would be focused around elderly care.</p> <p> About 21% of the United States population will be over the age of 65 by 2050. Having a technology that could assist this growing minority is a cool idea and could possibly see actual use in the future. We also found out that less than 50% of them currently use smartphones and that the elderly typically doesn\’t want to learn how to use new technologies. Finding a solution that could help them but not force them to learn how to use new technologies was the main idea we had to build this product around. </p> <p>We also found the major problems that elders face are loneliness, lack of independence, and not wanting to go to a nursing home. We wanted to create an idea that could help fix these problems and investigated different technologies that already exist that could be changed to help our idea.</p> <p>A technology that already assist that assisted the elderly when they were in trouble was LifeAlert. We studied what LifeAlert had that made it successful and what made it unsuccessful and the changes that were made since its release.</p>';

var VedaPageThree = '<h3>Ideation/Concepts:</h3> <p>We had several ideas before settling onto the idea an artificial intelligence to help assist in the normal everyday life of senior citizens. An original idea was to create a Virtual Reality world for them to interact with other people online in the safety of their own homes. We figured this would help build an online community to combat loneliness often found with our targeted audience. This idea however didn\’t help solve the problem with many of the elderly wanting to be independent.</p> <p>We quickly changed our idea from entertainment and social to have be an assistant for the user. We went through several ideas such as a whole AI living as new smart house that monitors health, possibly having a hologram person talking back to them. We however wanted a device to be able to monitor them wherever they are instead of just near their house, so we changed it so that the AI would be on a watch so that it could keep track of their health wherever.</p> <p>Here are some concept sketches that I made for a possible watch and ring design.</p> <img class="border" src="images/Veda_RingIdea.jpg"> <img class="border" src="images/Veda_WatchIdea.jpg">  <p>In the last few iterations of ideation, we decided that including too many functionalities into a watch would take away from the experience and make our original intended audience have a more difficult time using out product. After receiving feedback from the class, we decided to simplify the watch into just a regular wristband that would connect to smart homes and devices as well as only monitoring health. We also decided to include a phone app that would allow caretakers to be able to make sure that the user is taking care of themselves properly as well as receive notifications in case an emergency occurs.</p> ';

var VedaPageFour = '<h3>Storyboard</h3><iframe src="https://player.vimeo.com/video/255853935" width="640" height="360" frameborder="0" allowfullscreen></iframe> <h3>App</h3><img id="Screenshot" class="border" src="images/appScreenshot.png"> <p>The app we used in the video was made in XCode but doesn\'t fully function the way it is suppose to. The App prototype that we created was to be used in the video and to show how it functioned. The app is suppose to be used by the caretaker of the user of VEDA AI as a means to create tasks/reminders and monitor them. The Left shows the task/reminder list and below is the app storyboard. </p> <img id="StoryBoard" src="images/appStoryBoard.png">';