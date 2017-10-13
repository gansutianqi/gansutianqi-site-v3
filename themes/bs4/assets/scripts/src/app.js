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

import navbarScroll from './navbar-scroll.js'

$(function($) {
    navbarScroll();

    $('.slick-carousel-banner-1').slick({
        dots: true,
        slidesToShow:1,
        slidesToScroll:1,
        infinite: true,
        arrows:false,
        fade:true
    });
});