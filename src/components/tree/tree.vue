<template>
  <ul class="tree-wrapper">
    <li v-for="(item) in list" :key="item.key">
      <div class="content-wrapper">
          <svg @click="toggleChildren" v-show="item.children" class="icon" aria-hidden="true">
            <use xlink:href="#icon-down"></use>
          </svg>
        <input type="checkbox" :name="item.key" @click="clickBox" :checked="isChecked(item.key)"
               :disabled="item.disabled"/>
        <div class="checkbox-title">{{ item.title }}</div>
      </div>
      <tree v-show="showChildren" :list="item.children"></tree>
    </li>
  </ul>
</template>

<script>
import {getCurrentInstance, ref} from 'vue'

export default {
  name: 'tree',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
  },
  setup(props, context) {
    const showChildren = ref(true)
    const instance = getCurrentInstance()
    const toggleChildren = (e) => {
      showChildren.value = !showChildren.value
    }
    const isChecked = (key) => {
      return instance.appContext.config.globalProperties.$nodes.includes(key)
    }
    const clickBox = (e) => {
      const checked = e.target.checked
      const key = e.target.name
      let nodes = instance.appContext.config.globalProperties.$nodes
      if (checked) {
        if (!nodes.includes(key)) {
          nodes.push(key)
        }
      } else {
        instance.appContext.config.globalProperties.$nodes = nodes.filter((item) => {
          return key !== item
        })
      }
    }
    return {
      showChildren, toggleChildren, isChecked, clickBox
    }
  }
}
</script>

<style lang="scss" scoped>

.tree-wrapper {
  margin: 10px 30px 0;
  .content-wrapper {
    display: flex;
    align-items: center;
    .icon {
      margin-left: -14px;
      height: 14px;
      width: 14px;
    }

    .checkbox-title {
      display: inline-block;
      vertical-align: middle;
      margin-left: 10px;
      text-align: center;
    }
  }
}
</style>
