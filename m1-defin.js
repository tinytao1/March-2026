"use strict";

const menu = {
  name: "Week4 SF REGULAR MENU",
  title: document.querySelector("#menu-title"),

  reset: {
    button_top: document.querySelector("#menu-reset-top"),
    button_bottom: document.querySelector("#menu-reset-bottom"),

    initialize_menu_reset_button_top() {
      this.button_top.addEventListener("click", () => this.all_sections());
    },

    initialize_menu_reset_button_bottom() {
      this.button_bottom.addEventListener("click", () => this.all_sections());
    },

    all_sections() {
      s1.reset.reset_sect();
      s2.reset.reset_sect();
      s3.reset.reset_sect();
      //s4.reset.reset_sect(); //Fruits n Veg sect
      s5.reset.reset_sect();
      s6.reset.reset_sect();
    },
  },
};
