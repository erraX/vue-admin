<template>
  <div :class="menuItemCls">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItemCls: [
        'menu-item',
         this.classS,
      ]
    }
  } }
</script>

<style lang="less" scoped>
@import "../styles/variables.less";

.menu-item {
  height: @header-height;
  line-height: @header-height;
  text-align: center;
  transition: .3s all;

  > a,
  > div,
  > span {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  &:hover {
    background-color: biz-blue-dark;
    cursor: pointer;
  }
}

</style>
