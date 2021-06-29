/** GLOVORY DESIGN STANDARD
    CREATED   : 2020.12.08 BY RIZGUST
    FUNCTION  : PURPOSE HEADER DESIGN STANDARD
    UPDATED   : -
*/

<template>
	<div class="header-wrapper">
		<div class="header-container">
			<div class="header-logo">
				<img :src="imgLogo" alt="" class="actions" @click="gotToIndex"/>
				<slot name="side-logo"></slot>
			</div>
			<div class="header-actions">     
				<slot name="side-actions"></slot>
			</div>
		</div>
	</div>  
</template>

<script>
import Avatar from "../User/Avatar.vue";
export default {
	name: "ComponentsHeader",
	components: { Avatar },
	props: {
		showLoginModal:{ type: Boolean, default: false },
		imgLogo: {
			type: String,
			default:"https://dl.airtable.com/.attachments/f88a23a3bd8fde4ceda4f8fa55e84be2/92a88ea2/bcc2856a837b3894332efece359278c7.jpg",
		},
		userInfo: {
			type: Object
		},
	},
	computed:{
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>

.header-wrapper {
	box-shadow: 0px 2px 4px rgba(126,142,177,0.12);
	background: $white;
	position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: auto;
}
.header-container {
	padding: 0 40px 0 40px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 1280px;
	min-height: 5vh;
    margin-left: auto;
    margin-right: auto;
}
.header-logo {
    width: 50%;
	display: flex;
	justify-content: flex-start;
	img{    
		height: 40px;
		margin-right: 20px;
	}
}
.header-actions{  
    width: 50%;
	display: flex;
	justify-content: flex-end;
}
.header-actions > * {
    margin-left: 10px;
}

// TODO: WE CAN MOVE IT TO INDEPENDENT COMPONENT
.action-container {
    width: 100%;
	display:flex;
    position: relative;
}
.indicator {
	background-color: $solid-danger-50;
	border-radius: 4px;
	padding: 2px 4px;
	position: absolute;
    top: -12px;
    right: -15px;
}
.indicator.hide {
	display: none;
}
.txt-indicator {
	min-width: 12px;
	@include roboto-10-semibold;
	color: $text-white;
	text-align: center;
	text-transform: uppercase;
}

.action-container {
	z-index: 999;
	display: flex;
	align-items: flex-start;
	position: relative;
}
.backdrop-overlay-header{
	position: absolute;
	left:0;
	right:0;
    top: 0;
	bottom:0;
	z-index: 101;
	background-color:rgba(0, 0, 0, 0.3);
}

.search-suggestion-container{	
	z-index: 1000;
	position: fixed;
    background: whitesmoke;
    top: 43px;
  	// border: 1px solid $solid-primary-50;
    border-radius: 8px;
	// padding: 15px;
	max-height: 450px;
	min-width: 200px;
    width: calc(100% - 30px);
    position: absolute;
    overflow-y: scroll;
    outline: none;
    // border-radius: 0px 0px 8px 8px;
    // box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 8px 0px;
    padding: 15px;
    margin-top: 3px;
    transform: translate3d(0px, 0px, 0px);
}
.search-suggestion{
    width: 100%;
}

.popular-search{
	label{
		@include roboto-16-semibold;
	}
}

.search-data{
	margin-top: 5px;
	margin-bottom: 5px;
	display: flex;
	flex-wrap: wrap;
	.quick-search-item{
		margin-bottom: 5px;
	}
}
.search-item{
	padding: 5px;
}
.search-item:hover{
	border-radius: 6px;
	background-color: $solid-black-40;
}

.search-title{
	display: flex;
	justify-content: space-between;
}
</style>