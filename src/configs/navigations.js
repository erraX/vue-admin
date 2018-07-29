/**
 * @file navigations
 * @author niminjie
 */

export default [
    {
        key: "home",
        label: "首页",
        link: "/",
        childLinks: []
    },
    {
        key: "promotion",
        label: "推广管理",
        link: "/plan/list",
        childLinks: [
            {
                key: "plan-list-view",
                label: "列表页",
                link: "/plan/list"
            }
        ]
    },
    {
        key: "report",
        label: "统计报告",
        link: "/report/basic",
        childLinks: [
            {
                key: "base-report",
                label: "基础报告",
                link: "/report/basic"
            },
            {
                key: "audiences-report",
                label: "受众报告",
                link: "/report/audiences"
            }
        ]
    }
];
