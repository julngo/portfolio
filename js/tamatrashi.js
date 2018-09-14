function openWindow(){
    $('.project-view').addClass("transform-active");
    $('.proj-buttons').addClass("active");
}

function projectThree(){
    openWindow();
    $('head').append('<link class="tamatrashi" href="css/tamatrashi.css" rel="stylesheet">');
    $('.project-view').addClass("tamatrashiBGC");
    //A thing Called stress Project
    $('.project-name-fill').text("Tamatrashi");
    setTimeout(function(){
        i=0;
        $('.project-content').html();
        $('.tamatrashi-content').html();
    },1000.5); 
}