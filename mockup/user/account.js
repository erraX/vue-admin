exports.response = function () {
  return {
    "success": true,
    "model": {
      // 通知类型
      // -1 不指定通知类型，默认请使用-1
      // 0  点击充值
      // .. 待扩展
      "noticeType": -1,
      "notice": "", //当前账户余额为0元，请尽快续费。
      "baiduBalance": "1123231.00", // 推广资金池余额
      "mobadsBalance": "0.01", // 移动DSP专属资金池余额
      "tradeDealBalance": "0.01", // 合约交易资金池余额
      "dspBalance": "0.00", // DSP资金池余额
      "balancePoolList": ["AD", "UNION", "DEAL"], //AD是移动dsp，DSP是dsp，UNION是推广余额, DEAL合约交易资金池
      // "mobadsInvest": "0.01",
      // v2.0 2012.12.19 重命名：uncheckPlanCount -> uncheckUnitCount
      // v2.0 2013.01.04 新增"真实性验证", 本版本暂时不实现
      //"validStatus": "(未验证)",
      // v2.0 2013.01.04 新增"关联", 本版本暂时不实现
      //"bindStatus": "暂无消息",
      // 有效推广计划数
      "effectivePlanCount": 12345210,
      // 待审核推广创意数
      "uncheckUnitCount": 12345612,
      /**
       * 是否提示升级信息流
       */
      "needRemind": false,
      "user": {
        /**
         * 用户角色
         * MADV 1
         * isHao123 4
         */
        "userSource": 1,
        /**
         * KA用户则需要首页引导
         */
        "isKA": true,
        /**
         * 用户开启屏蔽APP功能
         */
        "isOpenAppBlock": true,
        /**
         * 用户开启拓展人群功能
         */
        "isOpenExpandCrowd": true,
        /**
         * 用户账户是否欠费
         */
        "balanceStatRemind": true,
        /**
         * 是否品牌人群显示
         */
        "isOpenBrand": true,
        /**
         * 是否开启tcpl
         */
        "isOpenTcpl": true,
        /**
         * 是否开启糯米权限
         */
        "isOpenNuomi": true,
        /**
         * 是否可以看到百意界面
         */
        "canViewPc": true,
        /**
         * 是否可以看到升级
         */
        "hasConfirmUpgrade": false,
        "isClueWhiteUser": 1,
        /**
         * 是否可以看到好文案工具
         */
        "isGoodTitleWhiteUser": 0

      },
      "list": {
        "totalSize": 111,
        "data": [{
            "date": "2012-11-12",
            "showNum": 123456789,
            "clickNum": 2234567,
            "totalCost": 12345678.123,
            "clickRate": 0.234,
            "avgClickCost": 123.456
          },
          {
            "date": "2012-11-13",
            "showNum": 2234563389,
            "clickNum": 1234567,
            "totalCost": 12345678.123,
            "clickRate": 0.234,
            "avgClickCost": 123.456
          },
          {
            "date": "2012-11-14",
            "showNum": 323456789,
            "clickNum": 3234567,
            "totalCost": 12345678.123,
            "clickRate": 0.234,
            "avgClickCost": 123.456
          },
          {
            "date": "2012-11-15",
            "showNum": 0,
            "clickNum": 0,
            "totalCost": 12345678.123,
            "clickRate": 0,
            "avgClickCost": 0
          },
          {
            "date": "2012-11-16",
            "showNum": 123456789,
            "clickNum": 0,
            "totalCost": 12345678.123,
            "clickRate": 0,
            "avgClickCost": 0
          },
          {
            "date": "2012-11-17",
            "showNum": 123456789,
            "clickNum": 2234567,
            "totalCost": 12345678.123,
            "clickRate": 0.234,
            "avgClickCost": 123.456
          },
          {
            "date": "2012-11-18",
            "showNum": 223456789,
            "clickNum": 1234567,
            "totalCost": 12345678.123,
            "clickRate": 0.234,
            "avgClickCost": 123.456
          }
        ]
      },
      "flashList": { //请忽略分页，返回所有数据
        //虽然不分页，保持list数据结构一致性
        "totalSize": 111,
        "data": [{
            "date": "2012-11-12",
            "showNum": 923456789,
            "clickNum": 2234567,
            "totalCost": 12345678.123,
            "clickRate": 0.123,
            "avgClickCost": 123.456
          },
          {
            "date": "2012-11-13",
            "showNum": 223456789,
            "clickNum": 1234567,
            "totalCost": 12345678.123,
            "clickRate": 0.234,
            "avgClickCost": 123.456
          },
          {
            "date": "2012-11-14",
            "showNum": 323456789,
            "clickNum": 3234567,
            "totalCost": 12345678.123,
            "clickRate": 0.234,
            "avgClickCost": 123.456
          },
          {
            "date": "2012-11-15",
            "showNum": 223456789,
            "clickNum": 4234567,
            "totalCost": 12345678.123,
            "clickRate": 0.234,
            "avgClickCost": 123.456
          },
          {
            "date": "2012-11-16",
            "showNum": 123456789,
            "clickNum": 2234567,
            "totalCost": 12345678.123,
            "clickRate": 0.234,
            "avgClickCost": 123.456
          },
          {
            "date": "2012-11-17",
            "showNum": 123456789,
            "clickNum": 2234567,
            "totalCost": 12345678.123,
            "clickRate": 0.234,
            "avgClickCost": 123.456
          },
          {
            "date": "2012-11-18",
            "showNum": 223456789,
            "clickNum": 1234567,
            "totalCost": 12345678.123,
            "clickRate": 0.234,
            "avgClickCost": 123.456
          }
        ]
      }
    }
  }
}
