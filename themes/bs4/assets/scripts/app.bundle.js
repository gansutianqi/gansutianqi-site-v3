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
  (0, _navbarScroll2.default)();
  (0, _slickCarouselBanner2.default)();
  (0, _slickCarouselPartner2.default)();
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

    var $navbar = $('#navbar-tq');

    if (!$navbar.length) {
        return;
    }

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
exports.default = slideCarouselBanner1;
function slideCarouselBanner1() {
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
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 480,
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzAzYzk0ZTMwZGRkNzI4ZTIzZDYiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3RoZW1lcy9iczQvYXNzZXRzL3N0eWxlcy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL25hdmJhci1zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvc2xpY2stY2Fyb3VzZWwtYmFubmVyLTEuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvc2xpY2stY2Fyb3VzZWwtcGFydG5lci5qcyJdLCJuYW1lcyI6WyIkIiwibmF2YmFyU2Nyb2xsIiwiJG5hdmJhciIsImxlbmd0aCIsIndpbmRvdyIsIm9uc2Nyb2xsIiwiJG5hdmJhckxpbmsiLCJmaW5kIiwib2Zmc2V0IiwidG9wIiwiaGVpZ2h0IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNsaWRlQ2Fyb3VzZWxCYW5uZXIxIiwic2xpY2siLCJkb3RzIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJpbmZpbml0ZSIsImFycm93cyIsImZhZGUiLCJzbGlja0Nhcm91c2VsUGFydG5lciIsInNwZWVkIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDakRBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFoQkE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBT0FBLEVBQUUsVUFBU0EsQ0FBVCxFQUFZO0FBQ1Y7QUFDQTtBQUNBO0FBQ0gsQ0FKRCxFOzs7Ozs7QUNsQkEseUM7Ozs7Ozs7Ozs7OztrQkNBd0JDLFk7QUFBVCxTQUFTQSxZQUFULEdBQXdCOztBQUVuQyxRQUFJQyxVQUFVRixFQUFFLFlBQUYsQ0FBZDs7QUFFQSxRQUFJLENBQUNFLFFBQVFDLE1BQWIsRUFBcUI7QUFDakI7QUFDSDs7QUFFREMsV0FBT0MsUUFBUCxHQUFrQixZQUFZO0FBQzFCLFlBQUlDLGNBQWNKLFFBQVFLLElBQVIsQ0FBYSxXQUFiLENBQWxCO0FBQ0EsWUFBSUwsUUFBUU0sTUFBUixHQUFpQkMsR0FBakIsSUFBd0JQLFFBQVFRLE1BQVIsS0FBbUIsR0FBL0MsRUFBb0Q7QUFDaERSLG9CQUFRUyxRQUFSLENBQWlCLHFCQUFqQjtBQUNBTCx3QkFBWUssUUFBWixDQUFxQixnQkFBckI7QUFDSCxTQUhELE1BR087QUFDSFQsb0JBQVFVLFdBQVIsQ0FBb0IscUJBQXBCO0FBQ0FOLHdCQUFZTSxXQUFaLENBQXdCLGdCQUF4QjtBQUNIO0FBQ0osS0FURDtBQVVILEM7Ozs7Ozs7Ozs7OztrQkNsQnVCQyxvQjtBQUFULFNBQVNBLG9CQUFULEdBQWdDO0FBQzNDYixNQUFFLDBCQUFGLEVBQThCYyxLQUE5QixDQUFvQztBQUNoQ0MsY0FBTSxJQUQwQjtBQUVoQ0Msc0JBQWEsQ0FGbUI7QUFHaENDLHdCQUFlLENBSGlCO0FBSWhDQyxrQkFBVSxJQUpzQjtBQUtoQ0MsZ0JBQU8sS0FMeUI7QUFNaENDLGNBQUs7QUFOMkIsS0FBcEM7QUFRSCxDOzs7Ozs7Ozs7Ozs7a0JDVHVCQyxvQjtBQUFULFNBQVNBLG9CQUFULEdBQWdDO0FBQzNDckIsTUFBRSx5QkFBRixFQUE2QmMsS0FBN0IsQ0FBbUM7QUFDL0JDLGNBQU0sSUFEeUI7QUFFL0JHLGtCQUFVLEtBRnFCO0FBRy9CQyxnQkFBUSxLQUh1QjtBQUkvQkcsZUFBTyxHQUp3QjtBQUsvQk4sc0JBQWMsQ0FMaUI7QUFNL0JDLHdCQUFnQixDQU5lO0FBTy9CTSxvQkFBWSxDQUNSO0FBQ0lDLHdCQUFXLElBRGY7QUFFSUMsc0JBQVM7QUFDTFQsOEJBQWMsQ0FEVDtBQUVMQyxnQ0FBZ0IsQ0FGWDtBQUdMQywwQkFBVSxJQUhMO0FBSUxILHNCQUFNO0FBSkQ7QUFGYixTQURRLEVBVVI7QUFDSVMsd0JBQVksSUFEaEI7QUFFSUMsc0JBQVU7QUFDTlQsOEJBQWMsQ0FEUjtBQUVOQyxnQ0FBZ0IsQ0FGVjtBQUdOQywwQkFBVSxJQUhKO0FBSU5ILHNCQUFNO0FBSkE7QUFGZCxTQVZRLEVBbUJSO0FBQ0lTLHdCQUFZLEdBRGhCO0FBRUlDLHNCQUFVO0FBQ05ULDhCQUFjLENBRFI7QUFFTkMsZ0NBQWdCLENBRlY7QUFHTkMsMEJBQVUsSUFISjtBQUlOSCxzQkFBTTtBQUpBO0FBRmQsU0FuQlEsRUE0QlI7QUFDSVMsd0JBQVksR0FEaEI7QUFFSUMsc0JBQVU7QUFDTlQsOEJBQWMsQ0FEUjtBQUVOQyxnQ0FBZ0IsQ0FGVjtBQUdOQywwQkFBVSxJQUhKO0FBSU5ILHNCQUFNO0FBSkE7QUFPZDtBQUNBO0FBQ0E7QUFYQSxTQTVCUTtBQVBtQixLQUFuQztBQWlESCxDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzMDNjOTRlMzBkZGQ3MjhlMjNkNiIsIi8qXG4gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gfCBhcHBcbiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiB8XG4gfCBDcmVhdGVkIGJ5IHB1Z3VvaG9uZyBvbiAwOS8xMC8yMDE3LlxuIHwgXG4gfFxuKi9cblxuLy8gYWRkIHN0eWxlXG4vLyBleHRyYWN0IGJ5IHdlYnBhY2sgdG8gYXNzZXRzL3N0eWxlcy9jc3MgZm9sZGVyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9zY3NzL2FwcC5zY3NzJztcblxuaW1wb3J0IG5hdmJhclNjcm9sbCBmcm9tICcuL25hdmJhci1zY3JvbGwuanMnO1xuaW1wb3J0IHNsaWRlQ2Fyb3VzZWxCYW5uZXIxIGZyb20gJy4vc2xpY2stY2Fyb3VzZWwtYmFubmVyLTEnO1xuaW1wb3J0IHNsaWRlQ2Fyb3VzZWxQYXJ0bmVyIGZyb20gJy4vc2xpY2stY2Fyb3VzZWwtcGFydG5lcic7XG5cbiQoZnVuY3Rpb24oJCkge1xuICAgIG5hdmJhclNjcm9sbCgpO1xuICAgIHNsaWRlQ2Fyb3VzZWxCYW5uZXIxKCk7XG4gICAgc2xpZGVDYXJvdXNlbFBhcnRuZXIoKTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90aGVtZXMvYnM0L2Fzc2V0cy9zdHlsZXMvc2Nzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZiYXJTY3JvbGwoKSB7XG5cbiAgICBsZXQgJG5hdmJhciA9ICQoJyNuYXZiYXItdHEnKTtcblxuICAgIGlmICghJG5hdmJhci5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0ICRuYXZiYXJMaW5rID0gJG5hdmJhci5maW5kKCcubmF2LWxpbmsnKTtcbiAgICAgICAgaWYgKCRuYXZiYXIub2Zmc2V0KCkudG9wID49ICRuYXZiYXIuaGVpZ2h0KCkgKiAxLjUpIHtcbiAgICAgICAgICAgICRuYXZiYXIuYWRkQ2xhc3MoJ2JveC1zaGFkb3cgYmctd2hpdGUnKTtcbiAgICAgICAgICAgICRuYXZiYXJMaW5rLmFkZENsYXNzKCduYXYtbGluay1ibGFjaycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJG5hdmJhci5yZW1vdmVDbGFzcygnYm94LXNoYWRvdyBiZy13aGl0ZScpO1xuICAgICAgICAgICAgJG5hdmJhckxpbmsucmVtb3ZlQ2xhc3MoJ25hdi1saW5rLWJsYWNrJyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvbmF2YmFyLXNjcm9sbC5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlQ2Fyb3VzZWxCYW5uZXIxKCkge1xuICAgICQoJy5zbGljay1jYXJvdXNlbC1iYW5uZXItMScpLnNsaWNrKHtcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgc2xpZGVzVG9TaG93OjEsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOjEsXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBhcnJvd3M6ZmFsc2UsXG4gICAgICAgIGZhZGU6dHJ1ZVxuICAgIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RoZW1lcy9iczQvYXNzZXRzL3NjcmlwdHMvc3JjL3NsaWNrLWNhcm91c2VsLWJhbm5lci0xLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpY2tDYXJvdXNlbFBhcnRuZXIoKSB7XG4gICAgJCgnLnNsaWNrLWNhcm91c2VsLXBhcnRuZXInKS5zbGljayh7XG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6MTIwMCxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczp7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA2MDAsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFlvdSBjYW4gdW5zbGljayBhdCBhIGdpdmVuIGJyZWFrcG9pbnQgbm93IGJ5IGFkZGluZzpcbiAgICAgICAgICAgIC8vIHNldHRpbmdzOiBcInVuc2xpY2tcIlxuICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBhIHNldHRpbmdzIG9iamVjdFxuICAgICAgICBdXG4gICAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdGhlbWVzL2JzNC9hc3NldHMvc2NyaXB0cy9zcmMvc2xpY2stY2Fyb3VzZWwtcGFydG5lci5qcyJdLCJzb3VyY2VSb290IjoiIn0=