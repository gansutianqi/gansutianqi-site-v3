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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2U4NTNkYWI0ZGUyMTA4NDY2MDkiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9iczQvYXNzZXRzL3N0eWxlcy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL25hdmJhci1zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvc2xpY2stY2Fyb3VzZWwtYmFubmVyLTEuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvc2xpY2stY2Fyb3VzZWwtcGFydG5lci5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZXMvYnM0L2Fzc2V0cy9zY3JpcHRzL3NyYy9zbGljay1jYXJvdXNlbC1uZXdzLXBvc3QtZmVhdHVyZWQtaW1hZ2VzLmpzIl0sIm5hbWVzIjpbIiQiLCJXT1ciLCJpbml0IiwibmF2YmFyU2Nyb2xsIiwiJG5hdmJhciIsImxlbmd0aCIsIiRuYXZiYXJCcmFuZCIsImZpbmQiLCIkaW1nU3JjIiwiYXR0ciIsIm9uIiwiZSIsImFkZENsYXNzIiwicmVwbGFjZSIsIm9mZnNldCIsInRvcCIsImhlaWdodCIsInJlbW92ZUNsYXNzIiwid2luZG93Iiwib25zY3JvbGwiLCIkbmF2YmFyTGluayIsInNsaWNrQ2Fyb3VzZWxCYW5uZXIxIiwic2xpY2siLCJkb3RzIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJpbmZpbml0ZSIsImFycm93cyIsImZhZGUiLCJzbGlja0Nhcm91c2VsUGFydG5lciIsInNwZWVkIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInNsaWNrQ2Fyb3VzZWxOZXdzUG9zdEZlYXR1cmVkSW1hZ2VzIl0sIm1hcHBpbmdzIjoiO0FBQUE7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LGdCQUFPLEtBTDBDO0FBTWpEO0FBQ0FJLG9CQUFZLENBQ1I7QUFDSUMsd0JBQVcsSUFEZjtBQUVJQyxzQkFBUztBQUNMVCw4QkFBYyxDQURUO0FBRUxDLGdDQUFnQixDQUZYO0FBR0xDLDBCQUFVLElBSEw7QUFJTEgsc0JBQU07QUFKRDtBQUZiLFNBRFEsRUFVUjtBQUNJUyx3QkFBWSxHQURoQjtBQUVJQyxzQkFBVTtBQUNOVCw4QkFBYyxDQURSO0FBRU5DLGdDQUFnQixDQUZWO0FBR05DLDBCQUFVLElBSEo7QUFJTkgsc0JBQU07QUFKQTtBQUZkLFNBVlEsRUFtQlI7QUFDSVMsd0JBQVksR0FEaEI7QUFFSUMsc0JBQVU7QUFDTlQsOEJBQWMsQ0FEUjtBQUVOQyxnQ0FBZ0IsQ0FGVjtBQUdOQywwQkFBVSxJQUhKO0FBSU5ILHNCQUFNO0FBSkE7QUFGZCxTQW5CUTtBQVBxQyxLQUFyRDtBQXFDSCxDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjZTg1M2RhYjRkZTIxMDg0NjYwOSIsIi8qXG4gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gfCBhcHBcbiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiB8XG4gfCBDcmVhdGVkIGJ5IHB1Z3VvaG9uZyBvbiAwOS8xMC8yMDE3LlxuIHxcbiB8XG4qL1xuXG4vLyBhZGQgc3R5bGVcbi8vIGV4dHJhY3QgYnkgd2VicGFjayB0byBhc3NldHMvc3R5bGVzL2NzcyBmb2xkZXJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3Njc3MvYXBwLnNjc3MnO1xuXG5pbXBvcnQgbmF2YmFyU2Nyb2xsIGZyb20gJy4vbmF2YmFyLXNjcm9sbC5qcyc7XG5pbXBvcnQgc2xpY2tDYXJvdXNlbEJhbm5lcjEgZnJvbSAnLi9zbGljay1jYXJvdXNlbC1iYW5uZXItMSc7XG5pbXBvcnQgc2xpY2tDYXJvdXNlbFBhcnRuZXIgZnJvbSAnLi9zbGljay1jYXJvdXNlbC1wYXJ0bmVyJztcbmltcG9ydCBzbGlja0Nhcm91c2VsTmV3c1Bvc3RGZWF0dXJlZEltYWdlcyBmcm9tICcuL3NsaWNrLWNhcm91c2VsLW5ld3MtcG9zdC1mZWF0dXJlZC1pbWFnZXMnO1xuXG4kKGZ1bmN0aW9uKCQpIHtcbiAgICBuZXcgV09XKCkuaW5pdCgpO1xuICAgIG5hdmJhclNjcm9sbCgpO1xuICAgIHNsaWNrQ2Fyb3VzZWxCYW5uZXIxKCk7XG4gICAgc2xpY2tDYXJvdXNlbFBhcnRuZXIoKTtcbiAgICBzbGlja0Nhcm91c2VsTmV3c1Bvc3RGZWF0dXJlZEltYWdlcygpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90aGVtZXMvYnM0L2Fzc2V0cy9zY3JpcHRzL3NyYy9hcHAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdGhlbWVzL2JzNC9hc3NldHMvc3R5bGVzL3Njc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2YmFyU2Nyb2xsKCkge1xuXG4gICAgbGV0ICRuYXZiYXIgPSAkKCcjbmF2YmFyLXNjcm9sbC10cScpO1xuXG4gICAgaWYgKCEkbmF2YmFyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0ICRuYXZiYXJCcmFuZCA9ICRuYXZiYXIuZmluZCgnLm5hdmJhci1icmFuZCA+IGltZycpO1xuICAgIGxldCAkaW1nU3JjID0gJG5hdmJhckJyYW5kLmF0dHIoJ3NyYycpO1xuXG4gICAgJG5hdmJhci5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICRuYXZiYXIuYWRkQ2xhc3MoJ2JnLXdoaXRlJykuZmluZCgnLm5hdi1saW5rJykuYWRkQ2xhc3MoJ25hdi1saW5rLWJsYWNrJyk7XG4gICAgICAgIC8vIHN3aXRjaCBpbWcgc3JjXG4gICAgICAgICRuYXZiYXJCcmFuZC5hdHRyKCdzcmMnLCRpbWdTcmMucmVwbGFjZSgvbG9nby12My8sJ2xvZ28tdjInKSk7XG4gICAgfSk7XG5cbiAgICAkbmF2YmFyLm9uKCdoaWRlLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCRuYXZiYXIub2Zmc2V0KCkudG9wIDw9ICRuYXZiYXIuaGVpZ2h0KCkgKiAxLjUpIHtcbiAgICAgICAgICAgICRuYXZiYXIucmVtb3ZlQ2xhc3MoJ2JnLXdoaXRlJykuZmluZCgnLm5hdi1saW5rJykucmVtb3ZlQ2xhc3MoJ25hdi1saW5rLWJsYWNrJyk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgJG5hdmJhckxpbmsgPSAkbmF2YmFyLmZpbmQoJy5uYXYtbGluaycpO1xuXG4gICAgICAgIGlmICgkbmF2YmFyLm9mZnNldCgpLnRvcCA+PSAkbmF2YmFyLmhlaWdodCgpICogMS41KSB7XG4gICAgICAgICAgICAkbmF2YmFyLmFkZENsYXNzKCdib3gtc2hhZG93IGJnLXdoaXRlJyk7XG4gICAgICAgICAgICAkbmF2YmFyTGluay5hZGRDbGFzcygnbmF2LWxpbmstYmxhY2snKTtcbiAgICAgICAgICAgIC8vIHN3aXRjaCBpbWcgc3JjXG4gICAgICAgICAgICAkbmF2YmFyQnJhbmQuYXR0cignc3JjJywkaW1nU3JjLnJlcGxhY2UoL2xvZ28tdjMvLCdsb2dvLXYyJykpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbmF2YmFyLnJlbW92ZUNsYXNzKCdib3gtc2hhZG93IGJnLXdoaXRlJyk7XG4gICAgICAgICAgICAkbmF2YmFyTGluay5yZW1vdmVDbGFzcygnbmF2LWxpbmstYmxhY2snKTtcbiAgICAgICAgICAgIC8vIHN3aXRjaCBpbWcgc3JjXG4gICAgICAgICAgICAkbmF2YmFyQnJhbmQuYXR0cignc3JjJywkaW1nU3JjLnJlcGxhY2UoL2xvZ28tdjIvLCdsb2dvLXYzJykpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL25hdmJhci1zY3JvbGwuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlja0Nhcm91c2VsQmFubmVyMSgpIHtcbiAgICAkKCcuc2xpY2stY2Fyb3VzZWwtYmFubmVyLTEnKS5zbGljayh7XG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIHNsaWRlc1RvU2hvdzoxLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDoxLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgYXJyb3dzOmZhbHNlLFxuICAgICAgICBmYWRlOnRydWVcbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL3NsaWNrLWNhcm91c2VsLWJhbm5lci0xLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpY2tDYXJvdXNlbFBhcnRuZXIoKSB7XG4gICAgJCgnLnNsaWNrLWNhcm91c2VsLXBhcnRuZXInKS5zbGljayh7XG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6MTIwMCxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczp7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OSxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTc2LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gWW91IGNhbiB1bnNsaWNrIGF0IGEgZ2l2ZW4gYnJlYWtwb2ludCBub3cgYnkgYWRkaW5nOlxuICAgICAgICAgICAgLy8gc2V0dGluZ3M6IFwidW5zbGlja1wiXG4gICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIGEgc2V0dGluZ3Mgb2JqZWN0XG4gICAgICAgIF1cbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL3NsaWNrLWNhcm91c2VsLXBhcnRuZXIuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlja0Nhcm91c2VsTmV3c1Bvc3RGZWF0dXJlZEltYWdlcygpIHtcbiAgICAkKCcuc2xpY2stY2Fyb3VzZWwtbmV3cy1wb3N0LWZlYXR1cmVkLWltYWdlcycpLnNsaWNrKHtcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgc2xpZGVzVG9TaG93OjIsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOjEsXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBhcnJvd3M6ZmFsc2UsXG4gICAgICAgIC8vZmFkZTp0cnVlLFxuICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDoyNTAwLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOntcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0pO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90aGVtZXMvYnM0L2Fzc2V0cy9zY3JpcHRzL3NyYy9zbGljay1jYXJvdXNlbC1uZXdzLXBvc3QtZmVhdHVyZWQtaW1hZ2VzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==