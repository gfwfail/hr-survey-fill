<template>
  <div class="modal-mask" v-show="show" transition="modal">
     <div class="modal-wrapper">
       <div class="modal-container" v-bind:style="{ width: width }">


         <div class="modal-body">
           <slot name="body">
           </slot>
         </div>

       </div>
     </div>
   </div>
</template>

<style>
/*

form elements

*/

.help-block {
    display: block;
     margin: 0px;
}

.form-group {
    margin-bottom: 5px;
}

/*

modal

*/
.modal-mask {
  position: absolute;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;

}

.modal-container {
  margin: 0px auto;
  border-top:solid 10px #18BC9C;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-body {
  margin: 0px 0;
}



/*
 * the following styles are auto-applied to elements with
 * v-transition="modal" when their visiblity is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter, .modal-leave {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>

<script>
export default {
  name:'Modal',
  data: ()=>{
    return {showModal: false}
  },
  props: {
   width: {
    type : String,
    default: '300px'
  },
   show: {
     type: Boolean,
     required: true
   }
 }

}
</script>
