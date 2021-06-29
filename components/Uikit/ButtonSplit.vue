/** GLOVORY DESIGN STANDARD
    CREATED   : 2020.12.10 BY RIZGUST
    FUNCTION  : PURPOSE BUTTON SPLIT DESIGN STANDARD
    UPDATED   : -
*/

<template>
  <div class="button-split">
    <button class="flex-wrapper-two">
      <p class="txt-btn">{{ txtBtn }}</p>
    </button>
    <button class="flex-wrapper-one">
      <img :src="icon" alt="" />
    </button>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: { Button },
  name: "ButtonsplitSolidPrimaryNormal",
  props: {
    txtBtn: { type: String, default: "Primary" },
    icon: {
      type: String,
      default:
        "https://static.overlay-tech.com/assets/0a828cf9-d511-4a28-971a-4b05581d0db5.svg",
    },
  },
};
</script>

<style lang="scss" scoped>
.button-split {
  display: flex;
  align-items: flex-start;
}
.flex-wrapper-two {
  background-color: $solid-primary-50;
  border-radius: 4px 0 0 4px;
  padding: 6px 6px 6px 10px;
  display: flex;
  align-items: flex-start;
  border: 2px solid $solid-primary-50;
  cursor: pointer;
}
.flex-wrapper-two:focus {
  box-shadow: 0 0 0px 2px $alpha-primary-04;
  border: 2px solid $solid-primary-60;
  outline: none;
}
.flex-wrapper-two:hover {
  border: 2px solid $solid-primary-60;
}
.txt-btn {
  @include roboto-16-semibold;
  color: $text-white;
  text-align: center;
}
.flex-wrapper-one {
  background-color: $solid-primary-50;
  border-radius: 0 4px 4px 0;
  padding: 6px 2px;
  display: flex;
  align-items: flex-start;
  border: 2px solid $solid-primary-50;
  cursor: pointer;
}
.flex-wrapper-one:focus {
  box-shadow: 0 0 0px 2px $alpha-primary-04;
  border: 2px solid $solid-primary-60;
  outline: none;
}
.flex-wrapper-one:hover {
  border: 2px solid $solid-primary-60;
}
</style>