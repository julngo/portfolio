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

var pageTwo = '<p> Bacon ipsum dolor amet leberkas alcatra hamburger corned beef jowl, cow beef beef ribs shank capicola short ribs turkey tongue. Tail filet mignon bacon, tongue pork loin boudin buffalo. Pork loin drumstick ribeye, doner short ribs pork meatloaf short loin biltong. Swine landjaeger jowl sausage buffalo. Chuck pork belly buffalo, shoulder pork chop jowl leberkas porchetta ground round tri-tip kielbasa meatball. Burgdoggen biltong rump shankle cow tenderloin. Ribeye pancetta meatball beef biltong, bacon burgdoggen ham sausage leberkas cow hamburger short loin tongue doner. </p> ';

var pageThree = '<iframe src="https://player.vimeo.com/video/255853935" width="640" height="360" frameborder="0" allowfullscreen></iframe>';

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