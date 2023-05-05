$(document).ready(function(){
    $('.navbar-nav').on('click', 'a', function() {
        $('.navbar-nav a.active').removeClass('active');
        $(this).addClass('active');
    })
});

$(document).ready(function() {
    var scrollOffset = 121;
    $(window).scroll(function() {
        var scrollPos = $(document).scrollTop();
        $('.nav-link').each(function() {
            var currLink = $(this);
            var href = currLink.attr('href');
            var refElement = $('#' + href.split('#')[1]);
            if (refElement[0] == undefined) {
                console.log(href);
            }
            if (refElement[0].offsetTop - scrollOffset <= scrollPos && refElement[0].offsetTop - scrollOffset + refElement[0].offsetHeight > scrollPos) {
                $('.nav-link').removeClass('active');
                currLink.addClass('active');
            }
        });
    });
});

$(document).ready(function(){
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".navbar").addClass("fixed-top");
        } else {
            $(".navbar").removeClass("fixed-top");
        }
    });
});