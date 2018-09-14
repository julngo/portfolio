function openWindow(){
    $('.project-view').addClass("transform-active");
    $('.proj-buttons').addClass("active");
}

function projectFour(){
    openWindow();
    $('head').append('<link class="anti-est" href="css/anti-est.css" rel="stylesheet">');
    $('.project-view').addClass("AEBGC");
    //zuluMenu Project
    $('.project-name-fill').text("Anti-Establishment");
    setTimeout(function(){
        i=0;
        $('.project-content').html();
        $('.AE-content').html();
    },1000.5); 
}