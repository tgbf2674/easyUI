<template>
  <popover>
    <div slot="popover">
      <p>i am popover title</p>
    </div>
    <div slot="reference">
      <button>popover btn</button>
    </div>
  </popover>
</template>

<script>
import popover from '../popover.vue'
export default {
  name: 'simple',
  components: {
    popover
  }
}
</script>

<style scoped>

</style>
