/** GLOVORY DESIGN STANDARD
    CREATED   : 2020.12.08 BY RIZGUST
    FUNCTION  : PURPOSE BADGE DESIGN STANDARD
    UPDATED   : 2020.12.14 BY RIZGUST ADD OUTLINE & ROUND & OTHER TYPE
*/
<template>
  <div :class="classes">
    <p class="txt-badge">{{ label }}</p>
    <img :src="icon" alt="" />
  </div>
</template>

<script>
export default {
  name: "BadgeSolidPrimary",
  props: {
    label: { type: String, default: "Primary" },
    icon: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "primary",
      validator: function (value) {
        return (
          [
            "primary",
            "secondary",
            "success",
            "info",
            "warning",
            "danger",
            "none"
          ].indexOf(value) !== -1
        );
      },
    },
    outline: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    classes() {
      return `badge-main ${this.outline ? 'outline' : ''} ${this.round?'round':''} ${this.type}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.badge-main {
  background-color: $solid-primary-50;
  border-radius: 4px;
  padding: 0px 6px;
  display: inline-flex;
  align-items: center;
  border: 1px solid $solid-primary-50;
  margin-right: 5px;
}
.badge-main.round {
  border-radius: 40px;
  padding: 0px 8px;
}
.badge-main.primary {
  background-color: $solid-primary-50;
  border: 1px solid $solid-primary-50;
}
.badge-main.outline.none {
  background-color: $white;
  border: 0px solid transparent;
}
.badge-main.outline.primary {
  background-color: $white;
  border: 1px solid $solid-primary-50;
  p {
    color: $solid-primary-50;
  }
}
.badge-main.secondary {
  background-color: $solid-black-80;
  border: 1px solid $solid-black-80;
}
.badge-main.secondary.outline {
	background-color: $white;
	border: 1px solid $solid-black-80;
	p{
		color: $solid-black-80;
	}
}
.badge-main.secondary.outline:not([disabled]):hover {
  background-color: $solid-black-80;
  p {
    color: $white;
  }
}
.badge-main.success {
  background-color: $solid-success-50;
  border: 1px solid $solid-success-50;
}
.badge-main.success.outline {
	background-color: $white;
	border: 1px solid $solid-success-50;
	p{
		color: $solid-success-50;
	}
}
.badge-main.danger {
  background-color: $solid-danger-50;
  border: 1px solid $solid-danger-50;
}
.badge-main.danger.outline {
	background-color: $white;
	border: 1px solid $solid-danger-50;
	p{
		color: $solid-danger-50;
	}
}
.badge-main.warning {
  background-color: $solid-warning-50;
  border: 1px solid $solid-warning-50;
}
.badge-main.warning.outline {
	background-color: $white;
	border: 1px solid $solid-warning-50;
	p{
		color: $solid-warning-50;
	}
}
.badge-main.info {
  background-color: $solid-info-50;
  border: 1px solid $solid-info-50;
}
.badge-main.info.outline {
	background-color: $white;
	border: 1px solid$solid-info-50;
	p{
		color: $solid-info-50;
	}
}
.txt-badge {
  @include roboto-12-normal;
  color: $text-white;
}
</style>