"use strict";

const s1 = {
  name: "Proteins",
  section_abbr: "s1",
  count: 0,
  limit: 2,
  selected: false,
  limit_reached: false,

  title: document.querySelector("#s1-title"),
  choose: document.querySelector("#s1-choose-amount"),
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

  reset: {
    name: "reset",
    button: document.querySelector("#s1-reset"),
    __proto__: item_Methods,
    get section() {
      return s1;
    },
  },

  item1: {
    name: "Tilapia",
    count: 0,
    limit: false,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s1-1"),
    counter: document.querySelector("#s1-1c"),
    __proto__: item_Methods,
    get section() {
      return s1;
    },
  },

  item2: {
    __proto__: item_Methods,
    name: "Chicken Breast",
    count: 0,
    limit: false,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s1-2"),
    counter: document.querySelector("#s1-2c"),
    get section() {
      return s1;
    },
  },

  item3: {
    __proto__: item_Methods,
    name: "Pork Chop",
    count: 0,
    limit: false,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s1-3"),
    counter: document.querySelector("#s1-3c"),
    get section() {
      return s1;
    },
  },

  item4: {
    __proto__: item_Methods,
    name: "Tempeh",
    count: 0,
    limit: false,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s1-4"),
    counter: document.querySelector("#s1-4c"),
    get section() {
      return s1;
    },
  },

  item5: {
    __proto__: item_Methods,
    name: "Tuna",
    count: 0,
    limit: false,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s1-5"),
    counter: document.querySelector("#s1-5c"),
    get section() {
      return s1;
    },
  },

  item6: {
    __proto__: item_Methods,
    name: "Protein Trail Mix",
    count: 0,
    limit: false,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s1-6"),
    counter: document.querySelector("#s1-6c"),
    get section() {
      return s1;
    },
  },

  item7: {
    __proto__: item_Methods,
    name: "Firm Tofu",
    count: 0,
    limit: false,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s1-7"),
    counter: document.querySelector("#s1-7c"),
    get section() {
      return s1;
    },
  },

  item8: {
    __proto__: item_Methods,
    name: "Tempeh Cauliflower Patty",
    count: 0,
    limit: false,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s1-8"),
    counter: document.querySelector("#s1-8c"),
    get section() {
      return s1;
    },
  },
};

/*
"use strict";

const s = {
  __proto__: s_Section_Methods,
  name: 'name',
  count: 0,
  limit: null,
  selected: false,
  limit_reached: false,
  
  title: document.querySelector("#s-title"),
  choose: document.querySelector("#s-choose-amount"),
  // counter : document.querySelector('#sc'),

  item1: {
    __proto__: s_Item_Methods,
    name: 'null',
    count: 0,
    limit: null,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s-"),
    counter: document.querySelector("#s-c"),
  },


*/
