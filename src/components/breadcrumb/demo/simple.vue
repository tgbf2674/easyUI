<template>
  <drawer palace="left" v-model:open="open">
    <h1>123</h1>
  </drawer>
  <button @click="openDrawer">open drawer</button>
</template>

<script>
import drawer from './components/drawer/drawer.vue'
import {ref} from 'vue'
export default {
  components:{
    drawer
  },
  setup(){
    const open = ref(false)
    const openDrawer = ()=>{
      open.value = true
    }
    return {
      openDrawer,open
    }
  }
}
</script>

<style lang="scss">

</style>
