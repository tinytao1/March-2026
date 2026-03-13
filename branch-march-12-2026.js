"use strict";

const s1 = {
  name: "Proteins",
  count: 0,
  limit: 2,
  selected: false,
  limit_reached: false,
  title: document.querySelector("#s1-title"),
  choose: document.querySelector("#s1-choose-amount"),
  // counter : document.querySelector('#s1c'),

  item1: {
    __proto__: s1_Item_Methods,
    //get section() { return s1; },
    name: "Tilapia",
    count: 0,
    limit: null,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s1-1"),
    counter: document.querySelector("#s1-1c"),
  },

  item2: {
    __proto__: s1_Item_Methods,
    //get section() { return s1; },
    name: "Chicken Breast",
    count: 0,
    limit: null,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s1-2"),
    counter: document.querySelector("#s1-2c"),
  },

  item3: {
    //__proto__: itemMethods,
    //get section() { return s1; },
    name: "Pork Chop",
    count: 0,
    limit: null,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s1-3"),
    counter: document.querySelector("#s1-3c"),
  },
};

const s1_items = [s1.item1, s1.item2, s1.item3];

function disable_all_unselected_item_buttons() {
  s1_items.forEach((item) => {
    if (!item.selected) {
      item.button.disabled = true;
    }
  });
}
