<template>
<div :class="menuCls">
  <div class="trigger">
    <slot name="title" class="title"></slot>
    <div class="dropdown">
      <slot></slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      menuCls: [
          'menu',
          this.class,
      ],
    }
  },
}
</script>

<style lang="less" scoped>
@import "../styles/variables.less";

.menu {
  display: inline-block;
  color: #000;
}

.trigger {
  display: inline-block;
  position: relative;
  height: @header-height;
  line-height: @header-height;
  text-align: center;
  transition: .3s all;

  &:hover {
    cursor: pointer;

    .dropdown {
      display: block;
    }
  }

  .title {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
}

.dropdown {
  display: none;
  position: absolute;
  top: @header-height;
  background-color: @biz-blue-normal;
  left: 0;
}
</style>
