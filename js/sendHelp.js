function openWindow(){
    $('.project-view').addClass("transform-active");
    $('.proj-buttons').addClass("active");
}

var sendHelpPageHeader = '<div id="nav-bar"><ul><li><div>PICTURE IF POSS</div></li><li><div>ITEM 1</div></li><li><div>ITEM 2</div></li><li><div>ITEM 3</div></li></ul></div><div class="vl"></div><div class="sendHelp-content"></div>';

var sendHelpPageOne = '<p>T-bone bacon frankfurter, fatback picanha pork belly shank jowl hamburger drumstick short ribs landjaeger. Jowl turducken hamburger biltong, sausage brisket boudin turkey short ribs. Pig sausage shankle short loin. Porchetta burgdoggen boudin, meatball jerky fatback doner cow turkey rump andouille ball tip. Swine andouille spare ribs, picanha short loin tri-tip turducken frankfurter brisket pancetta strip steak jowl sirloin.</p>';

var sendHelpPageTwo = '<p>Turkey swine leberkas burgdoggen cupim hamburger shoulder drumstick meatloaf meatball buffalo prosciutto. Cupim pork belly bacon, pork loin landjaeger kevin leberkas pork corned beef turducken boudin salami ground round hamburger. Ball tip strip steak meatloaf, rump pork loin doner andouille. Spare ribs kevin beef ribs picanha strip steak frankfurter ball tip drumstick ribeye andouille swine pig short loin tenderloin. Porchetta frankfurter spare ribs turkey sausage pastrami fatback hamburger alcatra t-bone tenderloin filet mignon.</p>';

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