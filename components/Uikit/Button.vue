/** GLOVORY DESIGN STANDARD
	CREATED : 20201204, by Rizgust
	USAGE	: General purpose button component
	UPDATED ; - 
 */
<template>
  <button :class="classes" :disabled="disabled" @mouseover="hover = true"  @mouseleave="hover = false">
    <img :src="iconLeftSrc" alt="" class="icon-btn-filter" />
    <p class="btn-text">{{ label }}</p>
  </button>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      hover: false,
    };
  },
	props: {
		label: { type: String, default: "primary" },
		type: {
			type: String,
			default: 'primary',
			validator: function (value) {
				return ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'white', 'link'].indexOf(value) !== -1;
			},
		},
		disabled: {
			type: Boolean,
      		default: false
		},
		outline: {
			type: Boolean,
      		default: false
		},	
		round: {
			type: Boolean,
      		default: false
		},
		nofocus: {
			type: Boolean,
        default: false
		},	
		transparent: {
			type: Boolean,
        default: false
		},	
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["extra-small", "small", "medium", "big", "big-box", "fit", "tight"].indexOf(value) !== -1;
      },
    },
    iconLeft: {
      type: String,
      default: ""
    },
    iconLeftHover: {
      type: String,
      default: ""
    },
	},
  computed: {
    classes() {
      return `btn ${this.size} ${this.type} ${this.outline ? "outline" : ""} ${this.round ? "round" : ""} ${this.nofocus ? "nofocus" : ""} ${this.transparent ? "transparent" : ""}`;
    },
    iconLeftSrc(){
      return this.hover?this.iconLeftHover:this.iconLeft
    }
  },
};
</script>

<style lang="scss" scoped>
.btn {
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  img{
    width: 30px;
  }
}
.btn.transparent {
  background-color: transparent !important;
}
.btn.tight {
  padding: 0px;
}
.btn.fit {
  width: 100%;
  padding: 6px 10px;
}
.btn.big-box {
  padding: 12px 12px;
}
.btn.big {
  padding: 8px 12px;
}
.btn.medium {
  padding: 6px 10px;
}
.btn.small {
  padding: 4px 8px;
}
.btn.extra-small {
  padding: 0px;
  line-height: 20px;
  width: 24px;
  p{
    line-height: 20px !important;
  }
}
.btn.round {
  border-radius: 40px;
  padding: 6px 14px;
}
.btn:not([disabled]) {
	cursor: pointer;
}
.btn:focus {
  outline: none;
}
.btn:disabled {
  opacity: 0.4;
}

.btn.primary {
  background-color: $solid-primary-50;
  border: 2px solid $solid-primary-50;
}
.btn.primary.outline {
  background-color: $white;
  border: 2px solid $solid-primary-50;
  p {
    color: $solid-primary-50;
  }
}
.btn.primary.outline:not([disabled]):hover {
  background-color: $solid-primary-50;
  p {
    color: $white;
  }
}
.btn.primary:not([disabled]):hover,
.btn.primary:not([disabled]):not(.nofocus):focus {
  border: 2px solid $solid-primary-60;
}
.btn.primary:not(.nofocus):focus {
  box-shadow: 0 0 0px 2px $alpha-primary-04;
}

.btn.secondary {
  background-color: $solid-black-80;
  border: 2px solid $solid-black-80;
}
.btn.secondary.outline {
  background-color: $white;
  border: 2px solid $solid-black-80;
  p {
    color: $solid-black-80;
  }
}
.btn.secondary.outline:not([disabled]):hover {
  background-color: $solid-black-80;
  p {
    color: $white;
  }
}
.btn.secondary:not([disabled]):hover,
.btn.secondary:not([disabled]):not(.nofocus):focus {
  border: 2px solid $solid-black-90;
}
.btn.secondary:not(.nofocus):focus {
  box-shadow: 0 0 0px 2px $alpha-primary-04;
}

.btn.success {
  background-color: $solid-success-50;
  border: 2px solid $solid-success-50;
}
.btn.success.outline {
  background-color: $white;
  border: 2px solid $solid-success-50;
  p {
    color: $solid-success-50;
  }
}
.btn.success.outline:not([disabled]):hover {
  background-color: $solid-success-50;
  p {
    color: $white;
  }
}
.btn.success:not([disabled]):hover,
.btn.success:not([disabled]):not(.nofocus):focus {
  border: 2px solid $solid-success-60;
}
.btn.success:not(.nofocus):focus {
  box-shadow: 0 0 0px 2px $alpha-success-04;
}

.btn.info {
  background-color: $solid-info-50;
  border: 2px solid $solid-info-50;
  p {
    color: $text-solid-black-80;
  }
}
.btn.info.outline {
  background-color: $white;
  border: 2px solid $solid-info-50;
  p {
    color: $solid-info-50;
  }
}
.btn.info.outline:not([disabled]):hover {
  background-color: $solid-info-50;
  p {
    color: $white;
  }
}
.btn.info:not([disabled]):hover,
.btn.info:not([disabled]):not(.nofocus):focus {
  border: 2px solid $solid-info-60;
}
.btn.info:not(.nofocus):focus {
  box-shadow: 0 0 0px 2px $alpha-info-04;
}

.btn.warning {
  background-color: $solid-warning-50;
  border: 2px solid $solid-warning-50;
  p {
    color: $text-solid-black-80;
  }
}
.btn.warning.outline {
  background-color: $white;
  border: 2px solid $solid-warning-50;
  p {
    color: $solid-warning-50;
  }
}
.btn.warning.outline:not([disabled]):hover {
  background-color: $solid-warning-50;
  p {
    color: $white;
  }
}
.btn.warning:not([disabled]):hover,
.btn.warning:not([disabled]):not(.nofocus):focus {
  border: 2px solid $solid-warning-60;
}
.btn.warning:not(.nofocus):focus {
  box-shadow: 0 0 0px 2px $alpha-warning-04;
}

.btn.danger {
  background-color: $solid-danger-50;
  border: 2px solid $solid-danger-50;
}
.btn.danger.outline {
  background-color: $white;
  border: 2px solid $solid-danger-50;
  p {
    color: $solid-danger-50;
  }
}
.btn.danger.outline:not([disabled]):hover {
  background-color: $solid-danger-50;
  p {
    color: $white;
  }
}
.btn.danger:not([disabled]):hover,
.btn.danger:not([disabled]):not(.nofocus):focus {
  border: 2px solid $solid-danger-60;
}
.btn.danger:not(.nofocus):focus {
  box-shadow: 0 0 0px 2px $alpha-danger-04;
}

.btn.white {
  background-color: $white;
  border: 2px solid $white;
  p {
    color: $text-solid-black-80 !important;
  }
}
.btn.white:not([disabled]):hover,
.btn.white:not([disabled]):not(.nofocus):focus {
  background-color: $solid-black-10;
  border: 2px solid $solid-black-40;
}
.btn.white:not(.nofocus):focus {
  box-shadow: 0 0 0px 2px $alpha-black-04;
}

.btn-text {
  @include roboto-16-semibold;
  color: $text-white;
  text-align: center;
  width: inherit;
}

.btn.link {
  background-color: $white;
  border: 2px solid $white;
  p {
    color: $solid-primary-50 !important;
  }
}
.btn.link:not([disabled]):hover p {
  color: $solid-primary-60 !important;
  text-decoration: underline;
}
.btn.link:not(.nofocus):focus p {
  color: $solid-primary-60 !important;
  text-decoration: underline;
}
</style>