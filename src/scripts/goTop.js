function gotoTop(min_height){
    var gotoTop_html = '<div id="gotoTop"></div>';
    $("#page-top").append(gotoTop_html);
    $("#gotoTop").click(
        function(){$('html,body').animate({scrollTop:0},700);
        }).hover(
        function(){$(this).addClass("hover");},
        function(){$(this).removeClass("hover");
        });
    min_height ? min_height = min_height : min_height = 400;
    $(window).scroll(function(){
        var s = $(window).scrollTop();
        if( s > min_height){
            $("#gotoTop").fadeIn(100);
        }else{
            $("#gotoTop").fadeOut(200);
        };
    });
};
gotoTop();