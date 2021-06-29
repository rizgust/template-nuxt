/** GLOVORY DESIGN STANDARD
    CREATED   : 2020.12.04 BY RIZGUST
    FUNCTION  : PURPOSE ALERT DESIGN STANDARD
    UPDATED   : -
*/
<template>
  <div class="input-normal">
    <p class="label">{{ label }}</p>
      <div class="input-container">
        <img :src="icon" alt="" class="input-icon" />   
        <input :class="classes" :placeholder="placeholder" :type="currentType"  :style="customStyle" v-model="value" :id="id" :name="name"
          v-on:click="focusHandler(true)" v-on:blur="focusHandler(false)" v-on:keydown.enter="enterHandler"/>
        <img :src="iconEye" alt="" class="input-icon-right actions" @click="toggleEye" />   
      </div>
  </div>
</template>

<script>
export default {
  name: "InputNormal",
  data(){
    return{
      data:'',
      showPassword:false,
      initialStype : this.customStyle,
      initialType : this.type=='password-number'?'number':this.type,
      currentType : this.type=='password-number'?'number':this.type,
    }
  },
  props: {
    value: { type: String, default: "" },
    onFocus: {type: Boolean, default: false,},
    label: { type: String, default: "" },
    placeholder: { type: String, default: "Enter Email" },
    type: {
      type: String,
      default: "text",
      validator: function (value) {
        return ["email", "password", "number", "text", "password-number"].indexOf(value) !== -1;
      },
    },
    error: {
      type: Boolean,
      default: false,
    },
    fullShade: {
      type: Boolean,
      default: false,
    },
    id: { type: String, default: '' },
    name: { type: String, default: '' },
    icon: { type: String, default: '' },
    customClass: { type: String, default:'' },
    customStyle: { type: String, default:'' },
  },
  mounted(){
    this.customStyle=this.type=='password-number'?this.initialStype+'-webkit-text-security: disc;':this.initialStype
  },
  watch:{
    value(){
      this.$emit('input', this.value)
    },
  },
  computed: {
    classes() {
      return `input ${this.error ? "error" : ""} ${this.fullShade ? "full-shade" : ""} ${this.icon != '' ? "with-icon" : ""} ${this.customClass}`;
    },
    iconEye(){
      return (this.initialType=='password' || this.type=='password-number') && (this.value!='' && this.value!=null)?(this.showPassword&&(this.currentType!='password' && this.currentType!='password-number')?'/icons/eye-slash.svg':'/icons/eye.svg'):''
    }
  },
  methods:{
    focusHandler(status){
      this.$emit(status?'onFocus':'onBlur', status)
    },
    enterHandler(event){
      event.target.blur()
      this.$emit('onEnter',this.value)
    },
    toggleEye(){
      this.showPassword = !this.showPassword;
      if( this.type == 'password-number') this.customStyle = this.showPassword?this.initialStype:this.initialStype+'-webkit-text-security: disc;'
      else this.currentType = this.showPassword?'text':'password'
    }
  }
};
</script>

<style lang="scss" scoped>
.input-normal {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.input-container {
	display: flex;
	align-items: flex-start;
  position: relative;
  width: 100%;
}
.input-icon {
	position: absolute;
	left: 20px;
	top: 8px;
}
.input-icon-right{
  width: 15px;
	position: absolute;
	right: 20px;
	top: 13px;
}
.input.full-shade {
  background-color: $solid-black-10;
  border: 1px solid  $solid-black-10;
}
.input.error {
  border: 1px solid $solid-danger-50;
}
.input.with-icon {
  padding: 8px 8px 8px 60px;
}
.label {
  @include roboto-16-semibold;
  color: $text-solid-black-80;
  margin-bottom: 4px;
}
.input {
  width: 100%;
  background-color: $transparent;
  border-radius: 6px;
  padding: 6px 10px;
  border: 1px solid $solid-black-40;
  @include roboto-16-normal;
  color: $text-solid-black-80;
  outline: none;
  transition: 0.2s;
  &::placeholder {
    width: 256px;
    @include roboto-16-normal;
    color: $text-solid-black-60;
  }
}
input::-ms-reveal,
input::-ms-clear {
  display: none;
}
.input:focus {
  border: 1px solid $solid-primary-50;
	min-width: 160px;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
// input[type="number"] {
//   -moz-appearance: textfield;
// }
</style>