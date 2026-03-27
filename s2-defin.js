"use strict";

const s2 = {
  name: "Eggs",
  section_abbr: "s2",
  count: 0,
  limit: 1,
  selected: false,
  limit_reached: false,

  title: document.querySelector("#s2-title"),
  choose: document.querySelector("#s2-choose-amount"),

  get items() {
    return [this.item1];
  },

  reset: {
    name: "reset",
    button: document.querySelector("#s2-reset"),
    __proto__: item_Methods,
    get section() {
      return s2;
    },
  },

  item1: {
    name: "6 Raw Eggs",
    count: 0,
    limit: 1,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s2-1"),
    counter: document.querySelector("#s2-1c"),
    get section() {
      return s2;
    },
    __proto__: item_Methods,
  },
};
