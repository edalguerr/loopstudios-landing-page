var navBar = document.getElementsByClassName('navbar')[0];
var navBarContainerDropdown = document.getElementsByClassName('navbar-container-dropdown')[0];
var menuBtn = document.getElementsByClassName('navbar__hamburguer-button')[0];
var closeMenuBtn = document.getElementsByClassName('navbar__close-button')[0];
var menuEnable = false;


function dropdownMenu (){

    menuEnable = !menuEnable;

    if(menuEnable){
        navBar.classList = " navbar navbar--background_black";
        navBarContainerDropdown.classList = "navbar-container-dropdown navbar-container navbar-container-dropdown--enabled";
        menuBtn.classList = "navbar__hamburguer-button--disable";
        closeMenuBtn.classList = "navbar__close-button--enabled";
    }
    else {
        navBar.classList = " navbar";
        navBarContainerDropdown.classList = "navbar-container-dropdown navbar-container";
        menuBtn.classList = "navbar__hamburguer-button";
        closeMenuBtn.classList = "navbar__close-button";
    }
    
}