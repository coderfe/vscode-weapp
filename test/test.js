App({
  onLaunch: function() {
    
  },
  onShow: function() {
    
  },
  onHide: function() {
    
  },
  globalData: globalData
})

Page({
  data: {
    
  },
  onLoad: function(options) {
    //Do some initialize when page load.
    wx.request({
      url: 'url',
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        
      }
    })
  },
  onReady: function() {
    //Do some when page ready.
    
  },
  onShow: function() {
    //Do some when page show.
    
  },
  onHide: function() {
    //Do some when page hide.
    
  },
  onUnload: function() {
    //Do some when page unload.
    
  },
  onPullDownRefresh: function() {
    //Do some when page pull down.
    
  }
})