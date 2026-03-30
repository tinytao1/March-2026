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
      </div> <!-- END SECTION  HEADER -->
      
      <div class="item-div">
        <button id="s-" class="item-btn ">item</button>
        <span id="s-c" class="counter ">0</span>
      </div>

      <div class="reset-div" >
        <button id="s-reset" class="reset-btn ">
          ?reset?
        </button>
      </div>

    </div> <!-- END SECTION  -->
        <!--
// SECTION  /////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// SECTION  /////////////////////////////////////////////////////////////////////////////////////
-->

"use strict";

const s = {
  name: false,
  section_abbr: false,
  selected: false,
  count: 0,
  limit: false,
  limit_reached: false,

  title: document.querySelector("#s-title"),
  choose: document.querySelector("#s-choose-amount"),

  get items() {
    return [
      this.item1,
    ];
  },

  reset: {
    name: "reset",
    button: document.querySelector("#s-reset"),
    __proto__: item_Methods,
    get section() {
      return s;
    },
  },

  item: {
    name: null,
    count: 0,
    limit: false,
    selected: false,
    limit_reached: false,

    button: document.querySelector("#s-"),
    counter: document.querySelector("#s-c"),
     __proto__: item_Methods,
   get section() {
      return s;
    },
  },

};
