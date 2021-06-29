<template>
    <div class="footer-wrapper">
        <div class="footer-container">
            <div class="footer-text">&copy; 2021 XXXX. All rights reserved.</div>
        </div>
    </div>
</template>
<script>
    export default {};
</script>

<style lang="scss" scoped>

.footer-wrapper {
	background: $primary;
}
.footer-container {
	padding: 8px 40px 8px 40px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
}
.footer-text{
  @include roboto-16-semibold;
  color: $white;
}
</style>