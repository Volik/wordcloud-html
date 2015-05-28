$(document).ready(function() {

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
            $('.pt-results-wrapper').hide();
            $('.pt-sample-size-content').hide();
            $(this).toggleClass('pt-language-selector-active');
            $('.pt-language-content').fadeIn();
            $('.buttons-wrapper').fadeIn();
        }
    );

    $('.pt-sample-size-selector').click(
        function() {
            $('.pt-results-wrapper').hide();
            $('.pt-language-content').hide();
            $('.pt-language-selector').removeClass('pt-language-selector-active');
            $(this).toggleClass('pt-sample-size-selector-active');
            $('.pt-sample-size-content').fadeIn();
            $('.buttons-wrapper').fadeIn();
        }
    );


});
