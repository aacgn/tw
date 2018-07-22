$(document).ready(function() {
    toggleMenu();
    toggleUserMenu();
});

function toggleMenu() {
    $(".menu-dropdown-toggle").click(function() {
        if($("#menu").hasClass("menu-hidden")) {
            $("#menu").removeClass("menu-hidden");
            $("#menu").addClass("menu");
        } else {
            $("#menu").addClass("menu-hidden");
            $("#menu").removeClass("menu");
        }
    });
}

function toggleUserMenu() {
    $(".user-dropdown-toggle").click(function() {
        if($("#user-menu").hasClass("user-menu-hidden")) {
            $("#user-menu").removeClass("user-menu-hidden");
            $("#user-menu").addClass("user-menu");
        } else {
            $("#user-menu").addClass("user-menu-hidden");
            $("#user-menu").removeClass("user-menu");
        }
    });
}