function openWindow(){
    $('.project-view').addClass("transform-active");
    $('.proj-buttons').addClass("active");
}

function projectThree(){
    openWindow();
    $('head').append('<link class="zuluMenu" href="css/zuluMenu.css" rel="stylesheet">');
    $('.project-view').addClass("zuluMenuBGC");
    //zuluMenu Project
    $('.project-name-fill').text("Zulus Board Game Cafe's Menu");
    setTimeout(function(){
        i=0;
        $('.project-content').html();
        $('.zuluMenu-content').html();
    },1000.5); 
}