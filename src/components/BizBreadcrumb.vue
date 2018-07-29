<template>
<veui-breadcrumb v-if="visible" :routes="crumbData" @redirect="handleRedirect">
  <span slot-scope="scope"><em>{{ scope.route.text }}</em></span>
  <span slot="separator" slot-scope="scope"> > </span>
</veui-breadcrumb>
</template>

<script>
import { isFunction } from 'lodash'
import { routes } from '@/configs'

export default {
  props: {
    showCrumb: {
      type: Boolean,
      required: false,
      default: true,
    },

    provider: {
      type: Function,
      required: false,
      default() {
        return {}
      },
    },
  },

  computed: {
    crumbData() {
      const { path, name, meta = {} } = this.$route
      const { breadcrumbs = [] } = meta

      let result = breadcrumbs.map(bread => {
        if (isFunction(bread)) {
          return bread(this.provider())
        }

        // 找到 `name` 对应的route信息
        const route = this.getRouteByName(routes, bread.name)
        if (route) {
          return {
            ...this.makeBread(route.path),
            ...bread,
          }
        }

        // 没找到，直接用 `bread` 的数据
        return bread
      })

      // 添加当前页面
      result.push({ text: name, to: path })
      return result
    },

    visible() {
      return this.crumbData.length > 1 && this.showCrumb
    }
  },

  methods: {

    /**
     * 根据 `name` 获取路由数据
     *
     * @param {Array<Object>} routes routes
     * @param {string} name 路由名
     * @return {Object}
     */
    getRouteByName(routes, name) {
      for (let i = 0, len = routes.length; i < len; i++) {
        if (routes[i].name === name) {
          return routes[i]
        }

        if (routes[i].children && routes[i].children.length) {
          return this.getRouteByName(routes[i].children, name)
        }
      }
    },

    /**
     * 生成 `breadcrumb` 数据
     *
     * @param {string} path 路径
     * @return {Object}
     */
    makeBread(path) {
      const match = this.$router.matcher.match
      const route = match(path)

      return route
        ? { text: route.name, to: route.path }
        : null
    },

    handleRedirect(event, router, index) {},
  }
}
</script>

<style lang="less" scoped>
.veui-breadcrumb {
  display: block;
  margin-top: 70px;
  overflow: hidden;
}
</style>
