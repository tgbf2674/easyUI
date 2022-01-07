<template>
  <breadcrumb separator=">">
    <breadcrumb-item v-for="(item,index) in nav" :to="{path: item.path}" :key="index">{{item.text}}</breadcrumb-item>
  </breadcrumb>
</template>

<script>
import breadcrumb from './components/breadcrumb/breadcrumb.vue'
import breadcrumbItem from './components/breadcrumb/breadcrumb-item.vue'
import {computed, reactive} from 'vue'
export default {
  components:{
    breadcrumb,breadcrumbItem
  },
  setup(){
    const options = reactive([
      {
        text: 'one',
        path: '/1'
      },
      {
        text: 'two',
        path: '/2'
      },
      {
        text: 'three',
        path: '/3'
      },
      {
        text: 'four',
        path: '/4'
      },
    ])
    const nav = computed(()=>{
      const index = options.findIndex(item=>item.path === location.pathname)
      return options.slice(0,index+1)
    })
    return {
      options,nav
    }
  }
}
</script>

<style lang="scss">

</style>
