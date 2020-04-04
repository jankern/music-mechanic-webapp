
// Webpack imports
// Global var to use it across components
import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import '../scss/styles.scss';

// Class and Function Imports
import Main from './template.main';

// Class intialisation
let main = new Main();

// JQuery $(document).ready function 
$(function() {

    //$('.tabs').tabs();
    // var elem = document.querySelector('.tabs');
    // var options = {};
    // var instance = M.Tabs.init(elem, options);

    main.checkForTransparentNavbar().debounce();

    $(document).ready(function () {
        $('.parallax').parallax();
        $('.scrollspy').scrollSpy();
        var sideNav = $('.sidenav').sidenav({"edge": "right"});
        $('#sidenav-close').click(function(){
            $('.sidenav').sidenav('close')
        })
        //$('#sub-nav-aside').css({"opacity":"1.0"});
        //main.checkForSubNavAsidePosition('init');
    });

    $(window).on('scroll', function () {
        main.checkForTransparentNavbar().debounce();
        //main.checkForSubNavAsidePosition('scroll');
    });

    $(window).on('resize', function () {
        //main.checkForSubNavAsidePosition('resize');
    });

    console.log('jquery is ready');

});