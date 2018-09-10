function openWindow(){
    $('.project-view').addClass("transform-active");
    $('.proj-buttons').addClass("active");
}

function projectTwo(){
    openWindow();
    $('head').append('<link class="sendHelp" href="css/sendHelp.css" rel="stylesheet">');
    $('.project-view').addClass("sendHelpBGC");
    //SendHelp Project
    $('.project-name-fill').text("Send Help");
    setTimeout(function(){
        i=0;
        $('.project-content').html();
        $('.sendHelp-content').html();
    },1000.5); 
}