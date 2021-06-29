<template>
    <div :class="containerClass">
        <div class="modal-header">
            <div class="modal-title">
                <label>{{title}}</label>
            </div>
        </div>
        <div class="modal-body">      
            <div class="no-content">
                <div :class="'msg-container'">
                    <p class="no-content empty-messege"> {{messege}}</p>
                </div>
                <div class="btn-group-confirm">
                    <Button @click.native="sendResult('yes')" :type="'danger'" :nofocus="true" :size="'fit'" :label="'OK'"/>
                </div>
            </div> 
        </div>
    </div>    
</template>

<script>

export default {  
    props:{
        result: { type: String, default: '' },
        title: { type: String, default: '' },
        messege: { type: String, default: '' },
        notifMode: { type: String, default: '' },
        redirect: { type: String, default: ''}
    },
    computed: {
		containerClass(){
			return `modal-container modal-notif overflow-y-auto`
		},
	},
	methods:{	
        sendResult(decision){
            this.$emit('input', decision)
            if(decision=='yes' && this.redirect!='' & this.redirect != null) window.open(this.redirect, '_blank');
        }
	}
};
</script>

<style lang="scss" scoped>
.btn-group-confirm {        
    margin-left:auto; 
    margin-right:0;
    display: flex;
    padding: 15px;
    max-width: 100px;
    button{
        margin-left: 10px;
    }
}
</style>