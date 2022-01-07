<template>
  <div class="popover-container">
    <transition name="fade-in-linear">
      <div v-show="showPopper" ref="popper" class="popover" :style=" {marginLeft: popMarginLeft + 'px', top: popTop + 'px'} ">
        <slot name="popover"></slot>
      </div>
    </transition>
    <div ref="wrapper">
      <slot name="reference"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popover',
  props: {
    trigger: {
      type: String,
      default: 'click'
    },
    visible: {
      type: Boolean,
      default: false
    },
    modalAppendToBody: {
      type: Boolean,
      default: false
    },
    visibleArrow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      showPopper: false,
      popMarginLeft: 0,
      popTop: 0
    }
  },
  watch: {
    showPopper(val) {
      if(val) {
        this.update()
      }
      val ? this.updatePopper() : this.destroyPopper()
    }
  },
  mounted() {

  },
  methods: {
    doToggle(){
      this.showPopper = !this.showPopper
    },
    update(){
      const temp = this.popper.style.display

    }
  }
}
</script>

<style scoped>

</style>
