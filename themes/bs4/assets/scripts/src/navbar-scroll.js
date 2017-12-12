export default function navbarScroll() {

    let $navbar = $('#navbar-tq');

    if (!$navbar.length) {
        return;
    }

    window.onscroll = function () {
        let $navbarLink = $navbar.find('.nav-link');
        if ($navbar.offset().top >= $navbar.height() * 1.5) {
            $navbar.addClass('box-shadow bg-white');
            $navbarLink.addClass('nav-link-black');
        } else {
            $navbar.removeClass('box-shadow bg-white');
            $navbarLink.removeClass('nav-link-black');
        }
    };
}
