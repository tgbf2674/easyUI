<template>
  <div @click="handleClick" class="switch">
    {{ curChecked  }}
    <input type="checkbox" ref="check" class="switch-input" v-model="curChecked">
    <span :class="['core', curChecked? 'on' : 'off']"></span>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'switch',
  setup(){
    const curChecked = ref(false)
    const check = ref()
    const handleClick = () =>{
      curChecked.value = !curChecked.value
      console.log(check.value)
    }
    return {
      curChecked, check, handleClick
    }
  }
}
</script>

<style lang="scss" scoped>
.switch {
  display: inline-flex;
  .switch-input{
    position: absolute;
    width: 0;
    height: 0;
  }
  .core{
    cursor: pointer;
    width: 90px;
    height: 36px;
    border: 1px solid #999;
    border-radius: 18px;
    position: relative;
    transition: border-color .3s, background-color .3s;
    &.off{
      background-color: indianred;
      &:after{
        top: 2px;
        left: 2px;
      }
    }
    &.on{
      background-color: lightgreen;
      &:after{
        top: 2px;
        left: 100%;
        margin-left: -34px;
      }
    }
    &:after{
      content: '';
      position: absolute;
      border-radius: 100%;
      transition: all .3s;
      width: 32px;
      height: 32px;
      background-color: #fff;
    }
  }
}
</style>
