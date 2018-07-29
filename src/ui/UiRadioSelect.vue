<template>
<div class="veui-radio-group">
    <veui-radio-group :items="lists" v-model="selectItem" :disabled="disabled">
        <template slot-scope="props">{{ props.label }}</template>
    </veui-radio-group>
    <div v-show='showPanel' class="panel">
       <slot name="others"></slot>
    </div>
</div>

</template>

<script type="text/javascript">
    import {RadioGroup} from 'veui';
    export default {
        name: 'ui-radio-select',
        data() {
            return {
                selectItem: this.value,
                showPanelValue:'',
            }
        },
        computed: {
            lists() {
                let that = this;
                this.items.forEach(function (item, index){
                    if (item.panelShow) {
                        that.showPanelValue = item.value;
                    }
                })
                return this.items
            },
            showPanel() {
                return this.showPanelValue === this.selectItem?true:false
            }
        },
        props: {
            disabled: Boolean,
            items: Array,
            value:String,
        },
        watch: {
            selectItem(val) {
               // this.showPanel = (val == this.showPanelValue)?true:false;
                this.$emit('input', val)
            }
        },
        created() {
        },
        mounted() {
        },
        components: {
            'veui-radio-group': RadioGroup,
        },
    }
</script>

<style scoped lang="less">
@import '../styles/variables.less';
    .panel {
        position: relative;
        width: 420px;
        border-top: 3px solid @biz-blue-line;
        padding: 15px;
        margin-top: 10px;
        &:before{
            content: '';
            border-style: solid;
            position: absolute;
            border-color: transparent transparent #2D5DC3 transparent;
            border-width: 0 8px 8px 8px;
            top: -8px;
            left: 30px;
        }
    }
</style>
