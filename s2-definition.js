const s2 = {
  __proto__: section_Methods,
  name: "Eggs",
  count: 0,
  limit: 1,
  selected: false,
  limit_reached: false,

  title: document.querySelector("#s2-title"),
  choose: document.querySelector("#s2-choose-amount"),
  // counter : document.querySelector('#sc'),
  get items() {
    return [this.item1];
  },

  item1: {
    __proto__: item_Methods,
    name: "6 Raw Eggs",
    count: 0,
    limit: 1,
    selected: false,
    limit_reached: false,
    button: document.querySelector("#s2-1"),
    counter: document.querySelector("#s2-1c"),
  },
};
