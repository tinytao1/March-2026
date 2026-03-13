const s1_Item_Methods = {
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

  increase_section_count() {
    s1.count++;
  },
  decrease_section_count() {
    s1.count--;
  },

  subtract_item_count_from_section_count() {
    s1.count = s1.count - this.count;
  },

  set_item_selected_to_true() {
    this.selected = true;
  },

  set_item_selected_to_false() {
    this.selected = false;
  },

  set_section_selected_to_true() {
    s1.selected = true;
  },

  set_section_selected_to_false() {
    s1.selected = false;
  },

  log_item_status() {
    console.log(
      `${this.name} count is ${this.count}, selected ${this.selected}.`,
    );
  },

  log_section_status() {
    console.log(
      `Section ${s1.name} count is ${s1.count}, selected ${s1.selected},` +
        "\n" +
        `limit reached ${s1.limit_reached}.`,
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
    s1.limit_reached = true;
  },

  set_section_limit_reached_false() {
    s1.limit_reached = false;
  },

  disable_all_unselected_item_buttons() {
    s1.items.forEach((item) => {
      if (!item.selected) {
        item.button.disabled = true;
      }
    });
  },

  enable_all_unselected_item_buttons() {
    s1.items.forEach((item) => {
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
    if (s1.count == s1.limit) {
      this.set_section_limit_reached_true();
      this.disable_all_unselected_item_buttons();
    }
    this.log_combined_section_and_item_status();
  },

  select() {
    /* Begin with the possibility that the section limit has already been reached, 
         so the selected item needs to be dropped from the section count. */
    if (s1.count == s1.limit) {
      this.subtract_item_count_from_section_count();
      this.set_section_limit_reached_false();
      this.enable_all_unselected_item_buttons();

      /* STEP -If SECTION COUNT is now 0, then set SECTION selected:false. */
      if (s1.count == 0) {
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

////////////// BEGIN RESET METHODS  /////////////////////////////////////
