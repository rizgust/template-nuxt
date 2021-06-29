/** GLOVORY DESIGN STANDARD
    CREATED   : 2020.12.14 BY RIZGUST
    FUNCTION  : PURPOSE USER ACTIVITY ITEM DESIGN STANDARD
    UPDATED   : -
*/
<template>
  <div class="components-recent-activity-itemwnode">
    <p class="time">{{ time }} MIN</p>
    <div class="timeline-node">
      <div class="time-pin"></div>
      <div class="timeline"></div>
    </div>
    <div class="card">
      <UserProfile :badge="'none'" />
    </div>
  </div>
</template>

<script>
import UserProfile from "./UserProfile.vue";

export default {
  name: "ComponentsRecentActivityItemwnode",
  components: { UserProfile },
  props: {
    time: { type: Number, default: 10 },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: $white;
  border-radius: 4px;
  padding-left: 20px;
  box-shadow: 0 2px 4px 0 $alpha-black-02;
  display: flex;
  align-items: center;
}
.components-recent-activity-itemwnode {
  display: flex;
  align-items: center;
}
.time {
  width: 54px;
  @include roboto-12-normal;
  color: $text-solid-black-60;
  text-align: right;
  text-transform: uppercase;
  margin-right: 8px;
}
.timeline-node {
  display: flex;
  align-items: flex-start;
}
.time-pin {
  width: 12px;
  height: 12px;
  background-color: $solid-black-40;
  margin-right: 2px;
  border-radius: 20px;
  border: 2px solid $solid-black-60;
}
.timeline {
  width: 14px;
  height: 2px;
  background-color: $solid-black-40;
  margin-top: 7px;
}
</style>