const item_Methods = {
  get section() {
    return s1;
  },
  init() {
    // call to activate >> item#.init();
    this.button.addEventListener("click", () => this.select());
  },

  increase_item_count_by_1() {
    this.count++;
  },
  decrease_item_count() {
    this.count--;
  },

  set_item_count_to_zero() {
    this.count = 0;
  },

  set_section_count_to_zero() {
    this.section.count = 0;
  },

  increase_section_count() {
    this.section.count++;
  },
  decrease_section_count() {
    this.section.count--;
  },

  subtract_item_count_from_section_count() {
    this.section.count = this.section.count - this.count;
  },

  set_item_selected_to_true() {
    this.selected = true;
  },

  set_item_selected_to_false() {
    this.selected = false;
  },

  set_section_selected_to_true() {
    this.section.selected = true;
  },

  set_section_selected_to_false() {
    this.section.selected = false;
  },

  log_item_status() {
    console.log(`${this.name} count:${this.count}, selected:${this.selected}.`);
  },

  log_section_status() {
    console.log(
      `Section ${this.section.name} count:${this.section.count}, selected:${this.section.selected},` +
        "\n" +
        `limit reached:${this.section.limit_reached}.`,
    );
  },

  log_combined_section_and_item_status() {
    this.log_item_status();
    this.log_section_status();
  },

  display_item_count() {
    this.counter.style.display = "inline";
    this.counter.innerHTML = this.count;
  },

  remove_display_item_count() {
    this.counter.style.display = "none";
  },

  set_section_limit_reached_true() {
    this.section.limit_reached = true;
  },

  set_section_limit_reached_false() {
    this.section.limit_reached = false;
  },

  disable_all_unselected_item_buttons() {
    this.section.items.forEach((item) => {
      if (!item.selected) {
        item.button.disabled = true;
      }
    });
  },

  enable_all_unselected_item_buttons() {
    this.section.items.forEach((item) => {
      if (!item.selected) {
        item.button.disabled = false;
      }
    });
  },

  select_from_zero() {
    this.increase_item_count_by_1();
    this.set_item_selected_to_true();
    this.increase_section_count();
    this.set_section_selected_to_true();
    this.display_item_count();
    // STEP If section limit is reached then set limit reached true
    if (this.section.count == this.section.limit) {
      this.set_section_limit_reached_true();
      this.disable_all_unselected_item_buttons();
    }
    this.log_combined_section_and_item_status();
  },

  select() {
    /* Begin with the possibility that the section limit has already been reached, 
         so the selected item needs to be dropped from the section count. */
    if (this.section.count == this.section.limit) {
      this.subtract_item_count_from_section_count();
      this.set_section_limit_reached_false();
      this.enable_all_unselected_item_buttons();
      this.set_item_count_to_zero();
      this.set_item_selected_to_false();
      this.remove_display_item_count();

      /* STEP -If item COUNT is now 0, then set item selected:false. */
      if (this.section.count == 0) {
        this.set_section_selected_to_false();
      }
      this.log_combined_section_and_item_status();
    } else {
      this.select_from_zero();
    }
  },
};

s1_items_proto = {
  __proto__: item_Methods,
};

s2_items_proto = {
  __proto__: item_Methods,
  get section() {
    return s2;
  },
};
