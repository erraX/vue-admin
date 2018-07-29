<template>
    <div class="layout">
        <biz-breadcrumb :provider="crumbProvider"></biz-breadcrumb>
        <slot></slot>
    </div>
</template>

<script>
import BizBreadcrumb from "@/components/BizBreadcrumb";
export default {
    props: {
        crumbProvider: {
            type: Function,
            required: false,
            default() {
                return {};
            }
        }
    },

    components: {
        BizBreadcrumb
    }
};
</script>

<style lang="less" scoped>
</style>
