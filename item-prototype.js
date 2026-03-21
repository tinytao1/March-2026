const item_Methods = {
  init() {
    // call to activate >> item#.init();
    this.button.addEventListener(
      "click",
      () => this.select(),
      //this.check_for_limits_reached(),
    );
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

  increase_section_count_by_1() {
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
      `count:${this.count}, sel:${this.selected}, lmt_rcd:${this.limit_reached}, ${this.name} `,
    );
  },

  log_section_status() {
    console.log(
      `count:${this.section.count}, sel:${this.section.selected}, lmt_rcd:${this.section.limit_reached}, ${this.section.section_abbr} ${this.section.name} `,
    );
  },

  log_combined_section_and_item_status() {
    this.log_item_status();
    this.log_section_status();
  },

  display_item_counter() {
    this.counter.style.display = "inline";
    this.counter.innerHTML = this.count;
  },

  hide_item_counter() {
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

  disable_unselected_cheeses() {
    this.section.items.forEach((item) => {
      if (!item.selected && item.is_cheese) {
        item.button.disabled = true;
      }
    });
  },

  enable_other_cheeses() {
    this.section.items.forEach((item) => {
      if (!item.selected && item.is_cheese) {
        item.button.disabled = false;
      }
    });
  },

  drop_item_from_section_count() {
    this.section.count = this.section.count - this.count;
  },

  if_section_count_is_zero_then_set_selected_to_false() {
    if (this.section.count == 0) {
      this.section.selected = false;
    }
  },

  set_item_limit_reached_to_true() {
    this.limit_reached = true;
  },

  set_item_limit_reached_to_false() {
    this.limit_reached = false;
  },

  check_for_is_cheese_limit_reached() {
    if (this.is_cheese && this.limit_reached) {
      this.disable_other_cheeses();
    }
  },

  check_for_is_cheese_then_enable_other_cheeses() {
    if (this.is_cheese) {
      this.enable_other_cheeses();
    }
  },

  if_section_limit_is_reached_then_set_limit_reached_to_true() {
    if (this.section.count == this.section.limit) {
      this.set_section_limit_reached_true();
      this.disable_all_unselected_item_buttons();
    }
  },

  if_item_limit_is_reached_then_set_limit_reached_to_true() {
    if (this.count == this.limit) {
      this.limit_reached = true;
      if (this.is_cheese) {
        this.disable_unselected_cheeses();
      }
    }
  },

  add_1() {
    this.increase_item_count_by_1();
    this.set_item_selected_to_true();
    this.display_item_counter();
    //this.if_item_limit_is_reached_then_set_limit_reached_to_true();
    this.if_item_limit_is_reached_then_set_limit_reached_to_true();

    this.increase_section_count_by_1();
    this.set_section_selected_to_true();
    this.if_section_limit_is_reached_then_set_limit_reached_to_true();
    //
  },

  drop_item() {
    this.enable_all_unselected_item_buttons();
    this.subtract_item_count_from_section_count();
    this.set_section_limit_reached_false();
    this.if_section_count_is_zero_then_set_selected_to_false(); //un-tested

    this.set_item_count_to_zero(); //un-tested
    this.set_item_selected_to_false(); //un-tested
    this.set_item_limit_reached_to_false(); //un-tested
    this.hide_item_counter();
  },

  select() {
    if (this.limit_reached || this.section.limit_reached) {
      this.drop_item();
    } // else if (this.section.limit_reached) {}
    else {
      this.add_1();
    }

    this.log_combined_section_and_item_status();
  },
};
/*

  check_for_limits_reached() {
    if (this.limit_reached || this.section.limit_reached) {
      this.drop_item_from_section_count();
      //this.if_section_count_is_zero_then_set_selected_to_false();
      //this.set_section_limit_reached_false();

      //this.set_item_count_to_zero();
      //this.set_item_selected_to_false();
      //this.set_item_limit_reached_to_false();
      //this.hide_item_count();

      //this.check_for_is_cheese_then_enable_other_cheeses();
      this.log_combined_section_and_item_status();
    } else {
      this.select();
    }
  },

check_for_item_limit_reached(){
  if (this.count == this.limit_reached) {
    this.set_item_limit_reached_to_true();
  } else {
    this.select();
  }
},
*/
/*
  select_from_zero() {
    this.increase_item_count_by_1();
    this.set_item_selected_to_true();
    this.increase_section_count();
    this.set_section_selected_to_true();
    this.display_item_count();
    if (this.section.count == this.section.limit) {
      this.set_section_limit_reached_true();
      this.disable_all_unselected_item_buttons();
    }
    this.log_combined_section_and_item_status();
  },


  if_item_limit_reached_is_true_then_drop_item() {
    if (this.item.limit_reached) {
      this.drop_item_from_section_count();
      this.set_item_limit_reached_to_false();
      this.set_item_count_to_zero();
      this.set_item_selected_to_false();
      this.set_section_limit_reached_false();
      this.remove_display_item_count();
      this.if_this_is_cheese_then_undo_disable_other_cheeses();
    }
  },
 */
