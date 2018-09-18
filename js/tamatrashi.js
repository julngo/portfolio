function openWindow(){
    $('.project-view').addClass("transform-active");
    $('.proj-buttons').addClass("active");
}
var tamatrashiPageHeader = '<div id="nav-bar"><a href="#sect-1"><div>Home</div></a><a href="#sect-2"><div>Ideas</div></a><img class="header-img" src="images/title.png"><a href="#sect-3"><div>Production</div></a><a href="#sect-4"><div>Reflection</div></a></div><div id="tamatrashi-content"></div>';

var tamatrashiPageOne = '<div class="section" id="sect-1"><div><h2>TAMATRASHI</h2><img id="img1" src="images/titlescreen.png"><p>\"You are now the caretaker of your own Tamatrashi: a digital pet that you can access on your computer! They love your attention! However, it turns out your beloved pet is actually kind of a brat and is very touchy. Make them happy! You’ve got to, you’re their parent! Who said this would be easy...or even plausible. You’ll soon find that raising your very own Tamatrashi isn’t as fun as you thought it would be.\"</p> <p>Tamatrashi is a basic pet caring game. The players have to keep their pet’s statistics high while managing their money at the same time. This game was made so that the player cannot win. We studied the philosophical idea of absurdism and was tasked with making an absurd game.</p><p>March – June 2018</p><p>My role was the developer and graphic artist</p></div></div><div  class="section" id="sect-2"><div><h2>IDEATION & CONCEPTUALIZATION</h2><p>Some first initial absurdism games we covered was “Save the Date” an “tickets please” where no matter what the player did, they would always lose, and they wouldn’t know that until playing the game for a while. We wanted to make a game where it followed that similar idea. </p> <p>We wanted to draw some inspiration from other genres of game besides survival. We eventually came to a game that several of us played in the past, Tomogatchi games from Bandai.  We wanted to put a lot of different ideas to make the game in depth but had to cut back because of time restraints and unnecessary features.</p></div></div><div  class="section" id="sect-3"><p>Pixel art was the main style of the game. These are the assets that I made for the game. We wanted to eventual make the pet’s statistics bars that would fill or empty as the stats changed but didn’t have time to implement it in. We used unity to code the game, heavily relying on online tutorials.</p><img src="images/Food.png"><img src="images/Happiness.png"><img src="images/heart.png"><img src="images/Hygiene.png"></div><div class="section" id="sect-4"></div>';

function projectThree(){
    openWindow();
    $('head').append('<link class="tamatrashi" href="css/tamatrashi.css" rel="stylesheet">');
    $('.project-view').addClass("tamatrashiBGC");
    //A thing Called stress Project
    $('.project-name-fill').text("Tamatrashi");
    setTimeout(function(){
        i=0;
        $('.project-content').html(tamatrashiPageHeader);
        $('#tamatrashi-content').html(tamatrashiPageOne);
    },1000.5); 
}