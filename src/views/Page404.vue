<template lang="html">
    <div class="page-404">
        404
        <button @click="back">返回</button>
    </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="css">
</style>