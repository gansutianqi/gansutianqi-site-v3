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
import styles from '../../styles/scss/app.scss';

import navbarScroll from './navbar-scroll.js';
import slickCarouselBanner1 from './slick-carousel-banner-1';
import slickCarouselPartner from './slick-carousel-partner';
import slickCarouselNewsPostFeaturedImages from './slick-carousel-news-post-featured-images';

$(function($) {
    new WOW().init();
    navbarScroll();
    slickCarouselBanner1();
    slickCarouselPartner();
    slickCarouselNewsPostFeaturedImages();
});
