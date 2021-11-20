<template>
  <div class="search-container">
    <div class="search-input gray">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-search"></use>
      </svg>
      <input type="text" placeholder="请搜索"/>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-clear"></use>
      </svg>
    </div>
    <div class="search-btn-group">
      <span>搜索</span>
      <span>取消</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'input'
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

  .search-input
    position: relative
    display: flex
    align-items: center
    justify-content: center
    padding: 0 6px 0 6px
    border-radius: 18px
    height: 36px
    flex: 1

    &.gray
      background: $color-input-search-bg-gray

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
