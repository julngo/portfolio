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
var pageHeader = '<div id="nav-bar"> <ul> <li style="float: left; width: 200px;" ><img id="headerPic" src="images/VedaAI_Logo.png"></li> <li><a><div>Sketches</div></a></li> <li><a><div>App</div></a></li> <li onclick="fillPageTwo()"><a><div>Research</div></a></li> <li onclick="fillPageOne()"><a><div>Home</div></a></li> </ul> </div> <hr><div class="veda-content"></div>';

var pageOne =  '<h1>Roles:</h1> <p>Group Manager, Lead App Developer, and Designer</p> <div id="project-body"> <iframe src="https://player.vimeo.com/video/259108778" width="640" height="360" frameborder="0" allowfullscreen></iframe> </div> <div><p> Bacon ipsum dolor amet leberkas alcatra hamburger corned beef jowl, cow beef beef ribs shank capicola short ribs turkey tongue. Tail filet mignon bacon, tongue pork loin boudin buffalo. Pork loin drumstick ribeye, doner short ribs pork meatloaf short loin biltong. Swine landjaeger jowl sausage buffalo. Chuck pork belly buffalo, shoulder pork chop jowl leberkas porchetta ground round tri-tip kielbasa meatball. Burgdoggen biltong rump shankle cow tenderloin. Ribeye pancetta meatball beef biltong, bacon burgdoggen ham sausage leberkas cow hamburger short loin tongue doner. </p> </div>';

var pageTwo = '<div><p> Bacon ipsum dolor amet leberkas alcatra hamburger corned beef jowl, cow beef beef ribs shank capicola short ribs turkey tongue. Tail filet mignon bacon, tongue pork loin boudin buffalo. Pork loin drumstick ribeye, doner short ribs pork meatloaf short loin biltong. Swine landjaeger jowl sausage buffalo. Chuck pork belly buffalo, shoulder pork chop jowl leberkas porchetta ground round tri-tip kielbasa meatball. Burgdoggen biltong rump shankle cow tenderloin. Ribeye pancetta meatball beef biltong, bacon burgdoggen ham sausage leberkas cow hamburger short loin tongue doner. </p> </div>';

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