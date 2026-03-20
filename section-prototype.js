const section_Methods = {
  set_section_count_to_zero() {
    this.count = 0;
  },

  log_section_status() {
    console.log(
      `count:${this.count}, sel:${this.selected}, lmt_rcd:${this.limit_reached}, ${this.abbr} ${this.name} `,
    );
  },

  log_all_items_status() {
    this.items.forEach((item) => {
      console.log(
        `count:${item.count}, sel:${item.selected}, lmt_rcd:${item.limit_reached}, ${item.name} `,
      );
    });
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

  remove_display_all_item_counts() {
    this.items.forEach((item) => {
      item.counter.style.display = "none";
    });
  },

  section_reset() {
    this.set_section_count_to_zero();
    this.set_section_selected_to_false();
    this.set_section_limit_reached_false();
    this.set_all_item_counts_to_zero();
    this.set_all_item_selecteds_to_false();
    this.enable_all_item_buttons();
    this.remove_display_all_item_counts();
    this.log_all_items_status();
    this.log_section_status();
  },
};

/* HTML SECTION TEMPLATE

    <!-- START SECTION  -->

    <div class="section" id="s-section-div">

      <div class="section-header" id="s-header">
        <!-- START SECTION  HEADER -->

        <h2 class="section-title" id="s-title">section title</h2>
        <!-- <span class="section-counter" id="sc"> 0 </span> -->

        <span
          >(choose
          <span class="choose-amount" id="s-choose-amount"> 0 </span>
          )</span
        >
      </div>
      <!-- END SECTION  HEADER -->

      <div class="item-div">
        <button id="s-" class="item-btn inactive-btn">item</button>
        <span id="s-c" class="counter inactive-counter">0</span>
      </div>

        <!--
// SECTION  /////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// SECTION  /////////////////////////////////////////////////////////////////////////////////////
-->
*/
