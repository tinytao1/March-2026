"use strict";

const s = {
  __proto__: section_Methods,
  name: "null",
  count: 0,
  limit: null,
  selected: false,
  limit_reached: false,

  title: document.querySelector("#s-title"),
  choose: document.querySelector("#s-choose-amount"),
  // counter : document.querySelector('#s1c'),
  get items() {
    return [
      this.item1,
      this.item2,
      this.item3,
      this.item4,
      this.item5,
      this.item6,
      this.item7,
      this.item8,
    ];
  },

  item: {
    __proto__: item_Methods,
    name: "null",
    count: 0,
    limit: null,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s-"),
    counter: document.querySelector("#s-c"),
    get section() {
      return s;
    },
  },
};
