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

$("#sidebarToggleButton").on("click", function () {

    $("#sideBarContainer").toggleClass("active-sidebar");
    $('main').toggleClass("fill-screen");
    $('.header').toggleClass("fill-screen");
    $('.menu-list label').toggleClass('hide-text');
    $('.menu-list a').toggleClass('ml-4');

    $("*.drop").removeClass("show");
    $("*.menu-caret-icon").removeClass("fa-caret-right");

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
        $('.header').toggleClass("fill-screen");
        $('.menu-list label').toggleClass('hide-text');
        $('.menu-list a').toggleClass('ml-4');
        
    }

});