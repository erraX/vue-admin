<template>
<base-view>
  <div class="home-page">{{ msg }}</div>
</base-view>
</template>

<script>
import BaseView from './BaseView'

export default {
  name: 'home',

  components: {
    BaseView,
  },

  data() {
    return {
      msg: 'Welcome',
    };
  },
};
</script>

<style lang="less" scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #fff;
}
</style>
