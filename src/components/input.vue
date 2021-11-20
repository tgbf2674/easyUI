<template>
  <div class="search-container">
    <div class="search-input gray" :class="{'icon-placeholder-left': isFocus || notEmpty}" >
      <svg class="icon search-icon" aria-hidden="true">
        <use xlink:href="#icon-search"></use>
      </svg>
      <input v-model="val" type="text" placeholder="搜索" @focus="handlerFocus" @blur="handlerBlur"/>
      <svg class="icon reset-icon" aria-hidden="true">
        <use xlink:href="#icon-clear"></use>
      </svg>
    </div>
    <div class="search-btn-group">
      <span class="search-btn primary">搜索</span>
      <span class="search-btn">取消</span>
    </div>
  </div>
</template>

<script>
import {computed, ref} from 'vue'

export default {
  name: 'input',
  setup(){
    let isFocus = ref(false)
    let val = ref('')
    const notEmpty = computed(()=>{
      return val.value !== ''
    })
    const handlerFocus =()=>{
      isFocus.value = true
    }
    const handlerBlur=()=>{
      isFocus.value= false
    }
    return {
      isFocus,handlerFocus,handlerBlur,notEmpty,val
    }
  }
}
</script>

<style lang="sass" scoped>
$color-input-search-bg-gray: #f5f5fa
$color-input-search-bg-light: #ffffff

$color-input-placeholder: #c5ccdb
$color-input: #262d3d
$color-btn-default: #78849e
$color-btn-primary: #4a70ff

.search-container
  display: flex
  align-items: center
  justify-content: center
  overflow: hidden

  .search-btn-group
    line-height: 36px
    .search-btn
      display: inline-flex
      margin-left: 10px
      width: 32px
      font-size: 16px
      line-height: 22px
      font-family: PingFangSC,sans-serif
      color: $color-btn-default
    .primary
      color: $color-btn-primary

  .search-input
    position: relative
    display: flex
    align-items: center
    justify-content: center
    padding: 0 6px 0 6px
    border-radius: 18px
    height: 36px
    flex: 1
    &.icon-placeholder-left
      .search-icon
        left: 5px !important
      input
        margin-left: 19px !important
        caret-color: $color-btn-primary !important
        &::placeholder
          text-align: left !important
        &::-ms-input-placeholder
          text-align: left !important
        &::-webkit-input-placeholder
          text-align: left !important
    &.gray
      background: $color-input-search-bg-gray
    .search-icon
      position: absolute
      left: calc(50% - 44px)
      width: 16px
      height: 16px
    .reset-icon
      width: 24px
      height: 24px

    input
      margin-left: 4px
      padding: 3px 1px
      width: 100%
      line-height: 16px
      font-size: 16px
      font-family: PingFangSC, sans-serif
      color: $color-input
      background: transparent
      border: 0
      outline: none
      flex: 1

      &::placeholder
        font-size: 16px
        font-family: PingFangSC, sans-serif
        text-align: center
        color: $color-input-placeholder

      &::-ms-input-placeholder
        font-size: 16px
        font-family: PingFangSC, sans-serif
        text-align: center
        color: $color-input-placeholder

      &::-webkit-input-placeholder
        font-size: 16px
        font-family: PingFangSC, sans-serif
        text-align: center
        color: $color-input-placeholder
</style>
