function openWindow(){
    $('.project-view').addClass("transform-active");
    $('.proj-buttons').addClass("active");
}

var sendHelpPageHeader = '<div id="nav-bar"><ul><li><div>PICTURE IF POSS</div></li><li><a><div onclick="fillSendHelpPageOne()">Home</div></a></li><li><a><div onclick="fillSendHelpPageTwo()">Diagram</div></a></li><li><a><div onclick="fillSendHelpPageThree()">Screenshots</div></a></li></ul></div><div class="vl"></div><div class="sendHelp-content"></div>';

var sendHelpPageOne = '<h2>What is SendHelp?</h2><p>This website is used to help people search for scholarships they can apply to. The way figure out what scholarships are available to them is by putting in information about themselves including house income, race, ethnicity, how they identify themselves, and more. This website is going to take in that information and narrow down available scholarships and present it in an easy to use way. Might try to integrate a way for the user to contact or apply for scholarships through the website.</p><p>Everything listed below is the intended outcome of project. However, some of these features weren\'t implemented fully before the end.</p><div class="row"> <div class="column-3"><h3>Target Audience:</h3><ul><li>Low income, college intended students</li><li>Minorities</li><li>Advisors who want to assist students to go to college</li></ul></div> <div class="column-3"><h3>Objectives:</h3><ul><li>Assisting audience to find scholarships available for them</li><li>Easy to use & navigate</li></ul></div> <div class="column-3"><h3>Features:</h3><ul><li>Scholarships directory</li><li>Account Management</li><li>Built-in application submission</li></ul></div> </div><p> <a href="https://students.washington.edu/julngo/sendhelp/" rel="noopener noreferrer" target="_blank" class="blue-text">SendHelp Website<a></p>';

var sendHelpPageTwo = '<p>Turkey swine leberkas burgdoggen cupim hamburger shoulder drumstick meatloaf meatball buffalo prosciutto. Cupim pork belly bacon, pork loin landjaeger kevin leberkas pork corned beef turducken boudin salami ground round hamburger. Ball tip strip steak meatloaf, rump pork loin doner andouille. Spare ribs kevin beef ribs picanha strip steak frankfurter ball tip drumstick ribeye andouille swine pig short loin tenderloin. Porchetta frankfurter spare ribs turkey sausage pastrami fatback hamburger alcatra t-bone tenderloin filet mignon.</p>';

var sendHelpPageThree = '<p>Prosciutto frankfurter swine, pastrami sirloin bresaola pork belly drumstick kielbasa. Bresaola fatback hamburger short loin jowl chuck tail andouille. Kevin ham brisket, cow swine turducken kielbasa ribeye alcatra jerky. Rump spare ribs tongue turkey ball tip. Filet mignon capicola pork, buffalo brisket picanha pork chop boudin ribeye pancetta short ribs spare ribs fatback meatball. Turducken filet mignon pork belly ham kevin, boudin beef pork chop prosciutto beef ribs landjaeger venison shoulder.</p>';

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