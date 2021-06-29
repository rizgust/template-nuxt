<template>
    <div class="modal-container-side overflow-y-auto">
        <div class="modal-header">
            <div class="modal-title">
                <img :src="'/icons/close.svg'" @click="closModal" class="actions-icons navigation">
                <label>Login</label>
            </div>
        </div>
        <div class="modal-body">      
            <div class="no-content">
                <div :class="msgContainerClass">
                    <p class="no-content sidemodal-msg">Please Enter your NIK and PIN to login</p>
                </div>
                <div :class="errorContainerClass">      
                    <img :src="'/icons/close-white.svg'"  class="actions-icons icon-close" @click="closeError">
                    <p class="no-content empty-desc error-msg">{{errorMsg}}</p> 
                </div>
            </div>       
            <div class="login-form">
                <Input :label="'NIK'" :placeholder="'Please enter your NIK'" :type="'number'" :error="isInValidNIK" :id="'nik'" :name="'nik'"
                    v-model="NIK"
                    @onEnter="login"
                />
                <Input :label="'PIN'" :placeholder="'Please enter your PIN'" :type="'password-number'" :error="isInValidPIN" :id="'pin'" :name="'pin'"
                    v-model="PIN"
                    @onEnter="login"
                />
                <Button @click.native="login" :type="'danger'" :nofocus="true" :size="'fit'" :label="poModal?'Continue Purchase Order':'Login'"/>
            </div>
        </div>
    </div>    
</template>

<script>

export default {  
    data () {
        return {
            NIK: '',
            PIN: null,
            NIKError: false,
            PINError: false,
            errorMsg:'',
        };
    },
    props:{
        showModal: { type: Boolean, default: false },
        poModal: { type: Boolean, default: false },
    },
    computed: {
        isInValidNIK () {
            return this.NIKError
        },
        isInValidPIN () { 
            return this.PINError
        },
        msgContainerClass(){
            return `msg-container ${this.errorMsg==''?'':'hide'}`
        },        
        errorContainerClass(){
            return `error-container  ${this.errorMsg!=''?'':'hide'}`
        }
	},
	methods:{		
		closModal () {
            this.$emit('input', false)
        },
        closeError(){
            this.NIKError=false;
            this.PINError=false;
            this.errorMsg=''
        },
        login () {
            var valid = true;
            this.NIKError=false;
            this.PINError=false;
            this.errorMsg='';
            if (this.NIK.match(/[^$,.\d]/) || this.NIK=='' ) {valid=false; this.NIKError=true; this.errorMsg = 'Invalid NIK'; return} else {}
            if (this.PIN.match(/[^$,.\d]/) || this.PIN==''){valid=false; this.PINError=true; this.errorMsg = 'Invalid PIN'; return} else {}

            if(!this.$store.state.loading && valid){
                this.$store.commit('setLoading', true);
                let data = {
                    NIK : this.NIK,
                    password : this.PIN
                }
                this.$store.dispatch('userLogin', {'data' : data})
                .then( (result) =>{                        
                    console.log(result);
                    if(result=='success'){
                        var messege = "Logged in";
                        this.$toasted.show(messege, { 
                            theme: "bubble", 
                            type : 'success',
                            position: "top-right", 
                            duration : 3000
                        });

                        if(this.poModal){
                            this.$store.dispatch('addInvoice');
                        }
                        this.NIK = '';
                        this.password ='';
                        this.closModal();

                    } else{
                        if(result=='Invalid NIK') this.NIKError=true; 
                        if(result=='Invalid PIN') this.PINError=true; 
                        
                        this.errorMsg = result;
                    }
                });
            }
        }
	}
};
</script>

<style lang="scss" scoped>

.login-form {    
    display: block;
    padding: 16px;
    margin-left:20px;
    margin-right:20px;
    clear: both;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
    align-content: flex-start;
    align-self: flex-start;
    flex: 1;
    div{
        margin-bottom: 20px;
    }
}

.icon-close{
    background-color: $solid-danger-50;
    border-radius:50%;
    width: 19px;
    text-align: center;
    margin-right: 10px;
}
</style>