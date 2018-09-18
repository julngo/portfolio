function openWindow(){
    $('.project-view').addClass("transform-active");
    $('.proj-buttons').addClass("active");
}

var antiEstHeader = '<div class="nav-bar"><div onclick="openNav()" class="transform return"></div><div class="left-side transform"><div><h1></h1></div></div><div class="right-side transform"><div><div class="transform option" onclick="fillAEPageOne()"></div><div><div class="transform option" onclick="fillAEPageTwo()"></div></div></div></div><div class="AE-content" ></div>';

var AEPageOne = '<p>T-bone landjaeger ball tip, bresaola tri-tip spare ribs brisket kevin rump drumstick leberkas shoulder pork loin boudin. Shankle tongue leberkas, biltong strip steak filet mignon corned beef tail spare ribs. Corned beef capicola jowl doner, strip steak hamburger ribeye tail ground round ball tip beef. Leberkas frankfurter fatback andouille, bresaola ribeye strip steak pastrami tri-tip capicola kevin sirloin ham. Bresaola jerky picanha ham shoulder, pork belly cupim jowl filet mignon chuck strip steak.</p>'; 

var AEPageTwo = '';

var AEPageThree = '';

var AEPageThree = '';

function projectFour(){
    openWindow();
    $('head').append('<link class="anti-est" href="css/anti-est.css" rel="stylesheet">');
    $('.project-view').addClass("AEBGC");
    //zuluMenu Project
    $('.project-name-fill').text("Anti-Establishment");
    setTimeout(function(){
        i=0;
        $('.project-content').html(antiEstHeader);
        $('.AE-content').html();
    },1000.5); 
}

function fillAEPageOne(){
    closeNav();
}

function closeNav(){
    $('.left-side').css("width", "0%");
    $('.right-side').css("width", "0%");
    $('.option').css("width", "0px");
    $('.return').css("width", "100px");
}

function openNav(){
    $('.left-side').css("width", "35%");
    $('.right-side').css("width", "65%");
    $('.option').css("width", "100px");
    $('.return').css("width", "0px");
}