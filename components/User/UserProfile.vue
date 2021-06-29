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
      <p class="role">{{ role }}</p>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";
export default {
  name: "UserProfile",
  components: { Avatar },
  props: {
    badge: {
      type: String,
      default: 'success',
      validator: function (value) {
        return ['success', 'info', 'warning', 'danger', 'none'].indexOf(value) !== -1;
      },
    },
    name: { type: String, default: "John Mayers" },
    role: { type: String, default: "Account Manager" },
    avatar: {
      type: String,
      default:
        "https://static.overlay-tech.com/assets/658083d5-7525-4e33-805b-86d778e7bdc4.png",
    },
    compact: { type: Boolean, default: false },
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
  background-color: $transparent;
  padding: 16px 16px 16px 0;
  display: flex;
  align-items: center;
  width: min-content;
}
.profile-container.compact {
  padding: 0px 0px 0px 0;
}
.avatar {
  margin-right: 10px;
}
.identity {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.name {
  width: 207px;
  @include roboto-16-semibold;
  color: $text-solid-black-80;
}
.role {
  width: 207px;
  @include roboto-10-normal;
  color: $text-solid-black-60;
  text-transform: uppercase;
}
</style>