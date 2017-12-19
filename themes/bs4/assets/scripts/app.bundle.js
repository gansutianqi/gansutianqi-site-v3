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

var _slickCarouselAnli = __webpack_require__(6);

var _slickCarouselAnli2 = _interopRequireDefault(_slickCarouselAnli);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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
$(function ($) {
  new WOW().init();
  (0, _navbarScroll2.default)();
  (0, _slickCarouselBanner2.default)();
  (0, _slickCarouselPartner2.default)();
  (0, _slickCarouselNewsPostFeaturedImages2.default)();
  (0, _slickCarouselAnli2.default)();
});

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

    var $navbarBrand = $navbar.find('.navbar-brand > img');
    var $imgSrc = $navbarBrand.attr('src');

    $navbar.on('show.bs.collapse', function (e) {
        $navbar.addClass('bg-white').find('.nav-link').addClass('nav-link-black');
        // switch img src
        $navbarBrand.attr('src', $imgSrc.replace(/logo-v3/, 'logo-v2'));
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
            // switch img src
            $navbarBrand.attr('src', $imgSrc.replace(/logo-v3/, 'logo-v2'));
        } else {
            $navbar.removeClass('box-shadow bg-white');
            $navbarLink.removeClass('nav-link-black');
            // switch img src
            $navbarBrand.attr('src', $imgSrc.replace(/logo-v2/, 'logo-v3'));
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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = slickCarouselAnli;
function slickCarouselAnli() {
    $('.slick-carousel-anli').slick({
        dots: true,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        //centerPadding: '50px',
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
                dots: true,
                centerMode: false
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                centerMode: false
            }
        }]
    });
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzg0YzQ1YjJhYzUwNzYwMjRlNjUiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9iczQvYXNzZXRzL3N0eWxlcy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL25hdmJhci1zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvc2xpY2stY2Fyb3VzZWwtYmFubmVyLTEuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvc2xpY2stY2Fyb3VzZWwtcGFydG5lci5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvYnM0L2Fzc2V0cy9zY3JpcHRzL3NyYy9zbGljay1jYXJvdXNlbC1uZXdzLXBvc3QtZmVhdHVyZWQtaW1hZ2VzLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL3NsaWNrLWNhcm91c2VsLWFubGkuanMiXSwibmFtZXMiOlsiJCIsIldPVyIsImluaXQiLCJuYXZiYXJTY3JvbGwiLCIkbmF2YmFyIiwibGVuZ3RoIiwiJG5hdmJhckJyYW5kIiwiZmluZCIsIiRpbWdTcmMiLCJhdHRyIiwib24iLCJlIiwiYWRkQ2xhc3MiLCJyZXBsYWNlIiwib2Zmc2V0IiwidG9wIiwiaGVpZ2h0IiwicmVtb3ZlQ2xhc3MiLCJ3aW5kb3ciLCJvbnNjcm9sbCIsIiRuYXZiYXJMaW5rIiwic2xpY2tDYXJvdXNlbEJhbm5lcjEiLCJzbGljayIsImRvdHMiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImluZmluaXRlIiwiYXJyb3dzIiwiZmFkZSIsInNsaWNrQ2Fyb3VzZWxQYXJ0bmVyIiwic3BlZWQiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwic2xpY2tDYXJvdXNlbE5ld3NQb3N0RmVhdHVyZWRJbWFnZXMiLCJzbGlja0Nhcm91c2VsQW5saSIsImNlbnRlck1vZGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ2pEQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQWxCQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFTQUEsRUFBRSxVQUFTQSxDQUFULEVBQVk7QUFDVixNQUFJQyxHQUFKLEdBQVVDLElBQVY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsQ0FQRCxFOzs7Ozs7QUNwQkEseUM7Ozs7Ozs7Ozs7OztrQkNBd0JDLFk7QUFBVCxTQUFTQSxZQUFULEdBQXdCOztBQUVuQyxRQUFJQyxVQUFVSixFQUFFLG1CQUFGLENBQWQ7O0FBRUEsUUFBSSxDQUFDSSxRQUFRQyxNQUFiLEVBQXFCO0FBQ2pCO0FBQ0g7O0FBRUQsUUFBSUMsZUFBZUYsUUFBUUcsSUFBUixDQUFhLHFCQUFiLENBQW5CO0FBQ0EsUUFBSUMsVUFBVUYsYUFBYUcsSUFBYixDQUFrQixLQUFsQixDQUFkOztBQUVBTCxZQUFRTSxFQUFSLENBQVcsa0JBQVgsRUFBK0IsVUFBVUMsQ0FBVixFQUFhO0FBQ3hDUCxnQkFBUVEsUUFBUixDQUFpQixVQUFqQixFQUE2Qkws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Q0FEUjtBQUVOQyxnQ0FBZ0IsQ0FGVjtBQUdOQywwQkFBVSxJQUhKO0FBSU5ILHNCQUFNLElBSkE7QUFLTmEsNEJBQVk7QUFMTjtBQUZkLFNBVlEsRUFvQlI7QUFDSUosd0JBQVksR0FEaEI7QUFFSUMsc0JBQVU7QUFDTlQsOEJBQWMsQ0FEUjtBQUVOQyxnQ0FBZ0IsQ0FGVjtBQUdOQywwQkFBVSxJQUhKO0FBSU5ILHNCQUFNLElBSkE7QUFLTmEsNEJBQVk7QUFMTjtBQUZkLFNBcEJRO0FBVGdCLEtBQWhDO0FBeUNILEMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDM4NGM0NWIyYWM1MDc2MDI0ZTY1IiwiLypcbiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiB8IGFwcFxuIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIHxcbiB8IENyZWF0ZWQgYnkgcHVndW9ob25nIG9uIDA5LzEwLzIwMTcuXG4gfFxuIHxcbiovXG5cbi8vIGFkZCBzdHlsZVxuLy8gZXh0cmFjdCBieSB3ZWJwYWNrIHRvIGFzc2V0cy9zdHlsZXMvY3NzIGZvbGRlclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvc2Nzcy9hcHAuc2Nzcyc7XG5cbmltcG9ydCBuYXZiYXJTY3JvbGwgZnJvbSAnLi9uYXZiYXItc2Nyb2xsLmpzJztcbmltcG9ydCBzbGlja0Nhcm91c2VsQmFubmVyMSBmcm9tICcuL3NsaWNrLWNhcm91c2VsLWJhbm5lci0xJztcbmltcG9ydCBzbGlja0Nhcm91c2VsUGFydG5lciBmcm9tICcuL3NsaWNrLWNhcm91c2VsLXBhcnRuZXInO1xuaW1wb3J0IHNsaWNrQ2Fyb3VzZWxOZXdzUG9zdEZlYXR1cmVkSW1hZ2VzIGZyb20gJy4vc2xpY2stY2Fyb3VzZWwtbmV3cy1wb3N0LWZlYXR1cmVkLWltYWdlcyc7XG5pbXBvcnQgc2xpY2tDYXJvdXNlbEFubGkgZnJvbSAnLi9zbGljay1jYXJvdXNlbC1hbmxpJztcblxuJChmdW5jdGlvbigkKSB7XG4gICAgbmV3IFdPVygpLmluaXQoKTtcbiAgICBuYXZiYXJTY3JvbGwoKTtcbiAgICBzbGlja0Nhcm91c2VsQmFubmVyMSgpO1xuICAgIHNsaWNrQ2Fyb3VzZWxQYXJ0bmVyKCk7XG4gICAgc2xpY2tDYXJvdXNlbE5ld3NQb3N0RmVhdHVyZWRJbWFnZXMoKTtcbiAgICBzbGlja0Nhcm91c2VsQW5saSgpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90aGVtZXMvYnM0L2Fzc2V0cy9zY3JpcHRzL3NyYy9hcHAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdGhlbWVzL2JzNC9hc3NldHMvc3R5bGVzL3Njc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2YmFyU2Nyb2xsKCkge1xuXG4gICAgbGV0ICRuYXZiYXIgPSAkKCcjbmF2YmFyLXNjcm9sbC10cScpO1xuXG4gICAgaWYgKCEkbmF2YmFyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0ICRuYXZiYXJCcmFuZCA9ICRuYXZiYXIuZmluZCgnLm5hdmJhci1icmFuZCA+IGltZycpO1xuICAgIGxldCAkaW1nU3JjID0gJG5hdmJhckJyYW5kLmF0dHIoJ3NyYycpO1xuXG4gICAgJG5hdmJhci5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICRuYXZiYXIuYWRkQ2xhc3MoJ2JnLXdoaXRlJykuZmluZCgnLm5hdi1saW5rJykuYWRkQ2xhc3MoJ25hdi1saW5rLWJsYWNrJyk7XG4gICAgICAgIC8vIHN3aXRjaCBpbWcgc3JjXG4gICAgICAgICRuYXZiYXJCcmFuZC5hdHRyKCdzcmMnLCRpbWdTcmMucmVwbGFjZSgvbG9nby12My8sJ2xvZ28tdjInKSk7XG4gICAgfSk7XG5cbiAgICAkbmF2YmFyLm9uKCdoaWRlLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCRuYXZiYXIub2Zmc2V0KCkudG9wIDw9ICRuYXZiYXIuaGVpZ2h0KCkgKiAxLjUpIHtcbiAgICAgICAgICAgICRuYXZiYXIucmVtb3ZlQ2xhc3MoJ2JnLXdoaXRlJykuZmluZCgnLm5hdi1saW5rJykucmVtb3ZlQ2xhc3MoJ25hdi1saW5rLWJsYWNrJyk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgJG5hdmJhckxpbmsgPSAkbmF2YmFyLmZpbmQoJy5uYXYtbGluaycpO1xuXG4gICAgICAgIGlmICgkbmF2YmFyLm9mZnNldCgpLnRvcCA+PSAkbmF2YmFyLmhlaWdodCgpICogMS41KSB7XG4gICAgICAgICAgICAkbmF2YmFyLmFkZENsYXNzKCdib3gtc2hhZG93IGJnLXdoaXRlJyk7XG4gICAgICAgICAgICAkbmF2YmFyTGluay5hZGRDbGFzcygnbmF2LWxpbmstYmxhY2snKTtcbiAgICAgICAgICAgIC8vIHN3aXRjaCBpbWcgc3JjXG4gICAgICAgICAgICAkbmF2YmFyQnJhbmQuYXR0cignc3JjJywkaW1nU3JjLnJlcGxhY2UoL2xvZ28tdjMvLCdsb2dvLXYyJykpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbmF2YmFyLnJlbW92ZUNsYXNzKCdib3gtc2hhZG93IGJnLXdoaXRlJyk7XG4gICAgICAgICAgICAkbmF2YmFyTGluay5yZW1vdmVDbGFzcygnbmF2LWxpbmstYmxhY2snKTtcbiAgICAgICAgICAgIC8vIHN3aXRjaCBpbWcgc3JjXG4gICAgICAgICAgICAkbmF2YmFyQnJhbmQuYXR0cignc3JjJywkaW1nU3JjLnJlcGxhY2UoL2xvZ28tdjIvLCdsb2dvLXYzJykpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL25hdmJhci1zY3JvbGwuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlja0Nhcm91c2VsQmFubmVyMSgpIHtcbiAgICAkKCcuc2xpY2stY2Fyb3VzZWwtYmFubmVyLTEnKS5zbGljayh7XG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIHNsaWRlc1RvU2hvdzoxLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDoxLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgYXJyb3dzOmZhbHNlLFxuICAgICAgICBmYWRlOnRydWVcbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL3NsaWNrLWNhcm91c2VsLWJhbm5lci0xLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpY2tDYXJvdXNlbFBhcnRuZXIoKSB7XG4gICAgJCgnLnNsaWNrLWNhcm91c2VsLXBhcnRuZXInKS5zbGljayh7XG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6MTIwMCxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczp7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OSxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTc2LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gWW91IGNhbiB1bnNsaWNrIGF0IGEgZ2l2ZW4gYnJlYWtwb2ludCBub3cgYnkgYWRkaW5nOlxuICAgICAgICAgICAgLy8gc2V0dGluZ3M6IFwidW5zbGlja1wiXG4gICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIGEgc2V0dGluZ3Mgb2JqZWN0XG4gICAgICAgIF1cbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL3NsaWNrLWNhcm91c2VsLXBhcnRuZXIuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlja0Nhcm91c2VsTmV3c1Bvc3RGZWF0dXJlZEltYWdlcygpIHtcbiAgICAkKCcuc2xpY2stY2Fyb3VzZWwtbmV3cy1wb3N0LWZlYXR1cmVkLWltYWdlcycpLnNsaWNrKHtcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgc2xpZGVzVG9TaG93OjIsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOjEsXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBhcnJvd3M6ZmFsc2UsXG4gICAgICAgIC8vZmFkZTp0cnVlLFxuICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDoyNTAwLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOntcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0pO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90aGVtZXMvYnM0L2Fzc2V0cy9zY3JpcHRzL3NyYy9zbGljay1jYXJvdXNlbC1uZXdzLXBvc3QtZmVhdHVyZWQtaW1hZ2VzLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpY2tDYXJvdXNlbEFubGkoKSB7XG4gICAgJCgnLnNsaWNrLWNhcm91c2VsLWFubGknKS5zbGljayh7XG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgLy9jZW50ZXJQYWRkaW5nOiAnNTBweCcsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAyNTAwLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90aGVtZXMvYnM0L2Fzc2V0cy9zY3JpcHRzL3NyYy9zbGljay1jYXJvdXNlbC1hbmxpLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==