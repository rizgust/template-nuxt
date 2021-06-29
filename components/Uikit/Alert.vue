/** GLOVORY DESIGN STANDARD
    CREATED   : 2020.12.04 BY RIZGUST
    FUNCTION  : PURPOSE ALERT DESIGN STANDARD
    UPDATED   : -
*/
<template>
	<div :class="classes">
		<p class="text-alert">{{ textAlert }}</p>
		<img :src="iconClose" :hidden="autoClose" alt="" />
	</div>
</template>

<script>
export default {
	name: "AlertDismissingDanger",
	props: {
		textAlert: {
			type: String,
			default: "Your OTP code is not valid, please try again",
		},
		iconClose: {
			type: String,
			default:
				"https://static.overlay-tech.com/assets/4c70589b-a65f-444e-81df-cca78be7e2b6.svg",
		},
		type: {
			type: String,
			default: "danger",
			validator: function (value) {
				return ["success", "info", "warning", "danger"].indexOf(value) !== -1;
			},
		},
		autoClose: {
			type: Boolean,
		},
	},
	computed: {
		classes() {
			return `alert ${this.type}`;
		},
	},
};
</script>

<style lang="scss" scoped>
.alert {
	border-radius: 6px;
	padding: 10px 14px;
	display: flex;
	align-items: flex-start;
	align-items: center;
	justify-content: space-between;
	img:hover{
		cursor: pointer;
	}
}

.alert.danger {
	background-color: $solid-danger-50;
	border: 2px solid $solid-danger-50;
}

.alert.info {
	background-color: $solid-info-50;
	border: 2px solid $solid-info-50;
}
.alert.warning {
	background-color: $solid-warning-50;
	border: 2px solid $solid-warning-50;
}
.alert.success {
	background-color: $solid-success-50;
	border: 2px solid $solid-success-50;
}

.text-alert {
	@include roboto-16-normal;
	color: $text-white;
}
</style>