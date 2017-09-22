
/**
 * Created by Administrator on 2017/9/18.
 */

$('#js-grid-slider-projects').cubeportfolio({
    layoutMode: 'slider',
    drag: true,
    auto: true,
    autoTimeout: 3000,
    autoPauseOnHover: true,
    showNavigation: false,
    showPagination: false,
    rewindNav: true,
    scrollByPage: false,
    gridAdjustment: 'responsive',
    mediaQueries: [{
        width: 1500,
        cols: 5
    }, {
        width: 1100,
        cols: 4
    }, {
        width: 800,
        cols: 3
    }, {
        width: 480,
        cols: 2
    }, {
        width: 320,
        cols: 1
    }],
    gapHorizontal: 0,
    gapVertical: 5,
    caption: 'fadeIn',
    displayType: 'fadeIn',
    displayTypeSpeed: 100,
});
