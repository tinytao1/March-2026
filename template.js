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
        <button id="s-" class="item-btn ">item</button>
        <span id="s-c" class="counter ">0</span>
      </div>

        <!--
// SECTION  /////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// SECTION  /////////////////////////////////////////////////////////////////////////////////////
-->

"use strict";

const s = {
  name: null,
  abbr: null,
  selected: false,
  count: 0,
  limit_reached: false,
  limit: false,

  title: document.querySelector("#s-title"),
  choose: document.querySelector("#s-choose-amount"),
  // counter : document.querySelector('#s1c'),
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

  item: {
    name: null,
    selected: false,
    count: 0,
    limit_reached: false,
    limit: false,
    button: document.querySelector("#s-"),
    counter: document.querySelector("#s-c"),
     __proto__: item_Methods,
   get section() {
      return s;
    },
  },
};
