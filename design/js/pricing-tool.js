$(document).ready(function() {
    var lastOpened='';

    var lastOpenedSelector='';

    var previousSelectedButton=null;

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
            // remove all other active classes
            $(lastOpenedSelector).removeClass(lastOpenedSelector.substring(1)+'-active');
            // set the active class
            $(this).toggleClass('pt-language-selector-active');
            // show current container and form controls
            $('.pt-language-content').fadeIn();
            $('.buttons-wrapper').fadeIn();
            lastOpened = '.pt-language-content';
            lastOpenedSelector = '.pt-language-selector';
        }
    );

    $('.pt-sample-size-selector').click(
        function() {
            // hide results
            $('.pt-results-wrapper').hide();
            // remove all other active classes
            $(lastOpenedSelector).removeClass(lastOpenedSelector.substring(1)+'-active');
            // hide all other containers
            $(lastOpened).hide();
            // set the active class
            $(this).toggleClass('pt-sample-size-selector-active');
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
            // remove all other active classes
            $(lastOpenedSelector).removeClass(lastOpenedSelector.substring(1)+'-active');
            // set the active class
            $(this).toggleClass('pt-questions-selector-active');
            // show current container and form controls
            $('.pt-questions-content').fadeIn();
            $('.buttons-wrapper').fadeIn();
            lastOpened = '.pt-questions-content';
            lastOpenedSelector = '.pt-questions-selector';
        }
    );

    $('.pt-verbatims-translation-selector').click(
        function() {
            // hide results
            $('.pt-results-wrapper').hide();
            // hide all other containers
            $(lastOpened).hide();
            // remove all other active classes
            $(lastOpenedSelector).removeClass(lastOpenedSelector.substring(1)+'-active');
            // set the active class
            $(this).toggleClass('pt-verbatims-translation-selector-active');
            
            $('.pt-verbatims-translation-content').fadeIn();
            $('.buttons-wrapper').fadeIn();
            lastOpened = '.pt-verbatims-translation-content';
            lastOpenedSelector = '.pt-verbatims-translation-selector';
        }
    )
    
    /*$('.button-verbatim-translation').click(
        function() {
            if(previousSelectedButton !=  null) {
                $(previousSelectedButton).hide(0);
                $(previousSelectedButton).removeClass("button-verbatim-translaton-selected");
            } 
            alert(previousSelectedButton);
            $(this).toggleClass('button-verbatim-translaton-selected');
            $(this).fadeIn();
            previousSelectedButton = this;
        }         
    )*/
});
