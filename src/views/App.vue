<template>
<div id="app">
    <the-side-bar :routes="routes"></the-side-bar>
    <div class="main">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
import { routes } from "@/configs";
import TheSideBar from '@/components/TheSideBar';

export default {
    name: "app",

    components: {
        TheSideBar
    },

    data() {
        return {
            routes
        };
    }
};
</script>

<style lang="less">
@import "../styles/normalize.less";
@import "../styles/variables.less";

.main {
    margin-top: 50px;
    margin-left: 280px;
    min-height: 600px;
}
</style>
