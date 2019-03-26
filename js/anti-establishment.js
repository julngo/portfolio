function openWindow(){
    $('.project-view').addClass("transform-active");
    $('.proj-buttons').addClass("active");
}

var i = 0;
function openAE(){
    openWindow();
    $('head').append('<link class="AE" href="css/anti-establishment.css" rel="stylesheet">');
    //Veda Project
    $('.project-name-fill').text("The Anti-Establishment");
    setTimeout(function(){
        i=0;
        fillHeaderAE();
        fillContentAE();
    },1000.5); 
}

function fillHeaderAE(){
    $('.navbar').html('<img id="headerPic" src="images/AELogo_T.png"> <hr> <div class="items"><p>Project Management, Website Design & Development</p><p>//</p><p>Mar 2018 - May 2018</p></div>');
    
}

function fillContentAE(){
    $('.project-content').html(AEPage);
}

function removeAEContent(){
    $('.project-content').empty;
}

function fillAEPageOne(){
    removeVedaContent();
    $('.project-content').html(AEPage);
}

var AEPage =  '<video width="100%" src="images/video.mp4" type="video/mp4" frameborder="0" controls encrypted-media; picture-in-picture" allowfullscreen></video> <div> <p>An alternate reality murder mystery game located on University of Washington Bothell campus.</p> <h3>What is This?</h3> <p>The Anti-Establishment project is a low-tech alternate reality game with a focus on educating the players about the negative effects of climate change on low-income communities and how it is exaggerated by the influence of large corporations. The game took place at the University of Washington Bothell campus where the players followed a map and actor’s information to gather evidence. This three month endeavor was focused on researching causes of environmental change, what kinds of corporations have negative influences, and a study to create engaging methods of raising awareness in our campus community through the process of iteration of ideas and content, user research play-testing, marketing, and execution.</p> <p> A large part of the project included creating the experience. In order to do that, we focused on marketing and building the experience that leads into the game. This included us building a website, creating and updating a Twitter and Instagram account, and print posters around the campus.</p> <h3> Game Day Execution <h3><div class="iframe-container"><iframe width="100%" src="https://www.youtube.com/embed/2yOEXXb2rrk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>';