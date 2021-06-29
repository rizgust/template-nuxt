/** GLOVORY DESIGN STANDARD
    CREATED   : 2020.12.08 BY RIZGUST
    FUNCTION  : PURPOSE CARD AVATAR LIST DESIGN STANDARD
    UPDATED   : 2020.12.14 BY RIZGUST - add hover state
*/

<template>
  <div class="components-usr-list">
    <Avatar />
    <div class="user-info">
      <p class="user-name">{{ userName }}</p>
      <p class="user-message">{{ messege }}</p>
    </div>
    <div class="user-badge">
      <p class="user-badge-value">{{ badge }}</p>
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";
export default {
  name: "UserCard",
  components: { Avatar },
  props: {
    userName: { type: String, default: "Simon Backs" },
    messege: {
      type: String,
      default: "What is going on, are we...",
    },
    avatar: {
      type: String,
      default:
        "https://static.overlay-tech.com/assets/658083d5-7525-4e33-805b-86d778e7bdc4.png",
    },
    badge: { type: String, default: '24 min' },
  },
};
</script>

<style lang="scss" scoped>
.components-usr-list {
  background-color: $solid-black-5;
  padding: 20px 20px 24px 24px;
  box-shadow: 0 -1px 0px 0 $alpha-black-02 inset;
  display: inline-flex;
  align-items: flex-start;
  .user-name{
    color: $text-solid-black-80;
  }
  .user-message {
    color: $text-solid-black-60;
  }
  .user-badge {
     background-color: $white;
    .user-badge-value {
      color: $text-solid-black-60;
    }
  }
}
.components-usr-list:hover {
  background-color: $solid-primary-50;
  box-shadow: 0 -1px 0px 0 $solid-primary-60 inset;
  .user-name{
    color: $text-white;
  }
  .user-message {
    color: $text-solid-primary-10;
  }
  .user-badge {
    background-color: $solid-primary-60;
    .user-badge-value {
      color: $text-white;
    }
  }
}
.user-info {
  margin-top: 4px;
  margin-right: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.user-name {
  width: 178px;
  @include roboto-16-semibold;  
}
.user-message {
  width: 250px;
  @include roboto-14-normal;
}
.user-badge {
  border-radius: 12px;
  padding: 0 4px;
  display: flex;
  align-items: flex-start;
}
.user-badge-value {
  @include roboto-12-normal;
}
</style>