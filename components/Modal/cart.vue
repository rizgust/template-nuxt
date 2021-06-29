<template>
    <div class="modal-container-side overflow-y-auto">
        <div class="modal-header shade">
            <div class="modal-title">
                <img :src="'/icons/close.svg'" @click="closModal" class="actions-icons navigation">
                <label>Cart</label>
            </div>
            <client-only>
                <div v-if="(cart.length>0)===true">
                    <Button @click.native="removeAllFromCart" :type="'danger'" :outline="true" :nofocus="true" :label="'Clear All'"/>
                </div>
            </client-only>
        </div>
        <div class="modal-body">
            <div class="cart-list">
                <div class="cart-item"  v-for="data in cart" :key="data.id">
                    <div class="cart-item-content">
                        <div class="cart-item-thumbnail"><img :src="`${data.imageUrl!=''?data.imageUrl:'/icons/placeholder.svg'}`" loading="lazy" alt="" class="cart-item-image"></div>
                        <div class="cart-item-name">
                            <div class="item-title"><label>{{ data.name }}</label></div>   
                            <div style="display: flex; width: 100%; justify-content: space-between;"> 
                                <div class="item-price"><label>{{ data.price==0?'Free':'Rp '+data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }}</label></div>
                                <div class="cart-item-modifier">
                                    <img :src="'/icons/trash.svg'" loading="lazy" alt="" class="actions-icons navigation" @click="removeFromCart(data.id)">
                                    <Button :label="'-'" @click.native="reduceQuantity(data.id)" :size="'extra-small'" :type="'danger'" :outline="true" :nofocus="true"/>
                                    <!-- <div class="box left actions" @click.native="reduceQuantity(data.id)"><label>-</label></div>     -->
                                    <div class="mod-quntity">{{ data.quantity }}</div>
                                    <!-- <div class="box right actions" @click.native="reduceQuantity(data.id)"><label>+</label></div>     -->

                                    <Button :label="'+'" @click.native="addQuantity(data.id)" :size="'extra-small'" :type="'danger'" :outline="true" :nofocus="true"/>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <client-only>
                    <div class="no-content" v-if="(cart.length<=0)===true">
                        <img src="/icons/bag.png" loading="lazy" alt="Glovory Logo" class="image" />
                        <p class="no-content empty-title">Yout cart is emtpy</p>
                        <p class="no-content empty-desc">Please add product by clicking 'Add to cart' button</p>
                    </div>                 
                </client-only>
            </div>
        </div>
        <client-only>
            <div class="modal-footer" v-if="(cart.length>0)===true">
                <Button @click.native="purchaseCart" :type="'danger'" :nofocus="true" :size="'fit'" :label="'Purchase Order Rp. '+buyLabel"/>
            </div>
        </client-only>
        <client-only>
            <Modal v-model="showConfirmModal" :persistent="true">
                <Confirm v-model="confirmRemoveAll" :title="'Clear All Cart'" :messege="'Are you sure that you want to clear all cart?'"/>        
            </Modal>	
            <Modal v-model="showLoginModal">
                <Login v-model="showLoginModal" :poModal="true"/>        
            </Modal>
        </client-only>
    </div>   
</template>

<script>
import './modal.scss'
export default {  
    data(){
        return{
            showLoginModal: false,
            showConfirmModal: false,
            confirmRemoveAll:''
        }
    },
    props:{
        showModal: { type: Boolean, default: false },
    },
    watch:{
        confirmRemoveAll(){
            if(this.confirmRemoveAll!='' && this.confirmRemoveAll!=null)
            {
                this.showConfirmModal=false;
                if(this.confirmRemoveAll=='yes') this.$store.commit('removeFromCart', null);
            }
            this.confirmRemoveAll=''
        },
        invoiceGenerated(newValue) {
            if(newValue!=''){
                var messege = "Your purchase is successfully proceeded, the invoice have been created";
                this.$toasted.show(messege, { 
                    theme: "bubble", 
                    type : 'success',
                    position: "top-right", 
                    duration : 3000
                });
                this.closModal();
            }
        }
    },
    computed: {
        invoiceGenerated(){
            return this.$store.getters.invoiceGenerated;
        },
        cart () {
            return this.$store.getters.getCartData;
        },
        userInfo () {
            return this.$store.getters.getUserInfo;
        },
        buyLabel () {
            let productsAdded = this.$store.getters.getCartData,
                pricesArray = [],
                finalPrice = '',
                quantity = 1;

            productsAdded.forEach(product => {

                if (product.quantity >= 1) {
                    quantity = product.quantity;
                }

                pricesArray.push((product.price * quantity)); // get the price of every product added and multiply quantity
            });

            finalPrice = pricesArray.reduce((a, b) => a + b, 0); // sum the prices

            return `${finalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
        },
        isUserLoggedIn () {
            return this.$store.getters.isUserLoggedIn;
        },
	},
	methods:{
		closModal () {
            this.$emit('input', false)
		},
        showClearAllCartModal () {
            this.$store.commit('showClearAllCart', true);
        },
        purchaseCart () {
            if (this.isUserLoggedIn) {                
                if(!this.$store.state.loading){
                    this.$store.commit('setLoading', true);
                // 	this.isCheckoutSection = true;
                    this.$store.dispatch('addInvoice')
                    .then( (result) => {
                        // var messege = "Your purchase is successfully proceeded, the invoice have been sent to your email";
                        // if(result.status==200){
                        //     var messege = "Your purchase is successfully proceeded, the invoice have been created";
                        //     this.$toasted.show(messege, { 
                        //         theme: "bubble", 
                        //         type : 'success',
                        //         position: "top-left", 
                        //         duration : 3000
                        //     });
                        //     this.closModal();
                        // }
                    });
                    
                }
            } else {
                this.showLoginModal = !this.showLoginModal;
            }
        },
        addQuantity(id){
            let data = {
                id: id,
                mod: 1
            }
            this.$store.commit("updateQuantity", data);
        },
        reduceQuantity(id){
            let data = {
                id: id,
                mod: -1
            }
            this.$store.commit("updateQuantity", data);
        },
        removeFromCart (id) {
            let data = {
                id: id,
                status: false
            }
            this.$store.commit('removeFromCart', id);
        },
        removeAllFromCart () {
            this.showConfirmModal = !this.showConfirmModal;
        },
	}
};
</script>

<style lang="scss" scoped>
.cart-list {    
    display: block;
    padding: 16px;
    clear: both;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
    align-content: flex-start;
    align-self: flex-start;
    flex: 1;
}
.cart-item{    
    // padding-top: 16px;
    // padding-bottom: 8px;s
    border-bottom: 1px solid $solid-black-40;
}
.cart-item-content{
    display: flex;
}
.cart-item-modifier{
    display: flex;
    align-items: center;    
    justify-content: flex-end;
    .mod-quntity{
        width: 50px;
        text-align: center;
        // border-bottom: 2px solid $solid-danger-50;
    }
    .box{
        text-align: center;
        text-align: center;
        border: 1px solid $solid-danger-50;
    }
    .left{
        width: 15px;
        border-radius: 6px 0 0 6px;
    }
    .right{
        width: 15px;
        border-radius: 0 6px 6px 0;
    }
}
.cart-item-thumbnail{
    display: block;
    width: 85px;
    // height: 50px;
    float: left;
    margin: 10px;
    .cart-item-image {
        width: 70px;
        -o-object-fit: contain;
        object-fit: contain;
        border-radius: 4px;
    }
}
.cart-item-name{
    padding-top: 10px;
    padding-bottom: 10px;
    flex-direction: column;
    display: flex;
    align-self: stretch;
    width: 100%;
    .item-title {
        @include roboto-16-semibold;
        color: $text-solid-black-80;
    }
    .item-price {	
        @include roboto-16-semibold;
        color: $solid-danger-50;
    }
}
</style>