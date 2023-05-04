"use strict";

const hiddenMenuWrapper = document.querySelector(
  ".header__drop-menu-buttons-wrapper"
);
const hiddenMenuButton = document.querySelector(
  ".header__drop-menu-button "
);
const hiddenMenuCloseButton = document.querySelector(
  ".header__drop-menu-close-button"
);
const hiddenMenu = document.querySelector(".header__mobile-drop-down-menu");
const hiddenMenuItem = document.querySelectorAll(
  ".header__mobile-drop-down-menu-item"
);

hiddenMenuWrapper.addEventListener("click", (event) => {
  if (
    !hiddenMenuButton.classList.contains(
      "header__drop-menu-button-not-active"
    )
  ) {
    hiddenMenuButton.classList.add("header__drop-menu-button-not-active");
    hiddenMenuCloseButton.classList.remove(
      "header__drop-menu-button-not-active"
    );
    hiddenMenu.classList.remove("header__mobile-drop-down-menu_not-active");
  } else {
    hiddenMenuButton.classList.remove("header__drop-menu-button-not-active");
    hiddenMenuCloseButton.classList.add(
      "header__drop-menu-button-not-active"
    );
    hiddenMenu.classList.add("header__mobile-drop-down-menu_not-active");
  }
});

document.addEventListener("click", (event) => {
  hiddenMenu.classList.add("header__mobile-drop-down-menu_not-active");
  hiddenMenuCloseButton.classList.add("header__drop-menu-button-not-active");
  hiddenMenuButton.classList.remove("header__drop-menu-button-not-active");
});

hiddenMenuWrapper.addEventListener("click", (event) => {
  event.stopPropagation();
});

hiddenMenu.addEventListener("click", (event) => {
  event.stopPropagation();
});

