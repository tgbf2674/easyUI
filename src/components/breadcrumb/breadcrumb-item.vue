<template>
  <span class="breadcrumb-item">
    <span :class="['breadcrumb-text',{'is-link':to.path}]"
          @click="handleItem"
    >
      <slot></slot>
    </span>
    <span class="breadcrumb-separator">{{ separator }}</span>
  </span>
</template>

<script>
import {inject, onMounted, ref} from 'vue'

export default {
  name: 'breadcrumb-item',
  inject: ['breadcrumbVM'],
  props: {
    to:{
     type: Object,
     default: ()=>({})
    }
  },
  setup(props,context){
    const breadcrumb = inject('breadcrumbVM')
    const handleItem = ()=>{
      const {$router,to} = context
      if(!props.to.path)return
      if($router)$router.push(to)
      console.log(props.to)
      location.pathname = props.to.path
    }
    const separator = ref('')
    onMounted(()=>{
      separator.value = breadcrumb
    })
    return {
      separator,handleItem
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb-item{
  .breadcrumb-text{
    color: #333333;
    &.is-link{
      color: cornflowerblue;
      text-decoration: underline;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .breadcrumb-separator{
    margin: 0 8px;
  }
}
</style>
