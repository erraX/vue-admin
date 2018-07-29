<template>
<div class="simple-list">
</div>
</template>

<script>
import {api} from '@/configs';

export default {
    data() {
        return {
            query: {},
            list: [],
            pagination: {
                pageNo: 1,
                pageSize: 20,
                total: 0
            }
        };
    },

    created() {
        api()
    }
}
</script>

<style lang="less" scoped>
.simple-list {

}
</style>
