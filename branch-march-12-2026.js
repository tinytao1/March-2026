"use strict";

const s1 = {
  __proto__: s1_Section_Methods,
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
    name: "Chicken Breast",
    count: 0,
    limit: null,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s1-2"),
    counter: document.querySelector("#s1-2c"),
  },

  item3: {
    __proto__: s1_Item_Methods,
    name: "Pork Chop",
    count: 0,
    limit: null,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s1-3"),
    counter: document.querySelector("#s1-3c"),
  },

  item4: {
    __proto__: s1_Item_Methods,
    name: "Tempeh",
    count: 0,
    limit: null,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s1-4"),
    counter: document.querySelector("#s1-4c"),
  },

  item5: {
    __proto__: s1_Item_Methods,
    name: "Tuna",
    count: 0,
    limit: null,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s1-5"),
    counter: document.querySelector("#s1-5c"),
  },

  item6: {
    __proto__: s1_Item_Methods,
    name: "Protein Trail Mix",
    count: 0,
    limit: null,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s1-6"),
    counter: document.querySelector("#s1-6c"),
  },

  item7: {
    __proto__: s1_Item_Methods,
    name: "Firm Tofu",
    count: 0,
    limit: null,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s1-7"),
    counter: document.querySelector("#s1-7c"),
  },

  item8: {
    __proto__: s1_Item_Methods,
    name: "Tempeh Cauliflower Patty",
    count: 0,
    limit: null,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s1-8"),
    counter: document.querySelector("#s1-8c"),
  },
};

/*
"use strict";

const s1 = {
  name: 'Proteins',
  count: 0,
  limit: 2,
  selected: false,
  limit_reached: false,
  get items() {
    return [
      this.item1,
      this.item2,
      this.item3,
      //this.item4,
      //this.item5,
      //this.item6,
      //this.item7,
      //this.item8,
    ];
  },
  title: document.querySelector("#s1-title"),
  choose: document.querySelector("#s1-choose-amount"),
  // counter : document.querySelector('#s1c'),

  item: {
    __proto__: s1_Item_Methods,
    name: '',
    count: 0,
    limit: null,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s1-"),
    counter: document.querySelector("#s1-c"),
  },


*/
