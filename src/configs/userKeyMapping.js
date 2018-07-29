export default {
  app: {
    user: {
      name: 'appads_username',
      userid: 'appads_userid',
      authority: 'dev_isBind',
    },
    admin: {
      name: 'appads_adminname',
      userid: 'appads_adminid',
      authority: 'appads_adminauth',
    }
  },
  mu: {
    user: {
      name: 'munion_username',
      userid: 'munion_userid',
      authority: 'munion_userauth',
    },
    admin: {
      name: 'munion_adminname',
      userid: 'munion_adminid',
      authority: 'munion_adminauth',
    }
  },
  mf: {
    user: {
      name: 'madv_username',
      userid: 'madv_userid',
      authority: 'madv_userauthority',
      extFinance: 'madv_extfinance',
      extAccount: 'madv_extaccount'
    },
  },
  _default: {
    name: 'debug',
    userid: '9527',
    authority: '0',
    extFinance: '0',
    extAccount: '0',
  }
}
