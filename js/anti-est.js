function openWindow(){
    $('.project-view').addClass("transform-active");
    $('.proj-buttons').addClass("active");
}

var antiEstHeader = '<div class="nav-bar"><div onclick="openNav()" class="transform return"></div><div class="left-side transform"><div><h1></h1></div></div><div class="right-side transform"><div><div class="transform option" onclick="fillAEPageOne()"></div><div class="transform option" onclick="fillAEPageTwo()"></div><div class="transform option" onclick="fillAEPageThree()"></div><div class="transform option" onclick="fillAEPageFour()"></div></div></div><div class="AE-content" ></div>';

var AEPageOne = '<p>T-bone landjaeger ball tip, bresaola tri-tip spare ribs brisket kevin rump drumstick leberkas shoulder pork loin boudin. Shankle tongue leberkas, biltong strip steak filet mignon corned beef tail spare ribs. Corned beef capicola jowl doner, strip steak hamburger ribeye tail ground round ball tip beef. Leberkas frankfurter fatback andouille, bresaola ribeye strip steak pastrami tri-tip capicola kevin sirloin ham. Bresaola jerky picanha ham shoulder, pork belly cupim jowl filet mignon chuck strip steak.</p>'; 

var AEPageTwo = '<p>Strip steak venison doner leberkas. Corned beef brisket pork belly andouille, t-bone turducken jowl pork loin pastrami. Venison tongue cupim rump ham hock drumstick turducken pork loin. Flank burgdoggen corned beef, shoulder tongue chuck porchetta tail pancetta chicken. Short ribs sausage ground round, shoulder pork belly meatloaf capicola. Turducken doner andouille, beef landjaeger ham hock pork loin kevin tail jerky pork belly chuck brisket. Jowl burgdoggen tongue, landjaeger brisket ball tip alcatra short loin drumstick leberkas.</p>';

var AEPageThree = '<p>Jowl burgdoggen porchetta brisket, shoulder meatball pancetta pork picanha turkey pork loin leberkas. Flank sausage short loin, pastrami porchetta cow beef kevin jowl cupim leberkas jerky turkey chicken chuck. Turducken beef ribs ribeye ball tip, meatloaf tri-tip shank salami filet mignon pork belly. Buffalo corned beef drumstick porchetta alcatra, short ribs doner pork belly chicken beef tri-tip turducken bacon.</p>';

var AEPageFour = '<p></p>Pork chop pancetta sirloin brisket pastrami leberkas filet mignon. Pork belly bresaola sausage capicola picanha tenderloin andouille. Turducken biltong tail, cupim kielbasa pastrami pancetta tongue landjaeger beef pig andouille prosciutto spare ribs swine. Buffalo tongue bacon, turducken prosciutto pancetta biltong fatback tail porchetta bresaola kevin pork chop. Boudin ribeye corned beef ball tip strip steak biltong swine tail beef sausage hamburger doner pancetta kevin. Spare ribs turkey ground round jerky shank, turducken boudin pork chop sausage sirloin short loin cupim pork belly.';

function projectFour(){
    openWindow();
    $('head').append('<link class="anti-est" href="css/anti-est.css" rel="stylesheet">');
    $('.project-view').addClass("AEBGC");
    //zuluMenu Project
    $('.project-name-fill').text("Anti-Establishment");
    setTimeout(function(){
        i=0;
        $('.project-content').html(antiEstHeader);
    },1000.5); 
}

function fillAEPageOne(){
    $('.AE-content').html(AEPageOne);
    closeNav();
}

function fillAEPageTwo(){
    $('.AE-content').html(AEPageTwo);
    closeNav();
}

function fillAEPageThree(){
    $('.AE-content').html(AEPageThree);
    closeNav();
}

function fillAEPageFour(){
    $('.AE-content').html(AEPageFour);
    closeNav();
}

function closeNav(){
    $('.left-side').css("width", "0%");
    $('.right-side').css("width", "0%");
    $('.option').css("width", "0px");
    $('.return').css("width", "50px");
    $('.AE-content').css("width", "90%");
}

function openNav(){
    $('.AE-content').remove();
    $('.project-content').append("<div class='AE-content' ></div>");
    $('.left-side').css("width", "35%");
    $('.right-side').css("width", "65%");
    $('.option').css("width", "100px");
    $('.return').css("width", "0px");
    $('.AE-content').css("width", "0%");
}