"use strict";

const hamburgerMenuWrapper = document.querySelector(
  ".header__drop-menu-buttons-wrapper"
);
const habmurgerMenuButton = document.querySelector(
  ".header__drop-menu-button "
);
const habmurgerMenuCloseButton = document.querySelector(
  ".header__drop-menu-close-button"
);
const hamburgerMenu = document.querySelector(".header__mobile-drop-down-menu");
const hamburgerMenuItem = document.querySelectorAll(
  ".header__mobile-drop-down-menu-item"
);

hamburgerMenuWrapper.addEventListener("click", (event) => {
  // habmurgerMenuButton.classList.toggle("header__drop-menu-button-not-active");
  // habmurgerMenuCloseButton.classList.toggle("header__drop-menu-button-not-active");
  // hamburgerMenu.classList.toggle("header__mobile-drop-down-menu_not-active");
  if (
    !habmurgerMenuButton.classList.contains(
      "header__drop-menu-button-not-active"
    )
  ) {
    habmurgerMenuButton.classList.add("header__drop-menu-button-not-active");
    habmurgerMenuCloseButton.classList.remove(
      "header__drop-menu-button-not-active"
    );
    hamburgerMenu.classList.remove("header__mobile-drop-down-menu_not-active");
  } else {
    habmurgerMenuButton.classList.remove("header__drop-menu-button-not-active");
    habmurgerMenuCloseButton.classList.add(
      "header__drop-menu-button-not-active"
    );
    hamburgerMenu.classList.add("header__mobile-drop-down-menu_not-active");
  }
});

document.addEventListener("click", (event) => {
  hamburgerMenu.classList.add("header__mobile-drop-down-menu_not-active");
  habmurgerMenuCloseButton.classList.add("header__drop-menu-button-not-active");
  habmurgerMenuButton.classList.remove("header__drop-menu-button-not-active");
  console.log(event.target);
});

hamburgerMenuWrapper.addEventListener("click", (event) => {
  event.stopPropagation();
});

hamburgerMenu.addEventListener("click", (event) => {
  event.stopPropagation();
});

