<template>
  <div v-loading="visible"></div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },

  methods: {
    show() {
      this.visible = true
    },

    hide() {
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
.loading {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 9998;
}

.content {
  position: absolute;
  top: 20%;
  left: 50%;
}
</style>
