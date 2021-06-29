/** GLOVORY DESIGN STANDARD
    CREATED   : 2020.12.07 BY RIZGUST
    FUNCTION  : PURPOSE USER PROFILE DESIGN STANDARD
    UPDATED   : 2020.12.11 BY RIZGUST - ADD slot function
*/

<template>
  <div :class="containerClass">
    <Avatar :badge="badge" :avatar="avatar"/>
    <div class="identity">
      <p class="name">{{ name }}</p>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";
export default {
  name: "UserProfileBox",
  components: { Avatar },
  props: {
    name: { type: String, default: "John Mayers" },
    avatar: {
      type: String,
      default:
        "https://static.overlay-tech.com/assets/658083d5-7525-4e33-805b-86d778e7bdc4.png",
    },
  },
  computed: {
    containerClass() {
      return `profile-container ${this.compact?'compact':''}`
    }
  },
};
</script>

<style lang="scss" scoped>
.profile-container {
  width: 94px;
  padding: 16px 8px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 4px 0 $alpha-black-02;
  background-color: $white;
  border-radius: 4px;
}
.identity {
  margin-top: 12px;
  background-color: $white;
  padding: 8px 0;
  // box-shadow: 0 -1px 0px 0 $alpha-black-02;
  display: flex;
  align-items: flex-start;
}
.name {
  width: 94px;
  @include roboto-12-normal;
  color: $text-solid-black-80;
  text-align: center;
}
</style>