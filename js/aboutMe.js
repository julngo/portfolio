function openAMWindow(){
    $('.preference-window').addClass("active-state-1");
    $('.preference-buttons').addClass("active");
    console.log("check");
}

function closeWindowAM(){
    $('.aboutMe').remove();
    $('.preference-window').removeClass("active-state-1");
    $('.preference-buttons').removeClass("active");
    $('.tabs').remove();
}

$('.preference-buttons div').hover(
    //onhover
    function(){
        $('.preference-buttons .red').append("<img src='images/close.svg' width='60%' class='close'>");
        $('.preference-buttons .yellow').append("<img src='images/minimize.svg' width='60%' class='minimize'>");
    },
    //exithover
    function(){
        $('.preference-buttons div img').remove();
    }
);

function openAboutMe(){
    openAMWindow();
    $('head').append('<link class="aboutMe" href="css/aboutMe.css" rel="stylesheet">');
    
    $('.preference-name').append('<div class="tabs"> <div onclick="openFirstTab()" class="selected" id="firstTab">Overview</div> <div onclick="openTab2()" id="tab2">Resumè</div> <div onclick="openTab3()" id="tab3">Storage</div> <div onclick="openTab4()" id="tab4">Contact</div> <div onclick="openLastTab()"id="lastTab">Game</div> </div>');
    openTab1
}

function reset(){
    $('#firstTab').removeClass('selected');
    $('#tab2').removeClass('selected');
    $('#tab3').removeClass('selected');
    $('#tab4').removeClass('selected');
    $('#lastTab').removeClass('selected');
    $('.preference-body').empty;
}

function openFirstTab(){
    reset();
    $('#firstTab').addClass('selected');
    
}

function openTab2(){
    reset();
    $('#tab2').addClass('selected');
}

function openTab3(){
    reset();
    $('#tab3').addClass('selected');
}

function openTab4(){
    reset();
    $('#tab4').addClass('selected');
}

function openLastTab(){
    reset();
    $('#lastTab').addClass('selected');
}