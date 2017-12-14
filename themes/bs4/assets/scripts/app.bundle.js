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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDNmYmI5NWMxY2Y2YmY0N2YwNTUiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9iczQvYXNzZXRzL3N0eWxlcy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL25hdmJhci1zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvc2xpY2stY2Fyb3VzZWwtYmFubmVyLTEuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvc2xpY2stY2Fyb3VzZWwtcGFydG5lci5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvYnM0L2Fzc2V0cy9zY3JpcHRzL3NyYy9zbGljay1jYXJvdXNlbC1uZXdzLXBvc3QtZmVhdHVyZWQtaW1hZ2VzLmpzIl0sIm5hbWVzIjpbIiQiLCJuYXZiYXJTY3JvbGwiLCIkbmF2YmFyIiwibGVuZ3RoIiwib24iLCJlIiwiYWRkQ2xhc3MiLCJmaW5kIiwib2Zmc2V0IiwidG9wIiwiaGVpZ2h0IiwicmVtb3ZlQ2xhc3MiLCJ3aW5kb3ciLCJvbnNjcm9sbCIsIiRuYXZiYXJMaW5rIiwic2xpY2tDYXJvdXNlbEJhbm5lcjEiLCJzbGljayIsImRvdHMiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImluZmluaXRlIiwiYXJyb3dzIiwiZmFkZSIsInNsaWNrQ2Fyb3VzZWxQYXJ0bmVyIiwic3BlZWQiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwic2xpY2tDYXJvdXNlbE5ld3NQb3N0RmVhdHVyZWRJbWFnZXMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkM2ZiYjk1YzFjZjZiZjQ3ZjA1NSIsIi8qXG4gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gfCBhcHBcbiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiB8XG4gfCBDcmVhdGVkIGJ5IHB1Z3VvaG9uZyBvbiAwOS8xMC8yMDE3LlxuIHxcbiB8XG4qL1xuXG4vLyBhZGQgc3R5bGVcbi8vIGV4dHJhY3QgYnkgd2VicGFjayB0byBhc3NldHMvc3R5bGVzL2NzcyBmb2xkZXJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3Njc3MvYXBwLnNjc3MnO1xuXG5pbXBvcnQgbmF2YmFyU2Nyb2xsIGZyb20gJy4vbmF2YmFyLXNjcm9sbC5qcyc7XG5pbXBvcnQgc2xpY2tDYXJvdXNlbEJhbm5lcjEgZnJvbSAnLi9zbGljay1jYXJvdXNlbC1iYW5uZXItMSc7XG5pbXBvcnQgc2xpY2tDYXJvdXNlbFBhcnRuZXIgZnJvbSAnLi9zbGljay1jYXJvdXNlbC1wYXJ0bmVyJztcbmltcG9ydCBzbGlja0Nhcm91c2VsTmV3c1Bvc3RGZWF0dXJlZEltYWdlcyBmcm9tICcuL3NsaWNrLWNhcm91c2VsLW5ld3MtcG9zdC1mZWF0dXJlZC1pbWFnZXMnO1xuXG4kKGZ1bmN0aW9uKCQpIHtcbiAgICBuYXZiYXJTY3JvbGwoKTtcbiAgICBzbGlja0Nhcm91c2VsQmFubmVyMSgpO1xuICAgIHNsaWNrQ2Fyb3VzZWxQYXJ0bmVyKCk7XG4gICAgc2xpY2tDYXJvdXNlbE5ld3NQb3N0RmVhdHVyZWRJbWFnZXMoKTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvYXBwLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3RoZW1lcy9iczQvYXNzZXRzL3N0eWxlcy9zY3NzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdmJhclNjcm9sbCgpIHtcblxuICAgIGxldCAkbmF2YmFyID0gJCgnI25hdmJhci1zY3JvbGwtdHEnKTtcblxuICAgIGlmICghJG5hdmJhci5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICRuYXZiYXIub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAkbmF2YmFyLmFkZENsYXNzKCdiZy13aGl0ZScpLmZpbmQoJy5uYXYtbGluaycpLmFkZENsYXNzKCduYXYtbGluay1ibGFjaycpO1xuICAgIH0pO1xuXG4gICAgJG5hdmJhci5vbignaGlkZS5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICgkbmF2YmFyLm9mZnNldCgpLnRvcCA8PSAkbmF2YmFyLmhlaWdodCgpICogMS41KSB7XG4gICAgICAgICAgICAkbmF2YmFyLnJlbW92ZUNsYXNzKCdiZy13aGl0ZScpLmZpbmQoJy5uYXYtbGluaycpLnJlbW92ZUNsYXNzKCduYXYtbGluay1ibGFjaycpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0ICRuYXZiYXJMaW5rID0gJG5hdmJhci5maW5kKCcubmF2LWxpbmsnKTtcbiAgICAgICAgaWYgKCRuYXZiYXIub2Zmc2V0KCkudG9wID49ICRuYXZiYXIuaGVpZ2h0KCkgKiAxLjUpIHtcbiAgICAgICAgICAgICRuYXZiYXIuYWRkQ2xhc3MoJ2JveC1zaGFkb3cgYmctd2hpdGUnKTtcbiAgICAgICAgICAgICRuYXZiYXJMaW5rLmFkZENsYXNzKCduYXYtbGluay1ibGFjaycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJG5hdmJhci5yZW1vdmVDbGFzcygnYm94LXNoYWRvdyBiZy13aGl0ZScpO1xuICAgICAgICAgICAgJG5hdmJhckxpbmsucmVtb3ZlQ2xhc3MoJ25hdi1saW5rLWJsYWNrJyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvbmF2YmFyLXNjcm9sbC5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWNrQ2Fyb3VzZWxCYW5uZXIxKCkge1xuICAgICQoJy5zbGljay1jYXJvdXNlbC1iYW5uZXItMScpLnNsaWNrKHtcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgc2xpZGVzVG9TaG93OjEsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOjEsXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBhcnJvd3M6ZmFsc2UsXG4gICAgICAgIGZhZGU6dHJ1ZVxuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvc2xpY2stY2Fyb3VzZWwtYmFubmVyLTEuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlja0Nhcm91c2VsUGFydG5lcigpIHtcbiAgICAkKCcuc2xpY2stY2Fyb3VzZWwtcGFydG5lcicpLnNsaWNrKHtcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDoxMjAwLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOntcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY5LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NzYsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBZb3UgY2FuIHVuc2xpY2sgYXQgYSBnaXZlbiBicmVha3BvaW50IG5vdyBieSBhZGRpbmc6XG4gICAgICAgICAgICAvLyBzZXR0aW5nczogXCJ1bnNsaWNrXCJcbiAgICAgICAgICAgIC8vIGluc3RlYWQgb2YgYSBzZXR0aW5ncyBvYmplY3RcbiAgICAgICAgXVxuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvc2xpY2stY2Fyb3VzZWwtcGFydG5lci5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWNrQ2Fyb3VzZWxOZXdzUG9zdEZlYXR1cmVkSW1hZ2VzKCkge1xuICAgICQoJy5zbGljay1jYXJvdXNlbC1uZXdzLXBvc3QtZmVhdHVyZWQtaW1hZ2VzJykuc2xpY2soe1xuICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICBzbGlkZXNUb1Nob3c6MixcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6MSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIGFycm93czpmYWxzZSxcbiAgICAgICAgLy9mYWRlOnRydWUsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OjI1MDAsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6e1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSk7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL3NsaWNrLWNhcm91c2VsLW5ld3MtcG9zdC1mZWF0dXJlZC1pbWFnZXMuanMiXSwic291cmNlUm9vdCI6IiJ9