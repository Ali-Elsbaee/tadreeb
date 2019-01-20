
$('document').ready(function(){

    $('#signup-modal').find('.modal-body').css('height', $(window).height()/2);

    $('.login-btn').click(function () {
        $('#login-modal').modal('show');
    });

    $('.signup-btn').click(function () {
        $('#signup-modal').modal('show');
    });

    var course_img = $('.photo .img-responsive');

    function square_img() {
        course_img.css('height', $('.course').width());
    }

    square_img();

    $(window).resize(function(){
        console.log($(this).height(), $('.modal-content').height() );
        square_img()
    });

    function close_menu() {
        nav.css('transform', 'translateY(-'+ nav_trans +'px)');
        $('.bar').css('top','20px');
        $('.bar:nth-of-type(2)').css({'transform':'rotate(45deg)', 'transform-origin': '50% 50% 0'});
    }

    function open_menu() {
        nav.css('transform', 'translateY(0px)');
        $('.bar').css('top','10px');
        $('.bar:nth-of-type(2)').css({'transform':'rotate(225deg)', 'transform-origin': '73% 105% 0'});
    }

    var nav = $('nav'),
        nav_trans = nav.height() - 60,
        btn = $('.menu-btn');

    $(window).scroll(function () {
        if ($(this).scrollTop > 800) {
            if ( $(this).width() >= 966) {
                open_menu();
            } else {
                close_menu();
            }
        } else {
            nav.css('transform', 'translateY(-105%)');
        }
    });

    btn.click(function (event) {

        if ( nav.css('transform') === 'matrix(1, 0, 0, 1, 0, 0)' ) {
            close_menu();
        } else {
            open_menu();
            event.stopPropagation();
        }
    });

    $('html').click(function (e) {
        if ( $(window).width() < 966 && $(window).scrollTop > 800 && !nav.is(e.target) && nav.has(e.target).length === 0) {
            close_menu();
        }
    })

});