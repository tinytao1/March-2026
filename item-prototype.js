const item_Methods = {
  initialize_item_button() {
    this.button.addEventListener("click", () => this.select());
  },

  initialize_reset_button() {
    this.button.addEventListener("click", () => this.reset_sect());
  },

  /* Item
      - selected
      - count
      - lmt_rcd
      - counter show/hide
      - reset

     Section
      - selected
      - count
      - lmt_rcd  */

  selected_item_true() {
    this.selected = true;
  },

  selected_item_false() {
    this.selected = false;
  },

  count_increment_item() {
    this.count++;
  },

  count_zero_item() {
    this.count = 0;
    this.selected_item_false();
    this.limit_reached_item_false();
    this.counter_hide_item();
  },

  limit_reached_item_true() {
    this.limit_reached = true;
  },

  limit_reached_item_false() {
    this.limit_reached = false;
  },

  counter_show_item() {
    this.counter.style.display = "inline-block";
  },

  counter_hide_item() {
    this.counter.style.display = "none";
  },

  counter_update_item() {
    this.counter.innerHTML = this.count;
    if (this.count === 0) {
      this.counter_hide_item();
    } else {
      this.counter_show_item();
    }
  },

  ////////////////////////////////////
  ////////////////////////////////////
  ////////////////////////////////////
  //  SECT methods START

  selected_sect_true() {
    this.section.selected = true;
  },

  selected_sect_false() {
    this.section.selected = false;
  },

  count_increment_sect() {
    this.section.count++;
  },

  count_zero_sect() {
    this.section.count = 0;
  },

  lmt_rcd_sect_true() {
    this.section.limit_reached = true;
  },

  lmt_rcd_sect_false() {
    this.section.limit_reached = false;
  },

  enable_all_btns() {
    this.section.items.forEach((item) => {
      item.button.disabled = false;
    });
  },

  all_items_selected_false() {
    this.section.items.forEach((item) => {
      item.selected = false;
    });
  },

  all_items_count_zero() {
    this.section.items.forEach((item) => {
      item.count = 0;
    });
  },

  all_items_lmt_rcd_false() {
    this.section.items.forEach((item) => {
      item.limit_reached = false;
    });
  },

  all_counters_update() {
    this.section.items.forEach((item) => {
      item.counter.innerHTML = this.count;
    });
  },

  all_counters_hide() {
    this.section.items.forEach((item) => {
      item.counter.style.display = "none";
    });
  },

  log_all() {
    this.section.items.forEach((item) => {
      console.log(
        `count:${item.count}, sel:${item.selected}, lmt_rcd:${item.limit_reached}, ${item.name} `,
      );
    });
    this.log_sect_status();
  },

  reset_sect() {
    this.enable_all_btns();
    this.all_items_selected_false();
    this.all_items_count_zero();
    this.all_items_lmt_rcd_false();
    this.all_counters_update();
    this.all_counters_hide();

    this.lmt_rcd_sect_false();
    this.count_zero_sect();
    this.selected_sect_false();

    this.log_all();
  },

  //  SECT methods  END
  ////////////////////////////////////
  ////////////////////////////////////
  ////////////////////////////////////
  /*
    

    

     Item
      - selected
      - count
      - lmt_rcd
      - counter show/hide
      - reset

     Section
      - selected
      - count
      - lmt_rcd  */

  log_item_status() {
    console.log(
      `count:${this.count}, sel:${this.selected}, lmt_rcd:${this.limit_reached}, ${this.name} `,
    );
  },

  log_sect_status() {
    console.log(
      `count:${this.section.count}, sel:${this.section.selected}, lmt_rcd:${this.section.limit_reached}, ${this.section.section_abbr} ${this.section.name} `,
    );
  },

  log_combined_item_sect() {
    this.log_item_status();
    this.log_sect_status();
  },

  disable_unselected_btns() {
    this.section.items.forEach((item) => {
      if (!item.selected) {
        item.button.disabled = true;
      }
    });
  },

  enable_unselected_btns() {
    this.section.items.forEach((item) => {
      if (!item.selected) {
        item.button.disabled = false;
      }
    });
  },

  subtract_item_from_section_count() {
    this.section.count = this.section.count - this.count;
  },

  drop_item_from_section() {
    this.subtract_item_from_section_count();
    this.lmt_rcd_sect_false();
    if (this.section.count == 0) {
      this.selected_sect_false();
    }
    this.count_zero_item();
    this.selected_item_false();
    this.limit_reached_item_false();
    this.enable_unselected_btns();
  },

  /* Item
      - selected
      - count
      - lmt_rcd
      - display/hide counter
*/

  add_item() {
    /* First update item */
    this.selected_item_true();
    this.count_increment_item();
    if (this.count == this.limit) {
      this.limit_reached_item_true();
    }
    this.counter_update_item();
    /* Second update section */
    this.selected_sect_true();
    this.count_increment_sect();
    if (this.section.count == this.section.limit) {
      this.lmt_rcd_sect_true();
      this.disable_unselected_btns();
    }
  },

  select() {
    if (this.limit_reached || this.section.limit_reached) {
      this.drop_item_from_section();
    } else {
      this.add_item();
    }
    this.log_combined_item_sect();
  },
};
/* Item
      - selected
      - count
      - lmt_rcd
      - display/hide counter

     Section
      - selected
      - count
      - lmt_rcd  */
