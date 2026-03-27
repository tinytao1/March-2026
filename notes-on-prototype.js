
// SECTION  2 //////////////////////// 
--> 
      <!-- START HTML SECTION 2 -->
    <div class="section" id="s2-section-div">

      <div class="section-header" id="s2-header">
        <!-- START SECTION 2 HEADER -->

        <h2 class="section-title" id="s2-title">section title</h2>
        <!-- <span class="section-counter" id="s1c"> 0 </span> -->

        <span
          >(choose
          <span class="choose-amount" id="s2-choose-amount"> 0 </span>
          )</span
        >
      </div>
      <!-- END SECTION 2 HEADER -->

      <div class="item-div">
        <button id="s2-1" class="item-btn ">item1</button>
        <span id="s2-1c" class="counter ">0</span>
      </div>
    </div>
    <!-- END HTML SECTION 2 -->
        <!--
// SECTION  2 ////////////////////////
//////////////////////////////////////
// SECTION  3 ////////////////////////
--> 
    <!-- START SECTION 3 -->

    <div class="section" id="s3-section-div">

      <div class="section-header" id="s3-header">
        <!-- START SECTION  HEADER -->

        <h2 class="section-title" id="s3-title">section title</h2>
        <!-- <span class="section-counter" id="sc"> 0 </span> -->

        <span
          >(choose
          <span class="choose-amount" id="s3-choose-amount"> 0 </span>
          )</span
        >
      </div>
      <!-- END SECTION  HEADER -->
      <!-- START SECTION  BODY -->

      <div class="item-div">
        <button id="s3-1" class="item-btn ">item1</button>
        <span id="s3-1c" class="counter ">0</span>
      </div>

      <div class="item-div">
        <button id="s3-2" class="item-btn ">item2</button>
        <span id="s3-2c" class="counter ">0</span>
      </div>

      <div class="item-div">
        <button id="s3-3" class="item-btn ">item3</button>
        <span id="s3-3c" class="counter ">0</span>
      </div>

      <div class="item-div">
        <button id="s3-4" class="item-btn ">item4</button>
        <span id="s3-4c" class="counter ">0</span>
      </div>

      <div class="item-div">
        <button id="s3-5" class="item-btn ">item5</button>
        <span id="s3-5c" class="counter ">0</span>
      </div>

      <div class="item-div">
        <button id="s3-6" class="item-btn ">item6</button>
        <span id="s3-6c" class="counter ">0</span>
      </div>

      <div class="limit-within-section">
      <hr>
      <div class="limit-of-text"> Only 1 choice can be cheese </div>
      </div>

      <div class="item-div">
        <button id="s3-7" class="item-btn ">item7</button>
        <span id="s3-7c" class="counter ">0</span>
      </div>

      <div class="item-div">
        <button id="s3-8" class="item-btn ">item8</button>
        <span id="s3-8c" class="counter ">0</span>
      </div>

      <div class="item-div">
        <button id="s3-9" class="item-btn ">item9</button>
        <span id="s3-9c" class="counter ">0</span>
      </div>

      <div class="item-div">
        <button id="s3-10" class="item-btn ">item10</button>
        <span id="s3-10c" class="counter ">0</span>
      </div>

      <div class="reset-div" >
        <button id="s3-reset" type="button" onclick="s3.section_reset()">
          reset
        </button>
      </div>

    </div>
        <!--
// SECTION  3 ////////////////////////
//////////////////////////////////////
// SECTION  4 ////////////////////////
--> 
    <!-- START SECTION 4 -->

    <div class="section" id="s4-section-div">

      <div class="section-header" id="s4-header">
        <!-- START SECTION  HEADER -->

        <h2 class="section-title" id="s4-title">section title (Fruits & Veggies)</h2>
        <!-- <span class="section-counter" id="sc"> 0 </span> -->

        <span
          >(choose
          <span class="choose-amount" id="s4-choose-amount"> 0 </span>
          )</span
        >
      </div>
      <!-- END SECTION  HEADER -->

      <div class="item-div">
        <button id="s4-" class="item-btn ">item</button>
        <span id="s4-c" class="counter ">0</span>
      </div>

        <!--
// SECTION  4 ////////////////////////
//////////////////////////////////////
// SECTION  5 ////////////////////////
--> 
    <!-- START SECTION 5-->

    <div class="section" id="s5-section-div">

      <div class="section-header" id="s5-header">
        <!-- START SECTION  HEADER -->

        <h2 class="section-title" id="s5-title">section title (s5 Beans) </h2>
        <!-- <span class="section-counter" id="sc"> 0 </span> -->

        <span
          >(choose
          <span class="choose-amount" id="s5-choose-amount"> 0 </span>
          )</span
        >
      </div>
      <!-- END SECTION  HEADER -->

      <div class="item-div">
        <button id="s5-" class="item-btn ">item1</button>
        <span id="s5-c" class="counter ">0</span>
      </div>

      <div class="item-div">
        <button id="s5-" class="item-btn ">item2</button>
        <span id="s5-c" class="counter ">0</span>
      </div>

      <div class="item-div">
        <button id="s5-" class="item-btn ">item3</button>
        <span id="s5-c" class="counter ">0</span>
      </div>

      <div class="item-div">
        <button id="s5-" class="item-btn ">item4</button>
        <span id="s5-c" class="counter ">0</span>
      </div>

        <!--
// SECTION  5 ////////////////////////
//////////////////////////////////////</div>

"use strict";

s1_items_proto = {
  __proto__: item_Methods,
};

s2_items_proto = {
  __proto__: item_Methods,
  get section() {
    return s2;
  },
};

const itemMethods = {
  init() {
    // call to activate >> item#.init();
    this.button.addEventListener("click", () => this.select());
  },

  add_1() {
    this.count++;
    this.section.count++;
  },

  set_item_selected_to_true() {
    this.selected = true;
  },

  set_item_selected_to_false() {
    this.selected = false;
  },

  style_item_counter_to_empty() {
    // text invisible & no border
    this.counter.style.color = "white";
    //this.counter.style.backgroundColor = "rgb(233,233,237)";
    //this.counter.style.border = "none";
  },

  style_item_counter_to_selected() {
    // text-visible & background green #beecc7
    this.counter.style.color = "black";
    //this.counter.style.border = "1px solid #bffabb";
    //this.counter.style.backgroundColor = "#e9fce8"; //green
  },

  style_all_selected_item_counters_to_empty() {
    // No border, and text invisible.
    this.section.counter.style.color = "white";
    //s1.counter.style.backgroundColor = "rgb(233,233,237)";
    //s1.counter.style.border = "none";
  },

  display_item_count_on_page() {
    this.counter.innerHTML = this.count;
  },

  //display_section_count_on_page() { s1.counter.innerHTML = s1.count; },

  disable_unselected_item_buttons() {
    this.section.items.forEach((item) => {
      if (!item.selected) {
        item.button.disabled = true;
      }
    });
  },

  enable_unselected_item_buttons() {
    this.section.items.forEach((item) => {
      if (!item.selected && item.button) {
        item.button.disabled = false;
      }
    });
  },

  set_item_count_to_zero() {
    this.count = 0;
  },

  set_section_count_to_zero() {
    this.section.count = 0;
  },

  set_item_selected_to_false() {
    this.selected = false;
  },

  activate_all_item_buttons_in_section() {
    this.section.items.forEach((item) => {
      item.button.disabled = false;
    });
  },

  log_item_status() {
    console.log(
      `${this.name} count is ${this.count}, selected ${this.selected}.`,
    );
  },

  log_section_count() {
    console.log(this.section.name + " count is: " + this.section.count);
  },

  set_section_limit_reached_to_true() {
    this.section.limit_reached = true;
  },

  set_section_limit_reached_to_false() {
    this.section.limit_reached = false;
  },

  select_item_from_zero() {
    this.add_1();
    this.set_item_selected_to_true();
    this.log_item_status();
    this.log_section_count();
    this.style_item_counter_to_selected();
    //this.style_section_counter_to_selected();
    this.display_item_count_on_page();
    //this.display_section_count_on_page();

    if (this.section.count == this.section.limit) {
      this.set_section_limit_reached_to_true();
      //this.style_item_counter_to_limit_reached();
      //this.style_section_counter_to_limit_reached();
      this.disable_unselected_item_buttons();
      this.log_section_status();
      //this.style_all_selected_item_counters_to_limit_reached();
    }
  },

  log_section_status() {
    console.log(
      this.section.name +
        " count is " +
        this.section.count +
        ", limit reached " +
        this.section.limit_reached,
    );
  },

  remove_item_from_section_count() {
    this.section.count = this.section.count - this.count;
  },

  display_all_section_counts() {
    //s1.counter.innerHTML = s1.count;
    this.section.items.forEach((item) => {
      item.counter.innerHTML = item.count;
    });
  },

  drop_item_from_section() {
    this.remove_item_from_section_count();
    this.set_section_limit_reached_to_false();
    this.log_section_status();
    this.set_item_count_to_zero();
    this.set_item_selected_to_false();
    this.log_item_status();
    this.enable_unselected_item_buttons();
    this.style_item_counter_to_empty();
    //this.style_all_selected_item_counters_to_selected();
    //this.style_section_counter_to_selected();
    /*if (s1.count == 0) {
      this.style_section_counter_to_empty();
    } else {this.style_section_counter_to_selected();}
    */
  },

  select_item_from_section_while_limit_reached() {
    if (this.section.limit_reached) {
      this.drop_item_from_section(); // enable buttons /
      this.display_all_section_counts();
      //this.style_item_counters : 0, selected, or at limit
    }
  },

  select() {
    if (this.section.limit_reached) {
      this.select_item_from_section_while_limit_reached();
    } else {
      this.select_item_from_zero();
    }
  },

  ////////////// BEGIN RESET METHODS  /////////////////////////////////////

  log_section_status() {
    console.log(
      this.section.name +
        " count is " +
        this.section.count +
        ", limit reached " +
        this.section.limit_reached,
    );
  },

  log_all_items_status() {
    if (item1.count + item2.count + item3.count + item4.count == 0) {
      console.log("All item counts are 0");
    } else {
      this.section.items.forEach((item) => {
        console.log(item.name + " count is " + item.count);
      });
    }
    if (
      !item1.selected &&
      !item2.selected &&
      !item3.selected &&
      !item4.selected
    ) {
      console.log("All item selecteds are false");
    } else {
      this.section.items.forEach((item) => {
        console.log(item.name + " selected " + item.selected);
      });
    }
  },

  set_section_count_to_zero() {
    this.section.count = 0;
  },

  set_all_item_counts_to_zero() {
    this.section.items.forEach((item) => {
      item.count = 0;
    });
  },

  set_section_limit_reached_to_false() {
    this.section.limit_reached = false;
  },

  set_all_item_selecteds_to_false() {
    this.section.items.forEach((item) => {
      item.selected = false;
    });
  },

  style_section_counter_to_empty() {
    // text invisible & no border
    this.section.counter.style.backgroundColor = "rgb(233,233,237)";
    this.section.counter.style.color = "rgb(233,233,237)";
    this.section.counter.style.border = "none";
    this.section.counter.innerHTML = this.section.count;
  },

  style_all_item_counters_to_empty() {
    this.section.items.forEach((item) => {
      //item.counter.style.backgroundColor = "rgb(233,233,237)";
      item.counter.style.color = "white";
      //item.counter.style.border = "none";
      item.counter.innerHTML = item.count;
    });
  },

  enable_all_item_buttons() {
    this.section.items.forEach((item) => {
      item.button.disabled = false;
    });
  },

  reset_section() {
    this.set_section_count_to_zero();
    this.set_section_limit_reached_to_false();
    this.log_section_status();
    //this.style_section_counter_to_empty();
    this.enable_all_item_buttons();

    this.set_all_item_counts_to_zero();
    this.set_all_item_selecteds_to_false();
    this.log_all_items_status();
    this.style_all_item_counters_to_empty();
  },
};
