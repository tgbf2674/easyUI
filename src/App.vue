<script>
  import SearchInput from './components/input.vue'
  export default {
    components:{
      SearchInput
    },
    setup(){
      const handlerSearch = (val)=>{
        alert(val)
      }
      const handlerEnter = (val)=>{
        alert(`on-press-enter${val}`)
      }
      return {
        handlerSearch
      }
    }
  }
</script>

<template>
  <SearchInput @on-press-enter="handlerEnter" @on-search="handlerSearch"/>
</template>

<style>
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
