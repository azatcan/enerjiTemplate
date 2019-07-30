$(window).on('load', function () {
    $('.loader').slideUp()
});

hideLoader = () => {
    $('.loader').fadeOut(1000);
};

showLoader = () => {
    $('.loader').fadeIn(1000);
};

jQuery(function ($) {

    $(".sidebar-dropdown > a").click(function () {
        $(".sidebar-submenu").slideUp(200);
        if (
            $(this)
                .parent()
                .hasClass("active")
        ) {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .parent()
                .removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .next(".sidebar-submenu")
                .slideDown(200);
            $(this)
                .parent()
                .addClass("active");
        }
    });

    $("#toggleMenu").click(function () {
        $(".page-wrapper").toggleClass("toggled");
    });
});

$(document).ready(function () {
    let menuStatus = localStorage.getItem("menuStatus");
    if (menuStatus !== null) {

        if (menuStatus !== "show") {
            $("#sideBarContainer").removeClass("active-sidebar");
            $('main').addClass("fill-screen");
            $('.header').addClass("header-fill-screen");
            $('.menu-list label').addClass('hide-text');
            $('.menu-list a').addClass('ml-4');

            $("*.drop").removeClass("show");
            $("*.menu-caret-icon").removeClass("fa-caret-right");

        } else {
            $("#sideBarContainer").addClass("active-sidebar");
            $('main').removeClass("fill-screen");
            $('.header').removeClass("header-fill-screen");
            $('.menu-list label').removeClass('hide-text');
            $('.menu-list a').removeClass('ml-4');

            $("*.drop").removeClass("show");
            $("*.menu-caret-icon").removeClass("fa-caret-right");
        }
    }
});

$("#sidebarToggleButton").on("click", function () {

    $("#sideBarContainer").toggleClass("active-sidebar");
    $('main').toggleClass("fill-screen");
    $('.header').toggleClass("header-fill-screen");
    $('.menu-list label').toggleClass('hide-text');
    $('.menu-list a').toggleClass('ml-4');

    $("*.drop").removeClass("show");
    $("*.menu-caret-icon").removeClass("fa-caret-right");

    if ($("#sideBarContainer").hasClass("active-sidebar")) {
        localStorage.setItem("menuStatus", "show");
    } else {
        localStorage.setItem("menuStatus", "hide");
    }
});

$("#notificationBoxButton").on("click", function () {
    $(".notification-box").toggleClass("show");
});

$('.drop-menu').on("click", function () {

    $(this).parent().children(".drop").toggleClass("show");
    $(this).parent().children("i").toggleClass("fa-caret-right");

    // Menü kapalıyen açılma işlemi
    if (!$("#sideBarContainer").hasClass("active-sidebar")) {

        $("#sideBarContainer").toggleClass("active-sidebar");
        $('main').toggleClass("fill-screen");
        $('.header').toggleClass("header-fill-screen");
        $('.menu-list label').toggleClass('hide-text');
        $('.menu-list a').toggleClass('ml-4');

    }

});

$(window).on("scroll", function () {
    if ($(this).scrollTop() === 0)
        $('#scrollBg').removeClass("header-bg");
    else
        $('#scrollBg').addClass("header-bg");
})

$('#showQuestionPanel').on("click", function() {
    $('.question-type-section').toggleClass("active-question-type-section");
    $('#showQuestionPanelIcon').toggleClass("fa-arrow-to-right");
})