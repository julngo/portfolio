function openWindow(){
    $('.project-view').addClass("transform-active");
    $('.proj-buttons').addClass("active");
}

var i = 0;
function openLucid(){
    openWindow();
    $('head').append('<link class="lucid" href="css/lucid.css" rel="stylesheet">');
    //Veda Project
    $('.project-name-fill').text("Lucid Screens");
    setTimeout(function(){
        i=0;
        fillHeaderLucid();
        fillContentLucid();
    },1000.5); 
}

function fillHeaderLucid(){
    $('.navbar').html('<img id="headerPic" src="images/uwbLogo.png"> <hr> <div class="items"><p>Project Manager, UX Researcher & Designer</p><p>//</p><p>Oct 2018 - Dec 2018</p></div>');
    
}

function fillContentLucid(){
    $('.project-content').html(LucidPageOne);
}

function removeLucidContent(){
    $('.project-content').empty;
}

function fillLucidPageOne(){
    removeVedaContent();
    $('.project-content').html(LucidPageOne);
}

var LucidPageOne =  ' <img class="firstImage" src="images/lucid_screen.jpg"> <p>The Lucid Screens project is qualitative research in collaboration with the University of Washington Bothell Sustainability Department to increase the usage of the interactive screens around campus.</p>  <h3>What is Lucid Screens?</h3> <img class="p-33-l" src="images/lucid_img1.jpg"> <p>This project was a research and observation of a technology located in each building of the University of Washington Bothell campus to explain why they weren\'t being used and to create a possible solution. This project was in collaboration with the University of Washington Bothell Sustainability department. The screens are interactive and displays sustainability information for each building and how much energy they\'re using.</p>  <p><a href="https://www.lucidconnects.com" class="blue-text">Lucid Screens</a> was installed by the stakeholder\'s boss several years ago. It uses their database and content management system to collect data in the buildings and display them onto the screens. The user interface of the CMS and database was difficult to use without assistance from customer support and the interactive screen layouts themselves weren\'t very pleasing to the eye.</p>  <h3>Problems</h3>  <p>We quickly discovered that it would be difficult to observe and take qualitative data of the interaction between the screens because they\'re never used. Instead, we had to set up observation days where we asked a class or group of students to interact with the screens in order for us to observe and then question about their experience.</p>  <p>We intended to play and see what data layouts were possible with Lucid Screens. However, we weren\'t able to update the screens to new layouts. Their system recently updated in the last year as well, transfering from flash to html5/javascript. The screens that are currently on campus weren’t updated and could not be updated before the end of the project date.</p>  <h3>Documents</h3>  <a href="docs/Coding_Data.pdf" rel="noopener noreferrer" target="_blank" class="myButton"> Coded Data Analysis </a> <a href="docs/finalReport_Lucid.pdf" rel="noopener noreferrer" target="_blank" class="myButton"> Final Report </a>  <h3>What I Did</h3> <p>I was the main point of contact between the stakeholder and our team informing them of information and arranging meeting times for check-ins on our progress. I also scheduled times when we would do the observations. I assisted with coding through the data we collected and learned more about the functionality of the Lucid Screens.</p>';