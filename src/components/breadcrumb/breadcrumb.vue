<template>
  <div class="breadcrumb">
    <slot></slot>
  </div>
</template>

<script>
import {provide} from 'vue'

export default {
  name: 'breadcrumb',
  props:{
    separator: {
      type: String,
      default: '/'
    }
  },
  setup(props,context){
    provide('breadcrumbVM',props.separator)
  }
}
</script>

<style lang="scss">
.breadcrumb{
  .breadcrumb-item:last-child {
    .breadcrumb-separator{
      display: none;
    }
  }
}
</style>
