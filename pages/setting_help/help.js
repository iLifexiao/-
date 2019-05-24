Page({
  /**
   * 页面的初始数据
   */
  data: {
    helpList: [{
        "question": "1. 怎么使用AES加密？",
        "qIndex": 0,
        "qAnswer": "输入16位密钥和16位密钥偏移即可"
      },
      {
        "question": "2. 编码验证是什么意思？",
        "qIndex": 1,
        "qAnswer": "将明文通过编码规则转换为密文"
      },
      {
        "question": "3. 我的密码安全吗？",
        "qIndex": 2,
        "qAnswer": "数据全部保存在本地，不会上传任何数据，并且程序的代码开源"
      },
      {
        "question": "4. 忘记登录密码怎么办？",
        "qIndex": 3,
        "qAnswer": "登录密码是验证用户身份的唯一标识，不能重置。强烈建议导出帐号信息，可以用来恢复"
      },
      {
        "question": "5. 怎么导入帐号?",
        "qIndex": 4,
        "qAnswer": "在电话簿找到名为（帐号管理）的联系人或者自己保存导出信息的地方，拷贝信息到输入区域，点击导入即可"
      },
      {
        "question": "6. 导出的帐号在哪儿？",
        "qIndex": 5,
        "qAnswer": "导出成功时，会将信息导出的信息复制到剪切版中，你可以将信息复制到备忘录中永久保存，或者根据提示在电话簿找到名为（帐号管理）的联系人，其中备注信息就是导出的密码"
      },
      {
        "question": "7. 导出的帐号怎么是一大串符号？",
        "qIndex": 6,
        "qAnswer": "为了保障数据安全，采用AES加密数据，使得帐号信息不可读。可以通过你设置的AES密钥恢复"
      },
      {
        "question": "8. 默认的密码规则(AES)是多少？",
        "qIndex": 7,
        "qAnswer": "默认 key: 1234123412341234\n默认 iv: 1111111111111111，如果修改了密码规则，强烈建议保存好该信息，因为关系到帐号加密信息"
      },
      {
        "question": "9. 修改密码规则后，无法恢复备份信息？",
        "qIndex": 8,
        "qAnswer": "因为密码规则是用来加密备份信息的，新的密码无法用来恢复之前的备份。强烈建议修改规则后立马重新备份帐号信息"
      },
      {
        "question": "10. 怎么删除帐号？",
        "qIndex": 9,
        "qAnswer": "在帐号列表例长按要删除的帐号，会弹出删除选项，点击即可删除"
      },
      {
        "question": "11. 数据是永久保存的吗？",
        "qIndex": 10,
        "qAnswer": "因为微信会删除长时间不用的小程序的缓存数据，所以强烈建议在每次添加帐号后都完全备份一次，以免造成不必要的损失"
      },
      {
        "question": "12. 如何修改帐号信息？",
        "qIndex": 11,
        "qAnswer": "在帐号分类下点击要修改的帐号，点击[编辑>]按钮，此时帐号处于可以编辑的状态。修改后完成后，点击最下方的更新帐号按钮即可更新完成"
      },
      {
        "question": "13. 如何修改帐号分类？",
        "qIndex": 12,
        "qAnswer": "点击主页的管理按钮(注意只能修改自己新增的分类哦！)，长按需要修改的分类会弹出选项，可以选择编辑或删除，点击编辑后原来的添加按钮会变成更新按钮。修改完成后，后点击更新按钮即可"
      },
      {
        "question": "14. 如何搜索帐号？",
        "qIndex": 13,
        "qAnswer": "主页背景图片上有一个半透明的搜索框，输入帐号的关键信息[名称、帐号、备注等]即可搜索"
      },
      {
        "question": "15. 可以分享帐号吗？",
        "qIndex": 14,
        "qAnswer": "到你要分享的帐号的里，点击页面的右上角的三个点，在弹出来的选项中选中转发即可。或者点击帐号卡片右上角的飞机图标"
      },
      {
        "question": "16. 保存帐号、分享的帐号异常?",
        "qIndex": 15,
        "qAnswer": "帐号里面不能包含「-、&、？」这三个特殊符号。因为进行信息解码的时候有用到这些特殊字符，可能会导致解码错误。可包含的特殊字符「!#@$%^_*,.」"
      },
      {
        "question": "17. 可以查看软件的更新记录吗？",
        "qIndex": 16,
        "qAnswer": "查看路径（设置 -> 关于软件 -> 版本记录）"
      },
      {
        "question": "18. 如何复制游戏密码的？",
        "qIndex": 17,
        "qAnswer": "因为游戏可能包含二级密码，所以复制的格式为[密码1/密码2](比如: 123456/abcdef)，即两个密码使用/分割开"
      }
    ]
  },

  answer: function(e) {
    /**
     * 数据集以data-开头，多个单词由连字符-链接，
     * 不能有大写(大写会自动转成小写)如data-element-type，
     * 最终在 event.currentTarget.dataset 中会将连字符转成驼峰elementType
     */
    const qIndex = e.currentTarget.dataset.qIndex
    const qAnswer = this.data.helpList[qIndex].qAnswer
    wx.showModal({
      title: '回答',
      content: qAnswer,
      showCancel: false
    })
  },
})