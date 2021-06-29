/** GLOVORY DESIGN STANDARD
    CREATED   : 2020.12.10 BY RIZGUST
    FUNCTION  : PURPOSE AVATAR DESIGN STANDARD
    UPDATED   : 2020.12.11 BY RIZGUST -  Generalize style && Add bagde
*/

<template>
  <div class="avatar-container">
    <img :src="avatar!=null && avatar!='' ? avatar : '/icons/placeholder.svg'" alt="" class="avatar" />
    <div :class="badgeClass"></div>
  </div>

</template>

<script>
export default {
  name: "Avatar",
  props: {
    avatar: {
      type: String,
      default: "/icons/placeholder.svg",
    },
    badge: {
      type: String,
      default: 'none',
      validator: function (value) {
        return ['success', 'info', 'warning', 'danger', 'none'].indexOf(value) !== -1;
      },
    }
  },
  computed: {
    badgeClass() {
      return `${this.badge!='none'?'status '+this.badge:''}`
    }
  },
};
</script>

<style lang="scss" scoped>
.avatar-container {
  display: flex;
  align-items: flex-start;
  width: 48px;
  height: 48px;
  margin-right: 10px;
  position: relative;
}
.avatar {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.status {
  position: absolute;
  right: 0;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  box-shadow: 0 0 0px 3px $white;
}
.status.success {
  background-color: $solid-success-50;
}
.status.danger {
  background-color: $solid-danger-50;
}
.status.warning {
  background-color: $solid-warning-50;
}
.status.info {
  background-color: $solid-info-50;
}
</style>