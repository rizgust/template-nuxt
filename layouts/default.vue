<template>
	<div class="main-wrapper">
		<Header>
			<template v-slot:side-logo>
			</template>
			<template v-slot:side-actions>
				<Button :class="''" :type="'link'" :label="''" :size="'tight'" :nofocus="true" :iconLeft="cart" :iconLeftHover="cartHover" @click.native="showCart"/>	
				<Button :class="''" :type="'link'" :label="''" :size="'tight'" :nofocus="true" :iconLeft="avatar" :iconLeftHover="avatarHover" @click.native="gotToProfile"/>	
			</template>
			<template v-slot:header-overlay>
			</template>
		</Header>
		<main>			
			<div class="body-wrapper">
				<nuxt/>
			</div>
		</main>
		<Footer></Footer>
	</div>
</template>
<script>
export default {
    components: {
	},
	data() {
		return {
		};
	},
	mounted(){
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		// true for mobile device
			console.log("mobile device :" + /iPhone|iPad|iPod/i.test(navigator.userAgent)?'Apple':'Android');
		}else{
		// false for not mobile device
			console.log("not mobile device");
		}
	},
	watch:{
	},
    computed: {
		avatar(){
			return '/icons/person-outline.svg'
		},
		avatarHover(){
			return '/icons/person.svg'
		},
		cart(){
			return '/icons/shopping-cart-outline.svg'
		},
		cartHover(){
			return '/icons/shopping-cart.svg'
		},
	},
	methods:{
		gotToIndex () {
			if(this.$route.path =='/'){window.location.reload();} 
			else this.$router.push({ name: 'index' });
		},
		gotToProfile () {
		},
		showCart () {

		},
	}
}
</script>
<style>
html {
	font-family: 'Roboto', sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*::before,
*::after {
 	margin: 0;
}

.main-wrapper {
	margin-top: 5vh;
	background-color: #f5f6f8;
	min-height: 95vh;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
}
.body-wrapper {
	padding: 40px;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
}
.backdrop-overlay{
	position: absolute;
	left:0;
	right:0;
    top: 78px;
	bottom:0;
	z-index: 1;
	background-color:rgba(0, 0, 0, 0.3);
}
</style>
