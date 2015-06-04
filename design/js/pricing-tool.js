$(document).ready(function() {
    var lastOpened='.pt-language-content';
    var lastOpenedSelector='.pt-language-selector';

    $('.pt-verbatims-translation-selector').click(
        function() {
            $('.pt-results-wrapper').hide();

            $(lastOpened).hide();

            $(this).toggleClass('pt-verbatims-translation-selector-active');
            
            $(lastOpenedSelector).removeClass(lastOpenedSelector+'-active');
            $('.pt-verbatims-translation-content').fadeIn();
            $('.buttons-wrapper').fadeIn();
            lastOpened = '.pt-verbatims-translation-content';
            lastOpenedSelector = '.pt-verbatims-translation-selector';
        }
    )

    $('.pt-options-list a').hover(
        function() {
            $('.pt-outher-circle').toggleClass('pt-outher-circle-hover');
        }
    );

    $('.pt-options-list a').click(
        function() {
            $('.pt-options-list a').removeClass('pt-options-list-active');
            $(this).addClass('pt-options-list-active');
            $('.pt-inner-circle').addClass('pt-inner-circle-show');
            $('.pt-outher-circle').addClass('pt-outher-circle-active');
        }
    );

    $('.pt-language-selector').click(
        function() {
            // hide results
            $('.pt-results-wrapper').hide();
            // hide all other containers
            $(lastOpened).hide();
            // set the active class
            $(this).toggleClass('pt-language-selector-active');
            // remove all other active classes
            $(lastOpenedSelector).removeClass(lastOpenedSelector+'-active');
            // show current container and form controls
            $('.pt-language-content').fadeIn();
            $('.buttons-wrapper').fadeIn();
            lastOpened = '.pt-language-content';
            lastOpenedSelector = '.pt-questions-selector';
        }
    );

    $('.pt-sample-size-selector').click(
        function() {
            // hide results
            $('.pt-results-wrapper').hide();
            // hide all other containers
            $(lastOpened).hide();
            // set the active class
            $(this).toggleClass('pt-sample-size-selector-active');
            // remove all other active classes
            $(lastOpenedSelector).removeClass(lastOpenedSelector+'-active');
            // show current container and form controls
            $('.pt-sample-size-content').fadeIn();
            $('.buttons-wrapper').fadeIn();
            lastOpened = '.pt-sample-size-content';
            lastOpenedSelector = '.pt-sample-size-selector';
        }
    );

    $('.pt-questions-selector').click(
        function() {
            // hide results
            $('.pt-results-wrapper').hide();
            // hide all other containers
            $(lastOpened).hide();
            // set the active class
            $(this).toggleClass('pt-questions-selector-active');
            // remove all other active classes
            $(lastOpenedSelector).removeClass(lastOpenedSelector+'-active');
            // show current container and form controls
            $('.pt-questions-content').fadeIn();
            $('.buttons-wrapper').fadeIn();
            lastOpened = '.pt-questions-content';
            lastOpenedSelector = '.pt-questions-selector';
        }
    );

});
