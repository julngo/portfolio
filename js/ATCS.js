function openWindow(){
    $('.project-view').addClass("transform-active");
    $('.proj-buttons').addClass("active");
}

function projectThree(){
    openWindow();
    $('head').append('<link class="ATCS" href="css/ATCS.css" rel="stylesheet">');
    $('.project-view').addClass("ATCSBGC");
    //A thing Called stress Project
    $('.project-name-fill').text("A Thing Called Stress");
    setTimeout(function(){
        i=0;
        $('.project-content').html();
        $('.ATCS-content').html();
    },1000.5); 
}