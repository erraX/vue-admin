<template> <div class="side-bar">
    <h1 class="title">ADMIN</h1>
    <el-menu
        :router="true"
        :default-active="currentRoute"
        class="navi-menu"
    >
        <template v-for="route in routes" v-if="shouldShow(route)">
            <el-menu-item
                v-if="!route.children || !route.children.length"
                :index="route.path"
                :key="route.name"
            >
                <span slot="title">{{route.name}}</span>
            </el-menu-item>
            <el-submenu
                v-else
                :index="route.path"
                :key="route.name"
            >
                <span slot="title">{{route.name}}</span>
                <el-menu-item
                    v-for="subRoute in route.children"
                    v-if="shouldShow(subRoute)"
                    :key="subRoute.name"
                    :index="joinUrl(route.path, subRoute.path)"
                >
                    {{subRoute.name}}
                </el-menu-item>
            </el-submenu>
        </template>
    </el-menu>
</div>
</template>

<script>
import {mapState} from 'vuex';
import {joinUrl} from '@/utils/tools';

export default {
    props: {
        routes: {
            type: Array,
            required: true
        }
    },

    data() {
        return {
            date: '20170912120203'
        };
    },

    computed: {
        ...mapState({
            user: state => state.user
        }),

        currentRoute() {
            return this.$route.path;
        }
    },

    methods: {
        joinUrl,

        shouldShow(route) {
            if (route.meta && route.meta.hasPermission) {
                return route.meta.hasPermission(this.user, null);
            }

            return true;
        }
    }
};
</script>

<style lang="less" scoped>
.side-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 260px;
    height: 100%;

    .title {
        margin: 0;
        padding: 0;
        text-align: center;
    }

    .navi-menu {
        height: 100%;
    }
}
</style>
