const s1_Item_Methods = {
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
    this.set_item_selected_to_false();
    //this.log_item_status();
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
    console.log(
      `${this.name} count is ${this.count}, selected ${this.selected}.`,
    );
  },

  log_section_status() {
    console.log(
      `Section ${this.section.name} count is ${this.section.count}, selected ${this.section.selected},` +
        "\n" +
        `limit reached ${this.section.limit_reached}.`,
    );
  },

  log_combined_section_and_item_status() {
    this.log_item_status();
    this.log_section_status();
  },

  display_item_count() {
    this.counter.innerHTML = this.count;
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

      /* STEP -If SECTION COUNT is now 0, then set SECTION selected:false. */
      if (this.section.count == 0) {
        this.set_section_selected_to_false();
      }
      this.set_item_count_to_zero();
      this.display_item_count();
      this.log_combined_section_and_item_status();
    } else {
      this.select_from_zero();
    }
  },
};

const s1_Section_Methods = {
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

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

const s2_Item_Methods = {
  get section() {
    return s2;
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
    this.set_item_selected_to_false();
    //this.log_item_status();
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
    console.log(
      `${this.name} count is ${this.count}, selected ${this.selected}.`,
    );
  },

  log_section_status() {
    console.log(
      `Section ${this.section.name} count is ${this.section.count}, selected ${this.section.selected},` +
        "\n" +
        `limit reached ${this.section.limit_reached}.`,
    );
  },

  log_combined_section_and_item_status() {
    this.log_item_status();
    this.section.log_section_status();
  },

  display_item_count() {
    this.counter.innerHTML = this.count;
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

      /* STEP -If SECTION COUNT is now 0, then set SECTION selected:false. */
      if (this.section.count == 0) {
        this.set_section_selected_to_false();
      }
      this.set_item_count_to_zero();
      this.display_item_count();
      this.log_combined_section_and_item_status();
    } else {
      this.select_from_zero();
    }
  },
};

const s2_Section_Methods = {
  get items() {
    return [this.item1];
  },
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

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
