$(document).ready(function () {
    //$('#contact-form').on('submit', function () {
      //  $('#response-modal').openModal();
        //return false;
    //});
    sizeBags();
});

$(window).load(function () {
    sizeBags();
    $counter = 0;
    $('.fade-bag').each(function() {
        if ($(this).is(':visible')) {
            var delay = 300 * $counter;
            $(this).delay(delay).animate({opacity: 1}, 800);
            $counter = $counter + 1;
        }
    });
});

$(window).resize(function () {
    sizeBags();
});

function sizeBags() {
    var aspect = $(window).width() / $(window).height();

    if (aspect > 1) {
        $('.portrait').addClass("landscape");
        $('.portrait').removeClass("portrait");
    } else {
        $('.landscape').addClass("portrait");
        $('.landscape').removeClass("landscape");
    }
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
} 