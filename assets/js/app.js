/*
 * Application
 */

$(document).tooltip({
    selector: "[data-toggle=tooltip]"
})

$(document).ready(function() {
    if ($.isFunction($.fn.select2)) {
        $('select.form-control').select2({minimumResultsForSearch: 10});
    }
});

$(document).ready(function() {
    $(window).bind("load resize", function() {
        var pageHeight = $(window).height();
        var pageWidth = $(window).width();
        var footerHeight = $('#site-footer').height() ? $('#site-footer').height()+30 : 0;

        $('body').css('margin-bottom', footerHeight);
    });
});

$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scroll-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});

function showFormError(xhr, selector) {
    var message = (typeof xhr.responseJSON === 'object') ? xhr.responseJSON.X_OCTOBER_ERROR_MESSAGE : xhr.responseText;

    var html = '<div class="alert alert-danger animated bounce">';
    html += '   <button type="button" class="close" data-dismiss="alert" aria-label="Close">';
    html += '       <span aria-hidden="true">×</span>';
    html += '   </button>';
    html += '   <p class="form-error">' + message + '</p>';
    html += '</div>';

    $(selector).find('.alert').remove();
    $(selector).prepend(html);
}

function flashMessage(type, message, selector) {
    var selector = (typeof selector === 'undefined') ? '#header-flash-message' : selector;

    var html = '<div class="alert alert-'+ type +' animated flash">';
    html += '   <button type="button" class="close" data-dismiss="alert" aria-label="Close">';
    html += '       <span aria-hidden="true">×</span>';
    html += '   </button>';
    html += '   <p class="form-error">' + message + '</p>';
    html += '</div>';

    $(selector).find('.alert').remove();
    $(selector).prepend(html);
}

$(document).on('click', 'a.youtube-modal-toggle', function(e){
    e.preventDefault();

    var vidWidth = 840;
    var vidHeight = 315; // default
    var vidModal = $(this).attr('data-target');
    if ( $('#site-content > .container') ) {
        vidWidth = $('#site-content > .container').width() < 840 ? $('#site-content > .container').width() : 840;
    }
    if ( $(this).attr('data-height') ) { vidHeight = parseInt($(this).attr('data-height')); }

    $(window).bind("load resize", function() {
        vidWidth = $('#site-content > .container').width() < 840 ? $('#site-content > .container').width() : 840;
        $('#video-modal .modal-dialog, #video-modal iframe').css('width', vidWidth);
    });

    var iFrameCode = '<iframe width="' + vidWidth + '" height="'+ vidHeight +'" scrolling="no" allowtransparency="true" allowfullscreen="true" src="'+  $(this).attr('data-youtube-url') +'&width=' + vidWidth + '&height=' + vidHeight + '" frameborder="0"></iframe>';

    $(vidModal + ' .modal-body').html(iFrameCode);

    $(vidModal).on('show.bs.modal', function () {
        $(this).find('.modal-dialog').css('width', vidWidth);
    });

    $(vidModal).on('hidden.bs.modal', function () {
        $(vidModal).find('.modal-body').html('');
    });

    $(vidModal).modal();
});

$(function() {
    if ( $.isFunction($.fn.lazyload) ) {
        $("img.lazy-load").lazyload({
            effect : "fadeIn",
            threshold : 20
        });
    }
});
