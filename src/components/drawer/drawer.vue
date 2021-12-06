<template>
  <div @click="closeMaskHandle" ref="mask" :class="calcClass">
    <div class="drawer-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {computed, ref, watch} from 'vue'

export default {
  name: 'drawer',
  props: {
    open: {
      type: Boolean,
      default: false
    },
    palace:{
      type: String,
      default: 'bottom' // 'left','top','bottom','right'
    }
  },
  emits: ['update:open'],
  setup(props,context){
    const mask = ref(null)
    const curOpen = ref(props.open)
    watch(()=>props.open,(val)=>{
      curOpen.value = val
    })
    watch(()=>curOpen.value,(val)=>{
      context.emit('update:open',val)
    })
    const calcClass = computed(()=>{
      return [
        'drawer-mask',{'is-open': curOpen.value,'is-close': !curOpen.value},props.palace
      ]
    })
    const closeMaskHandle = (e)=>{
      if(mask.value !==e.target)return

      curOpen.value = false
    }
    return {
      calcClass,closeMaskHandle,mask
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer-mask {
  overflow: hidden;
  z-index: 2000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  transition: opacity 200ms, height 1ms;
  .drawer-content {
    padding: 50px;
    background-color: red;
    position: absolute;
    transition: transform 300ms;
  }
  &.is-open {
    opacity: 1;
    height: 100%;
  }
  &.is-close {
    opacity: 0;
    height: 0;
    transition-delay: 300ms;
  }
  &.bottom {
    .drawer-content {
      border-radius: 12px 12px 0 0;
      bottom: 0;
      left: 0;
      right: 0;
      top: auto;
    }
    &.is-open {
      .drawer-content {
        transform: translateY(0);
      }
    }
    &.is-close {
      .drawer-content {
        transform: translateY(100%);
      }
    }
  }
  &.right {
    .drawer-content {
      border-radius: 12px 0 0 12px;
      bottom: 0;
      left: auto;
      right: 0;
      top: 0;
    }
    &.is-open {
      .drawer-content {
        transform: translateX(0);
      }
    }
    &.is-close {
      .drawer-content {
        transform: translateX(100%);
      }
    }
  }
  &.top {
    .drawer-content {
      border-radius: 0 0 12px 12px;
      bottom: auto;
      left: 0;
      right: 0;
      top: 0;
    }
    &.is-open {
      .drawer-content {
        transform: translateY(0);
      }
    }
    &.is-close {
      .drawer-content {
        transform: translateY(-100%);
      }
    }
  }
  &.left{
    .drawer-content {
      border-radius: 0 12px 12px 0;
      bottom: 0;
      left: 0;
      right: auto;
      top: 0;
    }
    &.is-open {
      .drawer-content {
        transform: translateX(0);
      }
    }
    &.is-close {
      .drawer-content {
        transform: translateX(-100%);
      }
    }
  }
}
</style>
