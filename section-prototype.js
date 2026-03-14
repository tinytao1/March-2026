const section_Methods = {
  set_section_count_to_zero() {
    this.count = 0;
  },

  log_section_status() {
    console.log(
      `count:${this.count}, sel:${this.selected}, limit_rchd:${this.limit_reached}, Section:${this.name} `,
    );
  },

  set_section_selected_to_false() {
    this.selected = false;
  },

  set_section_limit_reached_false() {
    this.limit_reached = false;
  },

  set_all_item_counts_to_zero() {
    this.items.forEach((item) => {
      item.count = 0;
    });
  },
  set_all_item_selecteds_to_false() {
    this.items.forEach((item) => {
      item.selected = false;
    });
  },

  log_all_items_status() {
    this.items.forEach((item) => {
      console.log(`count:${item.count}, sel:${item.selected}, ${item.name} `);
    });
  },

  enable_all_item_buttons() {
    this.items.forEach((item) => {
      item.button.disabled = false;
    });
  },
  display_all_item_counts() {
    this.items.forEach((item) => {
      item.counter.innerHTML = item.count;
    });
  },

  section_reset() {
    this.set_section_count_to_zero();
    this.set_section_selected_to_false();
    this.set_section_limit_reached_false();
    this.set_all_item_counts_to_zero();
    this.set_all_item_selecteds_to_false();
    this.enable_all_item_buttons();
    this.display_all_item_counts();

    this.log_all_items_status();
    this.log_section_status();
  },
};

const s1_section_proto = {
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
    ];
  },
};

const s2_section_proto = {
  __proto__: section_Methods,
  get items() {
    return [this.item1];
  },
};
