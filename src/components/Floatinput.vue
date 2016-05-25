<template>
  <div class="form-group has-feedback" :class="{'has-error':error}" v-el:form-group>
      <label class="control-label" for="inputNormal">{{name}}</label>
      <input :type="type" class="form-control input-lg" id="inputNormal" :placeholder="placeholder" v-model="value" @focus="toggle" @blur="toggle"/>
      <span :class="icon" class="glyphicon form-control-feedback"></span>
  </div>
</template>

<style lang="scss" scoped>


/* --- material floating label --- */

.form-group {
    display: flex;
    height: 55px;
    margin: 0 0 10px 0;
}

.form-control:focus {
    box-shadow: 0px 0px 2px #fff;
    border-color: #fff;
}

.form-control-feedback {
  top:10px !important;
}

.control-label {
    font-size: 14px;
    padding:2px;
    opacity: 0.4;
    pointer-events: none;
    position: absolute;
    top:5px;
    left:5px;
    transform: translate3d(0, 15px, 0) scale(1);
    transform-origin: left top;
    transition: 240ms;
}

.form-group.focused .control-label {
    opacity: 1;
    transform: scale(0.9);
    top:5px;
    & .has-error {
      color:red;
    }
}

.form-control {
  border:0 !important;
  height:50px;
  padding-top:20px;
  border-bottom: solid 2px #eee !important;

}

.form-control {
    align-self: flex-end;
}

.form-control::-webkit-input-placeholder {
    color: transparent;
    transition: 240ms;
}

.form-control:focus::-webkit-input-placeholder {
    transition: none;
}

.form-group.focused .form-control::-webkit-input-placeholder {
    color: #bbb;
}
</style>

<script>

  export default {
    props: {
      value: {
        twoWay: true
      },
      name:{
        type:String
      },
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
        default: 'text'
      },
      error:{
        type:Array
      },
      default:{
        type: String,
        required:false
      },
      icon: {
        type: String,
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data:()=>{
      return {
        editing:false
      }
    },
    ready() {

    },
    components:{

    },
    methods: {
      toggle(e){
      //  console.log(this.$els.formGroup)
        this.$els.formGroup.classList.toggle('focused', (e.type === 'focus' || this.value.length > 0))
      }
    }
  }
</script>
