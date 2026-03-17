"use strict";

const s3 = {
  __proto__: section_Methods,
  name: "Dairy",
  count: 0,
  limit: 2,
  selected: false,
  limit_reached: false,

  title: document.querySelector("#s3-title"),
  choose: document.querySelector("#s3-choose-amount"),
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
      this.item9,
      this.item10,
    ];
  },

  item1: {
    __proto__: item_Methods,
    name: "Whole Milk",
    count: 0,
    limit: null,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s3-1"),
    counter: document.querySelector("#s3-1c"),
    get section() {
      return s3;
    },
  },
  item2: {
    __proto__: item_Methods,
    name: "2% Milk",
    count: 0,
    limit: null,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s3-2"),
    counter: document.querySelector("#s3-2c"),
    get section() {
      return s3;
    },
  },
  item3: {
    __proto__: item_Methods,
    name: "Fat Free Milk",
    count: 0,
    limit: null,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s3-3"),
    counter: document.querySelector("#s3-3c"),
    get section() {
      return s3;
    },
  },
  item4: {
    __proto__: item_Methods,
    name: "Soymilk, Plain",
    count: 0,
    limit: null,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s3-4"),
    counter: document.querySelector("#s3-4c"),
    get section() {
      return s3;
    },
  },
  item5: {
    __proto__: item_Methods,
    name: "Plain Yogurt",
    count: 0,
    limit: null,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s3-5"),
    counter: document.querySelector("#s3-5c"),
    get section() {
      return s3;
    },
  },
  item6: {
    __proto__: item_Methods,
    name: "Cottage Cheese",
    count: 0,
    limit: null,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s3-6"),
    counter: document.querySelector("#s3-6c"),
    get section() {
      return s3;
    },
  },
  item7: {
    __proto__: item_Methods,
    name: "Mozzarella",
    count: 0,
    limit: null,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s3-7"),
    counter: document.querySelector("#s3-7c"),
    get section() {
      return s3;
    },
  },
  item8: {
    __proto__: item_Methods,
    name: "Cheddar",
    count: 0,
    limit: null,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s3-8"),
    counter: document.querySelector("#s3-8c"),
    get section() {
      return s3;
    },
  },
  item9: {
    __proto__: item_Methods,
    name: "Monterey Jack",
    count: 0,
    limit: null,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s3-9"),
    counter: document.querySelector("#s3-9c"),
    get section() {
      return s3;
    },
  },
  item10: {
    __proto__: item_Methods,
    name: "Pepper Jack",
    count: 0,
    limit: null,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s3-10"),
    counter: document.querySelector("#s3-10c"),
    get section() {
      return s3;
    },
  },
};
