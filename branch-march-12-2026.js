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

const s2 = {
  __proto__: s2_Section_Methods,
  name: "Eggs",
  count: 0,
  limit: 1,
  selected: false,
  limit_reached: false,

  title: document.querySelector("#s2-title"),
  choose: document.querySelector("#s2-choose-amount"),
  // counter : document.querySelector('#sc'),

  item1: {
    __proto__: s2_Item_Methods,
    name: "6 Raw Eggs",
    count: 0,
    limit: 1,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s2-1"),
    counter: document.querySelector("#s2-1c"),
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
