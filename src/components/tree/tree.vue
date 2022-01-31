<template>
  <div class="tree">
    <tree-item v-for="child in innerOptions" :key="child.key" :item="child" :checkbox="checkbox"></tree-item>
  </div>
</template>

<script>
import {getCurrentInstance, onMounted, ref} from 'vue'
import treeItem from './treeItem.vue'
export default {
  name: 'tree',
  components: {
    treeItem
  },
  props: {
    options: {
      type: Array,
      default: ()=> []
    },
    checkbox: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const innerOptions =ref([])
    const handleOptions =(item, indent = 0) => {
      return {
        ...item,
        indent: indent,
        expand: true,
        checked: false,
        disabled: false,
        children: (item.children || []).map(item => handleOptions(item, indent +1))
      }
    }
    onMounted(()=>{
      innerOptions.value = props.options.map(item => handleOptions(item))
    })
    return {
      innerOptions
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
