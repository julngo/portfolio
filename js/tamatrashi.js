function openWindow(){
    $('.project-view').addClass("transform-active");
    $('.proj-buttons').addClass("active");
}
var tamatrashiPageHeader = '<div id="nav-bar"><ul><li><div>home</div></li><li><div>Ideas</div></li><li><img width="100%" src="images/title.png"></li><li><div>Production</div></li><li><div>Reflection</div></li></ul></div>';
var tamatrashiPageOne = '<div class="sect-1"></div><div class="sect-2"></div>';

function projectThree(){
    openWindow();
    $('head').append('<link class="tamatrashi" href="css/tamatrashi.css" rel="stylesheet">');
    $('.project-view').addClass("tamatrashiBGC");
    //A thing Called stress Project
    $('.project-name-fill').text("Tamatrashi");
    setTimeout(function(){
        i=0;
        $('.project-content').html(tamatrashiPageHeader);
        $('.tamatrashi-content').html();
    },1000.5); 
}

