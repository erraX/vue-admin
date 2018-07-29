<template>
  <div v-if="visible" class="footer">
    京ICP证030173号 京网文[2017]2863-327号 ©2017 Baidu 使用百度前必读 百度推广服务合同
  </div>
</template>

<script>
import visibilityCompCreator from '@/mixins/visibilityCompCreator'

export default {
  name: 'BizFooter',
  mixins: [ visibilityCompCreator() ],
};
</script>

<style lang="less" scoped>
.footer {
  text-align: center;
  margin-top: 30px;
}
</style>
