function openWindow(){
    $('.project-view').addClass("transform-active");
    $('.proj-buttons').addClass("active");
}

var sendHelpPageHeader = '<div id="nav-bar"><ul><li><div>PICTURE IF POSS</div></li><li><div>ITEM 1</div></li><li><div>ITEM 2</div></li><li><div>ITEM 3</div></li></ul></div><div class="vl"></div><div class="sendHelp-content"></div>';

var sendHelpPageOne = '';

var sendHelpPageTwo = '';

function projectTwo(){
    openWindow();
    $('head').append('<link class="sendHelp" href="css/sendHelp.css" rel="stylesheet">');
    $('.project-view').addClass("sendHelpBGC");
    //SendHelp Project
    $('.project-name-fill').text("Send Help");
    setTimeout(function(){
        i=0;
        $('.project-content').html(sendHelpPageHeader);
        $('.sendHelp-content').html();
    },1000.5); 
}

function removeSendHelpContent(){
    $('.sendHelp-content').remove();
    $('.project-content').append('<div class="sendHelp-content"></div>');
}