<template>
    <div class="modal-container modal-confirm overflow-y-auto">
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
                <div class="btn-group">
                    <Button @click.native="sendResult('no')" :type="'white'" :nofocus="true" :size="'fit'" :label="'Cancel'"/>
                    <Button @click.native="sendResult('yes')" :type="'danger'" :nofocus="true" :size="'fit'" :label="'Yes'"/>
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
    },
    computed: {
	},
	methods:{	
        sendResult(decision){
            this.$emit('input', decision)
        }
	}
};
</script>

<style lang="scss" scoped>
.btn-group {        
    margin-left:auto; 
    margin-right:0;
    display: flex;
    padding: 15px;
    max-width: 200px;
    button{
        margin-left: 10px;
    }
}
</style>