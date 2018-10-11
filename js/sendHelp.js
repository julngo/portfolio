function openWindow(){
    $('.project-view').addClass("transform-active");
    $('.proj-buttons').addClass("active");
}

var sendHelpPageHeader = '<div id="nav-bar"><div id="nav-head"><h1>SEND HELP</h1></div><div id="nav-items"><div onclick="fillSendHelpPageOne()" class="button">TO PAGE ONE</div><div onclick="fillSendHelpPageTwo()" class="button">TO PAGE TWO</div><div onclick="fillSendHelpPageThree()" class="button">TO PAGE THREE</div></div></div><div class="sendHelp-content"></div>';

var sendHelpPageOne = '<h2>What is SendHelp?</h2><p>This website is used to help people search for scholarships they can apply to. The way figure out what scholarships are available to them is by putting in information about themselves including house income, race, ethnicity, how they identify themselves, and more. This website is going to take in that information and narrow down available scholarships and present it in an easy to use way. Might try to integrate a way for the user to contact or apply for scholarships through the website.</p><p>Everything listed below is the intended outcome of project. However, some of these features weren\'t implemented fully before the end.</p><div class="row"> <div class="column-3"><h3>Target Audience:</h3><ul><li>Low income, college intended students</li><li>Minorities</li><li>Advisors who want to assist students to go to college</li></ul></div> <div class="column-3"><h3>Objectives:</h3><ul><li>Assisting audience to find scholarships available for them</li><li>Easy to use & navigate</li></ul></div> <div class="column-3"><h3>Features:</h3><ul><li>Scholarships directory</li><li>Account Management</li><li>Built-in application submission</li></ul></div> </div><p> <a class ="button" href="https://students.washington.edu/julngo/sendhelp/" rel="noopener noreferrer" target="_blank">SendHelp Website<a></p>';

var sendHelpPageTwo = '<h2>Web User Interface</h2> <div class="row"> <div class="column-2"><img src="images/sendHelp_1.png"> </div> </div> <div class="row"> <div class="column-2"><img src="images/sendHelp_2.png"> </div> </div> <div class="row"> <div class="column-2"><img src="images/sendHelp_3.png"> </div> </div> <div class="row"> <div class="column-2"><img src="images/sendHelp_4.png"> </div> </div> <h2>Userflow:</h2> <div class="row"> <div class="column-2"><img src="images/sendHelp_SiteMap.jpg"> </div> </div> <div class="row"> <div class="column-2"><img src="images/sendHelp_Wireframe.jpg"> </div> </div>';

var sendHelpPageThree = '<h2>Reflection</h2><p>Prosciutto frankfurter swine, pastrami sirloin bresaola pork belly drumstick kielbasa. Bresaola fatback hamburger short loin jowl chuck tail andouille. Kevin ham brisket, cow swine turducken kielbasa ribeye alcatra jerky. Rump spare ribs tongue turkey ball tip. Filet mignon capicola pork, buffalo brisket picanha pork chop boudin ribeye pancetta short ribs spare ribs fatback meatball. Turducken filet mignon pork belly ham kevin, boudin beef pork chop prosciutto beef ribs landjaeger venison shoulder.</p><a class="button" href="https://students.washington.edu/julngo/wordpress/" rel="noopener noreferrer" target="_blank">To Website Portfolio</a>';

var SHUC = '<div class="UnderCon"><div class="UC-pic"><img src="images/UnderConstruction.png"></div><div class="UC-desc"><p>This part of the site is still</p><h1>UNDER CONSTRUCTION</h1><p>Please check back on this later</p></div><div class="btn1"><button onclick="applyHeaderSH()">Keep going</button></div></div>';

function projectTwo(){
    openWindow();
    $('head').append('<link class="sendHelp" href="css/sendHelp.css" rel="stylesheet">');
    $('.project-view').addClass("sendHelpBGC");
    //SendHelp Project
    $('.project-name-fill').text("Send Help");
    setTimeout(function(){
        i=0;
        $('.project-content').html(sendHelpPageHeader);
        $('.sendHelp-content').html(sendHelpPageOne);
    },1000.5); 
}

function applyHeaderSH(){
    $('head').append('<link class="sendHelp" href="css/sendHelp.css" rel="stylesheet">');
    $('.UnderCon').remove();
    $('.project-content').html(sendHelpPageHeader);
    $('.sendHelp-content').html(sendHelpPageOne);
    
}

function removeSendHelpContent(){
    $('.sendHelp-content').remove();
    $('.project-content').append('<div class="sendHelp-content"></div>');
}

function fillSendHelpPageOne(){
    removeSendHelpContent();
    $('.sendHelp-content').html(sendHelpPageOne);
}

function fillSendHelpPageTwo(){
    removeSendHelpContent();
    $('.sendHelp-content').html(sendHelpPageTwo);
}

function fillSendHelpPageThree(){
    removeSendHelpContent();
    $('.sendHelp-content').html(sendHelpPageThree);
}