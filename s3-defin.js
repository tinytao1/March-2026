"use strict";

const s3 = {
  name: "Dairy",
  section_abbr: "s3",
  count: 0,
  limit: 2,
  selected: false,
  limit_reached: false,
  selected_subgroup_cheese: false,

  title: document.querySelector("#s3-title"),
  choose: document.querySelector("#s3-choose-amount"),

  __proto__: section_Methods,
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

  get cheeses() {
    return [this.item7, this.item8, this.item9, this.item10];
  },

  reset: {
    name: "reset",
    button: document.querySelector("#s3-reset"),
    __proto__: item_Methods,
    get section() {
      return s3;
    },
  },

  cheese: {
    button: document.querySelector("#s3-cheese"),
    __proto__: item_Methods,
    get section() {
      return s3;
    },
  },

  item1: {
    name: "Whole Milk",
    selected: false,
    count: 0,
    limit_reached: false,
    limit: false,

    button: document.querySelector("#s3-1"),
    counter: document.querySelector("#s3-1c"),
    __proto__: item_Methods,
    get section() {
      return s3;
    },
  },

  item2: {
    __proto__: item_Methods,
    name: "2% Milk",
    count: 0,
    limit: false,
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
    limit: false,
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
    limit: false,
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
    limit: false,
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
    limit: false,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s3-6"),
    counter: document.querySelector("#s3-6c"),
    get section() {
      return s3;
    },
  },

  item7: {
    name: "Mozzarella",
    subgroup_cheese: true,
    count: 0,
    limit: 1,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s3-7"),
    counter: document.querySelector("#s3-7c"),
    __proto__: item_Methods,
    get section() {
      return s3;
    },
  },

  item8: {
    name: "Cheddar",
    subgroup_cheese: true,
    count: 0,
    limit: 1,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s3-8"),
    counter: document.querySelector("#s3-8c"),
    __proto__: item_Methods,
    get section() {
      return s3;
    },
  },

  item9: {
    name: "Monterey Jack",
    subgroup_cheese: true,
    count: 0,
    limit: 1,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s3-9"),
    counter: document.querySelector("#s3-9c"),
    __proto__: item_Methods,
    get section() {
      return s3;
    },
  },

  item10: {
    name: "Pepper Jack",
    subgroup_cheese: true,
    count: 0,
    limit: 1,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s3-10"),
    counter: document.querySelector("#s3-10c"),
    __proto__: item_Methods,
    get section() {
      return s3;
    },
  },
};
