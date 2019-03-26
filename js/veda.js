function openWindow(){
    $('.project-view').addClass("transform-active");
    $('.proj-buttons').addClass("active");
}

var i = 0;
function openVeda(){
    openWindow();
    $('head').append('<link class="veda" href="css/veda.css" rel="stylesheet">');
    //Veda Project
    $('.project-name-fill').text("VEDA AI");
    setTimeout(function(){
        i=0;
        fillHeaderVeda();
        fillContentVeda();
    },1000.5); 
}

function fillHeaderVeda(){
    $('.navbar').html('<img id="headerPic" src="images/VedaAI_Logo.png"> <hr> <div class="items"><p>Project Manager, Lead App Developer</p><p>//</p><p>Jan 2018 - Mar 2018</p></div>');
    
}

function fillContentVeda(){
    $('.project-content').html(VedaPageOne);
}

function removeVedaContent(){
    $('.project-content').empty;
}

function fillVedaPageOne(){
    removeVedaContent();
    $('.project-content').html(VedaPageOne);
}

var VedaPageOne =  '<div class="iframe-container"><iframe src="https://player.vimeo.com/video/259108778" width="640" height="360" frameborder="0" allowfullscreen></iframe> </div> <div> <p>Veda is a study into speculative design to push our creative borders and conceptualize a solution to assist the elderly with newer technology. </p>  <h3>Problem/Topic & Purpose:</h3> <div class="p-75"> <p> We found that our Senior Citizen population is rapidly growing and have the largest rate of naturally caused disabilities with the lowest rate of full recovery. On top of the fear of physical injury, our senior population also face major problems of loneliness and lack of independence with their limited option of going to a nursing home. </p> <p> A technology that already worked toward giving the elderly more independence was LifeAlert. We studied what LifeAlert had that made it successful, what made it unsuccessful and the changes that were made since its release. From then on, we found that there hasn’t been many technologies specifically made to assist our senior population. We wanted to create an idea that could help fix these problems and investigated different existing and possible future technologies that could be utilized to create a new solution. </p><p>What would be a solution to assist the elderly without having them to learn how to use new technology? We think that having a technology that could assist this growing minority is relevant now and even more so as everyone grows older.</p> <h3>My Contribution:</h3><p>I helped with drawing out the mock-ups, flow, and did the entire development of the app. The app would be used by the caretaker while the wearable was for our targeted demographic. </p> </div><img id="vedaGIF"src="images/vedaRecording.gif">';