Page({
  data: {
    imgUrls: [
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000
  },
  toDetail:function(e){
    console.log(e.target.id);
    wx.navigateTo({
      url: 'detail/detail?id=' + e.target.id
    })
  }
})