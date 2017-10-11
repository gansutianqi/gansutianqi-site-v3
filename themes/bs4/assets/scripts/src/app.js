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
});