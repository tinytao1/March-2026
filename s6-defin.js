"use strict";

const s6 = {
  name: "Grains",
  section_abbr: "s6",
  selected: false,
  count: 0,
  limit: 3,
  limit_reached: false,

  title: document.querySelector("#s6-title"),
  choose: document.querySelector("#s6-choose-amount"),

  get items() {
    return [
      this.item1,
      this.item2,
      this.item3,
      this.item4,
      this.item5,
      this.item6,
    ];
  },

  reset: {
    name: "reset",
    button: document.querySelector("#s6-reset"),
    __proto__: item_Methods,
    get section() {
      return s6;
    },
  },

  item1: {
    name: "Brown Rice",
    selected: false,
    count: 0,
    limit_reached: false,
    limit: false,
    button: document.querySelector("#s6-1"),
    counter: document.querySelector("#s6-1c"),
    __proto__: item_Methods,
    get section() {
      return s6;
    },
  },

  item2: {
    name: "Oatmeal",
    selected: false,
    count: 0,
    limit_reached: false,
    limit: false,
    button: document.querySelector("#s6-2"),
    counter: document.querySelector("#s6-2c"),
    __proto__: item_Methods,
    get section() {
      return s6;
    },
  },
  // LIMITED TO TWO

  item3: {
    name: "Corn Tortilla",
    selected: false,
    count: 0,
    limit_reached: false,
    limit: 2,
    button: document.querySelector("#s6-3"),
    counter: document.querySelector("#s6-3c"),
    __proto__: item_Methods,
    get section() {
      return s6;
    },
  },

  item4: {
    name: "Granola Cereal",
    selected: false,
    count: 0,
    limit_reached: false,
    limit: 2,
    button: document.querySelector("#s6-4"),
    counter: document.querySelector("#s6-4c"),
    __proto__: item_Methods,
    get section() {
      return s6;
    },
  },

  item5: {
    name: "Whole Wheat Pasta",
    selected: false,
    count: 0,
    limit_reached: false,
    limit: 2,
    button: document.querySelector("#s6-5"),
    counter: document.querySelector("#s6-5c"),
    __proto__: item_Methods,
    get section() {
      return s6;
    },
  },
  // LIMITED TO ONE
  item6: {
    name: "Whole Wheat Bread",
    selected: false,
    count: 0,
    limit_reached: false,
    limit: 1,
    button: document.querySelector("#s6-6"),
    counter: document.querySelector("#s6-6c"),
    __proto__: item_Methods,
    get section() {
      return s6;
    },
  },
};
