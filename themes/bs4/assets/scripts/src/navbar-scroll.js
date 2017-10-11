export default function navbarScroll() {
    window.onscroll = function () {
        let navbar = $('#navbar-tq');
        if (navbar.offset().top >= navbar.height()) {
            navbar.addClass('box-shadow');
        } else {
            navbar.removeClass('box-shadow');
        }
    };
}