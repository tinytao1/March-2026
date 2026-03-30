"use strict";

const s5 = {
  name: "Beans",
  section_abbr: "s5",
  selected: false,
  count: 0,
  limit: 2,
  limit_reached: false,

  title: document.querySelector("#s5-title"),
  choose: document.querySelector("#s5-choose-amount"),

  get items() {
    return [this.item1, this.item2, this.item3, this.item4];
  },

  reset: {
    name: "reset",
    button: document.querySelector("#s5-reset"),
    __proto__: item_Methods,
    get section() {
      return s5;
    },
  },

  item1: {
    name: "Black Beans",
    count: 0,
    limit: false,
    selected: false,
    limit_reached: false,

    button: document.querySelector("#s5-1"),
    counter: document.querySelector("#s5-1c"),
    __proto__: item_Methods,
    get section() {
      return s5;
    },
  },

  item2: {
    name: "Black Eye Peas",
    count: 0,
    limit: false,
    selected: false,
    limit_reached: false,

    button: document.querySelector("#s5-2"),
    counter: document.querySelector("#s5-2c"),
    __proto__: item_Methods,
    get section() {
      return s5;
    },
  },

  item3: {
    name: "Pinto Beans",
    count: 0,
    limit: false,
    selected: false,
    limit_reached: false,

    button: document.querySelector("#s5-3"),
    counter: document.querySelector("#s5-3c"),
    __proto__: item_Methods,
    get section() {
      return s5;
    },
  },

  item4: {
    name: "Red Beans",
    count: 0,
    limit: false,
    selected: false,
    limit_reached: false,

    button: document.querySelector("#s5-4"),
    counter: document.querySelector("#s5-4c"),
    __proto__: item_Methods,
    get section() {
      return s5;
    },
  },
};
