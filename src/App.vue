<script>
  import SearchInput from './components/input.vue'
  import {ref} from 'vue'
  export default {
    components:{
      SearchInput
    },
    setup(){
      const newVal = ref('')
      const oldVal = ref('')
      const searchVal = ref('')
      const enterVal = ref('')
      const handlerSearch = (val)=>{
        searchVal.value = val
      }
      const handlerEnter = (val)=>{
        enterVal.value = val
      }
      const handlerChange = (newV,oldV)=>{
        newVal.value = newV
        oldVal.value = oldV
      }
      return {
        handlerSearch,handlerEnter,handlerChange,newVal,oldVal,searchVal,enterVal
      }
    }
  }
</script>

<template>
  <SearchInput @on-change="handlerChange" @on-press-enter="handlerEnter" @on-search="handlerSearch"/>
  <div>
    <div>
      <h3>onSearch</h3>
      <span>{{searchVal}}</span>
    </div>
    <div>
      <h3>onchange</h3>
      <span>改变前的值：{{ oldVal }}</span>
      <span>改变后的值：{{newVal}}</span>
    </div>
    <div>
      <h3>on-pressEnter</h3>
      <span>{{enterVal}}</span>
    </div>
  </div>
</template>

<style>
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
