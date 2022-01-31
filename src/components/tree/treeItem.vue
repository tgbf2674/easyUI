<template>
  <div class="item">
    <div @click.stop="handleClick" :class="['item-content', {checked: item.checked}]" :style="{paddingLeft: indentLeft + 'px'}">
      <span v-if="item.expand">→</span>
      <span v-else>👇</span>
      <span>{{ item.title }}</span>
    </div>
    <div v-if="item.expand && item.children.length" class="item-children">
      <tree-item v-for="child in item.children" :key="child.key" :item="child" :checkbox="checkbox"></tree-item>
    </div>
  </div>
</template>

<script>
import {computed} from 'vue'

export default {
  name: 'treeItem',
  props: {
    item: {
      type: Object,
      default: ()=> ({
        key: '',
        title: '',
        indent: 0,
        expand: false,
        check: false,
        disabled: false,
        children: []
      })
    },
    checkbox: {
      type: Boolean,
      default: false
    }
  },
  setup(props,context) {
    const handleClick = ()=> {
      if(props.item.disabled)return
      if(!props.item.children.length && props.checkbox){
        props.item.checkbox = !props.item.checkbox
      }
      props.item.expand = !props.item.expand
    }
    const indentLeft = computed(()=>{
      return props.item.indent*30
    })
    return {
      handleClick, indentLeft
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  .item-content{
    &:hover{
      cursor: pointer;
      background-color: #efefef;
    }
    &.checked {
      background-color: #3d85c6;
    }
  }
}
</style>
