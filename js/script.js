$(document).ready(function () {
    sizeBags();
    affixFooter();
});

$(window).load(function () {
    sizeBags();
    affixFooter();
    $counter = 0;
    $('.fade-bag').each(function() {
        if ($(this).is(':visible')) {
            var delay = 300 * $counter;
            $(this).delay(delay).animate({opacity: 1}, 800);
            $counter = $counter + 1;
        } else {
            $(this).css("opacity", 1);
        }
    });
});

$(window).resize(function () {
    sizeBags();
    affixFooter();
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

function affixFooter() {
    var windowHeight = $(window).height();
    var bodyHeight = $('body').height();
    if (bodyHeight < windowHeight) {
        $('footer').addClass("fixed-footer");
    } else {
        $('footer').removeClass("fixed-footer");
    }
}