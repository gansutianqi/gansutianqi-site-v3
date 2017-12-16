/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(1);

var _app2 = _interopRequireDefault(_app);

var _navbarScroll = __webpack_require__(2);

var _navbarScroll2 = _interopRequireDefault(_navbarScroll);

var _slickCarouselBanner = __webpack_require__(3);

var _slickCarouselBanner2 = _interopRequireDefault(_slickCarouselBanner);

var _slickCarouselPartner = __webpack_require__(4);

var _slickCarouselPartner2 = _interopRequireDefault(_slickCarouselPartner);

var _slickCarouselNewsPostFeaturedImages = __webpack_require__(5);

var _slickCarouselNewsPostFeaturedImages2 = _interopRequireDefault(_slickCarouselNewsPostFeaturedImages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function ($) {
  new WOW().init();
  (0, _navbarScroll2.default)();
  (0, _slickCarouselBanner2.default)();
  (0, _slickCarouselPartner2.default)();
  (0, _slickCarouselNewsPostFeaturedImages2.default)();
}); /*
     |--------------------------------------------------------------------------
     | app
     |--------------------------------------------------------------------------
     |
     | Created by puguohong on 09/10/2017.
     |
     |
    */

// add style
// extract by webpack to assets/styles/css folder

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = navbarScroll;
function navbarScroll() {

    var $navbar = $('#navbar-scroll-tq');

    if (!$navbar.length) {
        return;
    }

    $navbar.on('show.bs.collapse', function (e) {
        $navbar.addClass('bg-white').find('.nav-link').addClass('nav-link-black');
    });

    $navbar.on('hide.bs.collapse', function (e) {
        if ($navbar.offset().top <= $navbar.height() * 1.5) {
            $navbar.removeClass('bg-white').find('.nav-link').removeClass('nav-link-black');
        }
    });

    window.onscroll = function () {
        var $navbarLink = $navbar.find('.nav-link');
        if ($navbar.offset().top >= $navbar.height() * 1.5) {
            $navbar.addClass('box-shadow bg-white');
            $navbarLink.addClass('nav-link-black');
        } else {
            $navbar.removeClass('box-shadow bg-white');
            $navbarLink.removeClass('nav-link-black');
        }
    };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = slickCarouselBanner1;
function slickCarouselBanner1() {
    $('.slick-carousel-banner-1').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        fade: true
    });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = slickCarouselPartner;
function slickCarouselPartner() {
    $('.slick-carousel-partner').slick({
        dots: true,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        }]
    });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = slickCarouselNewsPostFeaturedImages;
function slickCarouselNewsPostFeaturedImages() {
    $('.slick-carousel-news-post-featured-images').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        //fade:true,
        responsive: [{
            breakpoint: 2500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }]
    });
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTkwMjM0ZTAxNmUzYWFkNGFmODMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9iczQvYXNzZXRzL3N0eWxlcy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL25hdmJhci1zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvc2xpY2stY2Fyb3VzZWwtYmFubmVyLTEuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvc2xpY2stY2Fyb3VzZWwtcGFydG5lci5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvYnM0L2Fzc2V0cy9zY3JpcHRzL3NyYy9zbGljay1jYXJvdXNlbC1uZXdzLXBvc3QtZmVhdHVyZWQtaW1hZ2VzLmpzIl0sIm5hbWVzIjpbIiQiLCJXT1ciLCJpbml0IiwibmF2YmFyU2Nyb2xsIiwiJG5hdmJhciIsImxlbmd0aCIsIm9uIiwiZSIsImFkZENsYXNzIiwiZmluZCIsIm9mZnNldCIsInRvcCIsImhlaWdodCIsInJlbW92ZUNsYXNzIiwid2luZG93Iiwib25zY3JvbGwiLCIkbmF2YmFyTGluayIsInNsaWNrQ2Fyb3VzZWxCYW5uZXIxIiwic2xpY2siLCJkb3RzIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJpbmZpbml0ZSIsImFycm93cyIsImZhZGUiLCJzbGlja0Nhcm91c2VsUGFydG5lciIsInNwZWVkIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInNsaWNrQ2Fyb3VzZWxOZXdzUG9zdEZlYXR1cmVkSW1hZ2VzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBcUNILEMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU5MDIzNGUwMTZlM2FhZDRhZjgzIiwiLypcbiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiB8IGFwcFxuIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIHxcbiB8IENyZWF0ZWQgYnkgcHVndW9ob25nIG9uIDA5LzEwLzIwMTcuXG4gfFxuIHxcbiovXG5cbi8vIGFkZCBzdHlsZVxuLy8gZXh0cmFjdCBieSB3ZWJwYWNrIHRvIGFzc2V0cy9zdHlsZXMvY3NzIGZvbGRlclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvc2Nzcy9hcHAuc2Nzcyc7XG5cbmltcG9ydCBuYXZiYXJTY3JvbGwgZnJvbSAnLi9uYXZiYXItc2Nyb2xsLmpzJztcbmltcG9ydCBzbGlja0Nhcm91c2VsQmFubmVyMSBmcm9tICcuL3NsaWNrLWNhcm91c2VsLWJhbm5lci0xJztcbmltcG9ydCBzbGlja0Nhcm91c2VsUGFydG5lciBmcm9tICcuL3NsaWNrLWNhcm91c2VsLXBhcnRuZXInO1xuaW1wb3J0IHNsaWNrQ2Fyb3VzZWxOZXdzUG9zdEZlYXR1cmVkSW1hZ2VzIGZyb20gJy4vc2xpY2stY2Fyb3VzZWwtbmV3cy1wb3N0LWZlYXR1cmVkLWltYWdlcyc7XG5cbiQoZnVuY3Rpb24oJCkge1xuICAgIG5ldyBXT1coKS5pbml0KCk7XG4gICAgbmF2YmFyU2Nyb2xsKCk7XG4gICAgc2xpY2tDYXJvdXNlbEJhbm5lcjEoKTtcbiAgICBzbGlja0Nhcm91c2VsUGFydG5lcigpO1xuICAgIHNsaWNrQ2Fyb3VzZWxOZXdzUG9zdEZlYXR1cmVkSW1hZ2VzKCk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90aGVtZXMvYnM0L2Fzc2V0cy9zdHlsZXMvc2Nzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZiYXJTY3JvbGwoKSB7XG5cbiAgICBsZXQgJG5hdmJhciA9ICQoJyNuYXZiYXItc2Nyb2xsLXRxJyk7XG5cbiAgICBpZiAoISRuYXZiYXIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAkbmF2YmFyLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgJG5hdmJhci5hZGRDbGFzcygnYmctd2hpdGUnKS5maW5kKCcubmF2LWxpbmsnKS5hZGRDbGFzcygnbmF2LWxpbmstYmxhY2snKTtcbiAgICB9KTtcblxuICAgICRuYXZiYXIub24oJ2hpZGUuYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoJG5hdmJhci5vZmZzZXQoKS50b3AgPD0gJG5hdmJhci5oZWlnaHQoKSAqIDEuNSkge1xuICAgICAgICAgICAgJG5hdmJhci5yZW1vdmVDbGFzcygnYmctd2hpdGUnKS5maW5kKCcubmF2LWxpbmsnKS5yZW1vdmVDbGFzcygnbmF2LWxpbmstYmxhY2snKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCAkbmF2YmFyTGluayA9ICRuYXZiYXIuZmluZCgnLm5hdi1saW5rJyk7XG4gICAgICAgIGlmICgkbmF2YmFyLm9mZnNldCgpLnRvcCA+PSAkbmF2YmFyLmhlaWdodCgpICogMS41KSB7XG4gICAgICAgICAgICAkbmF2YmFyLmFkZENsYXNzKCdib3gtc2hhZG93IGJnLXdoaXRlJyk7XG4gICAgICAgICAgICAkbmF2YmFyTGluay5hZGRDbGFzcygnbmF2LWxpbmstYmxhY2snKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRuYXZiYXIucmVtb3ZlQ2xhc3MoJ2JveC1zaGFkb3cgYmctd2hpdGUnKTtcbiAgICAgICAgICAgICRuYXZiYXJMaW5rLnJlbW92ZUNsYXNzKCduYXYtbGluay1ibGFjaycpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL25hdmJhci1zY3JvbGwuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlja0Nhcm91c2VsQmFubmVyMSgpIHtcbiAgICAkKCcuc2xpY2stY2Fyb3VzZWwtYmFubmVyLTEnKS5zbGljayh7XG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIHNsaWRlc1RvU2hvdzoxLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDoxLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgYXJyb3dzOmZhbHNlLFxuICAgICAgICBmYWRlOnRydWVcbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL3NsaWNrLWNhcm91c2VsLWJhbm5lci0xLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpY2tDYXJvdXNlbFBhcnRuZXIoKSB7XG4gICAgJCgnLnNsaWNrLWNhcm91c2VsLXBhcnRuZXInKS5zbGljayh7XG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6MTIwMCxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczp7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OSxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTc2LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gWW91IGNhbiB1bnNsaWNrIGF0IGEgZ2l2ZW4gYnJlYWtwb2ludCBub3cgYnkgYWRkaW5nOlxuICAgICAgICAgICAgLy8gc2V0dGluZ3M6IFwidW5zbGlja1wiXG4gICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIGEgc2V0dGluZ3Mgb2JqZWN0XG4gICAgICAgIF1cbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL3NsaWNrLWNhcm91c2VsLXBhcnRuZXIuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlja0Nhcm91c2VsTmV3c1Bvc3RGZWF0dXJlZEltYWdlcygpIHtcbiAgICAkKCcuc2xpY2stY2Fyb3VzZWwtbmV3cy1wb3N0LWZlYXR1cmVkLWltYWdlcycpLnNsaWNrKHtcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgc2xpZGVzVG9TaG93OjIsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOjEsXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBhcnJvd3M6ZmFsc2UsXG4gICAgICAgIC8vZmFkZTp0cnVlLFxuICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDoyNTAwLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOntcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0pO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90aGVtZXMvYnM0L2Fzc2V0cy9zY3JpcHRzL3NyYy9zbGljay1jYXJvdXNlbC1uZXdzLXBvc3QtZmVhdHVyZWQtaW1hZ2VzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==