export default function navbarScroll() {

    let $navbar = $('#navbar-scroll-tq');

    if (!$navbar.length) {
        return;
    }

    let $navbarBrand = $navbar.find('.navbar-brand > img');
    let $imgSrc = $navbarBrand.attr('src');

    $navbar.on('show.bs.collapse', function (e) {
        $navbar.addClass('bg-white').find('.nav-link').addClass('nav-link-black');
        // switch img src
        $navbarBrand.attr('src',$imgSrc.replace(/logo-v3/,'logo-v2'));
    });

    $navbar.on('hide.bs.collapse', function (e) {
        if ($navbar.offset().top <= $navbar.height() * 1.5) {
            $navbar.removeClass('bg-white').find('.nav-link').removeClass('nav-link-black');
        }
    })

    window.onscroll = function () {
        let $navbarLink = $navbar.find('.nav-link');

        if ($navbar.offset().top >= $navbar.height() * 1.5) {
            $navbar.addClass('box-shadow bg-white');
            $navbarLink.addClass('nav-link-black');
            // switch img src
            $navbarBrand.attr('src',$imgSrc.replace(/logo-v3/,'logo-v2'));

        } else {
            $navbar.removeClass('box-shadow bg-white');
            $navbarLink.removeClass('nav-link-black');
            // switch img src
            $navbarBrand.attr('src',$imgSrc.replace(/logo-v2/,'logo-v3'));
        }
    };
}
