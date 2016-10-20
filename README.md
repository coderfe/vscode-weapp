# 微信小程序 API 代码片段

为 VSCode 提供微信小程序 API 提示及代码片段

[![version](http://vsmarketplacebadge.apphb.com/version/coderfee.vscode-wxml.svg)](http://vsmarketplacebadge.apphb.com/version/coderfee.vscode-weapp-api.svg)
[![installs](http://vsmarketplacebadge.apphb.com/installs/coderfee.vscode-wxml.svg)](http://vsmarketplacebadge.apphb.com/installs/coderfee.vscode-weapp-api.svg)

## 安装

1. 打开编辑器，`Ctrl + Shift + X`，搜索 **weapp-api**
2. 点击 `install`

## 使用

**键入关键词，然后回车，关键词不在意不大小写**

| 关键词                 | 代码片段                     | 备注                |
| ------------------- | ------------------------ | ----------------- |
| wxApp               | App({})                  | 注册小程序             |
| wxPage              | Page({})                 | 注册页面              |
| wxRequest           | wx.chooseImage({})       | 选择图片              |
| wxGetLocation       | wx.getLocation({})       | 获取位置              |
| wxOpenLocation      | wx.openLocation({})      | 打开位置              |
| wxLogin             | wx.login({})             | 登录                |
| wxGetUserInfo       | wx.getUserInfo({})       | 获取用户信息            |
| wxUploadFile        | wx.uploadFile({})        | 上传文件              |
| wxDownloadFile      | wx.downloadFile({})      | 下载文件              |
| wxChooseImage       | wx.chooseImage({})       | 选择图片              |
| wxPreviewImage      | wx.previewImage({})      | 预览图片              |
| wxNavigateTo        | wx.navigateTo({})        | 保留当前页面并跳转         |
| wxRedirectTo        | wx.redirectTo({})        | 关闭当前页面并跳转         |
| wxConnectSocket     | wx.connectSocket({})     | 创建 Websocket 连接   |
| wxOnSocketOpen      | wx.onSocketOpen({})      | 监听 Websocket 连接   |
| wxOnSocketError     | wx.onSocketError({})     | 监听 Websocket 错误   |
| wxSendSocketMessage | wx.sendSocketMessage({}) | 发送 Websocket 消息   |
| wxOnSocketMessage   | wx.onSocketMessage({})   | 监听 Websocket 消息事件 |
| wxCloseSocket       | wx.closeSocket()         | 关闭 Websocket 连接   |
| wxOnSocketClose     | wx.onSocketClose         | 关闭 Websocket 监听   |

#### Js API 提示

![vscode-weapp-api-snippets](http://oaz5uxplb.bkt.clouddn.com/vscode-js.gif)

### app.json 配置提示

**`app.json` 中请注意添加逗号。**

![vscode-weapp-json-snippets](http://oaz5uxplb.bkt.clouddn.com/vscode-json.gif)