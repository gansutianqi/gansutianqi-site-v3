export default function navbarScroll() {
    window.onscroll = function () {
        let $navbar = $('#navbar-tq');
        let $navbarLink = $navbar.find('.nav-link');
        if ($navbar.offset().top >= $navbar.height()*1.5) {
            $navbar.addClass('box-shadow bg-white');
            $navbarLink.addClass('nav-link-black');
        } else {
            $navbar.removeClass('box-shadow bg-white');
            $navbarLink.removeClass('nav-link-black');
        }
    };
}
