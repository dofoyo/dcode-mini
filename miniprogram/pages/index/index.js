//index.js
const app = getApp()

Page({
  data: {
    thecode: '',
    thename: '',
    theimageurl: '',
    isShowName: false,
    isOrder: true,
    startTime: null,
    endTime: null,
    times: null,
    index: 0,
    left: '<',
    right: '>',
    list: [{
        "code": "",
        "name": ""
      },
      {
        "code": "0",
        "name": "呼啦圈"
      },
      {
        "code": "1",
        "name": "蜡烛"
      },
      {
        "code": "2",
        "name": "鹅"
      },
      {
        "code": "3",
        "name": "耳朵"
      },
      {
        "code": "4",
        "name": "帆船"
      },
      {
        "code": "5",
        "name": "挂钩"
      },
      {
        "code": "6",
        "name": "勺子"
      },
      {
        "code": "7",
        "name": "手杖"
      },
      {
        "code": "8",
        "name": "葫芦"
      },
      {
        "code": "9",
        "name": "口哨"
      },
      { "code": "00", "name": "望远镜" },
      { "code": "01", "name": "小树" },
      { "code": "02", "name": "玲儿" },
      { "code": "03", "name": "凳子" },
      { "code": "04", "name": "小汽车" },
      { "code": "05", "name": "手套" },
      { "code": "06", "name": "手枪" },
      { "code": "07", "name": "锄头" },
      { "code": "08", "name": "溜冰鞋" },
      { "code": "09", "name": "猫" },
      { "code": "10", "name": "棒球" },
      { "code": "11", "name": "梯子" },
      { "code": "12", "name": "椅儿" },
      { "code": "13", "name": "医生" },
      { "code": "14", "name": "钥匙" },
      { "code": "15", "name": "鹦鹉" },
      { "code": "16", "name": "石榴" },
      { "code": "17", "name": "仪器" },
      { "code": "18", "name": "要发（人民币）" },
      { "code": "19", "name": "药酒" },
      { "code": "20", "name": "香烟" },
      { "code": "21", "name": "鳄鱼" },
      { "code": "22", "name": "双胞胎" },
      { "code": "23", "name": "篮球（乔丹）" },
      { "code": "24", "name": "闹钟" },
      { "code": "25", "name": "二胡" },
      { "code": "26", "name": "二牛" },
      { "code": "27", "name": "耳机" },
      { "code": "28", "name": "恶霸" },
      { "code": "29", "name": "阿胶（驴" },
      { "code": "30", "name": "三轮车" },
      { "code": "31", "name": "山药" },
      { "code": "32", "name": "扇儿" },
      { "code": "33", "name": "灯泡（闪闪）" },
      { "code": "34", "name": "绅士" },
      { "code": "35", "name": "山虎" },
      { "code": "36", "name": "山鹿" },
      { "code": "37", "name": "山鸡" },
      { "code": "38", "name": "妇女" },
      { "code": "39", "name": "三九感冒灵" },
      { "code": "40", "name": "司令（朱德）" },
      { "code": "41", "name": "石椅" },
      { "code": "42", "name": "柿儿" },
      { "code": "43", "name": "石山" },
      { "code": "44", "name": "蛇" },
      { "code": "45", "name": "师傅（唐僧）" },
      { "code": "46", "name": "饲料" },
      { "code": "47", "name": "司机（方向盘）" },
      { "code": "48", "name": "石板" },
      { "code": "49", "name": "天安门" },
      { "code": "50", "name": "武林（大刀）" },
      { "code": "51", "name": "安全帽（工人）" },
      { "code": "52", "name": "屋儿" },
      { "code": "53", "name": "乌纱帽（包青天" },
      { "code": "54", "name": "武士" },
      { "code": "55", "name": "火车（呜呜）" },
      { "code": "56", "name": "蜗牛" },
      { "code": "57", "name": "武器" },
      { "code": "58", "name": "尾巴（松鼠）" },
      { "code": "59", "name": "五角星（暗器）" },
      { "code": "60", "name": "榴莲" },
      { "code": "61", "name": "儿童" },
      { "code": "62", "name": "炉儿" },
      { "code": "63", "name": "流沙（沙漠）" },
      { "code": "64", "name": "柳丝" },
      { "code": "65", "name": "尿壶（锣鼓）" },
      { "code": "66", "name": "蝌蚪" },
      { "code": "67", "name": "油漆" },
      { "code": "68", "name": "喇叭" },
      { "code": "69", "name": "漏斗" },
      { "code": "70", "name": "冰淇淋" },
      { "code": "71", "name": "镰刀锤子" },
      { "code": "72", "name": "企鹅" },
      { "code": "73", "name": "花旗参" },
      { "code": "74", "name": "骑士（拿破仑）" },
      { "code": "75", "name": "起舞" },
      { "code": "76", "name": "汽油" },
      { "code": "77", "name": "鹊桥" },
      { "code": "78", "name": "青蛙" },
      { "code": "79", "name": "气球" },
      { "code": "80", "name": "巴黎铁塔" },
      { "code": "81", "name": "白蚁" },
      { "code": "82", "name": "靶儿" },
      { "code": "83", "name": "芭蕉扇" },
      { "code": "84", "name": "巴士" },
      { "code": "85", "name": "宝物" },
      { "code": "86", "name": "八路" },
      { "code": "87", "name": "白旗" },
      { "code": "88", "name": "爸爸" },
      { "code": "89", "name": "白酒" },
      { "code": "90", "name": "酒瓶" },
      { "code": "91", "name": "球衣" },
      { "code": "92", "name": "球儿" },
      { "code": "93", "name": "旧伞" },
      { "code": "94", "name": "救世主" },
      { "code": "95", "name": "酒壶" },
      { "code": "96", "name": "旧炉" },
      { "code": "97", "name": "紫荆花" },
      { "code": "98", "name": "酒吧" },
      { "code": "99", "name": "舅舅" },
    ]
  },

  addIndex: function() {
    this.changeIndex(1);
  },

  minIndex: function() {
    this.changeIndex(-1);
  },

  changeIndex: function(i) {
    if(this.data.times!=null){
      return;
    }
    if (this.data.index == 0 && this.data.startTime == null) {
      this.setData({
        startTime: new Date()
      });
    }

    this.data.index = this.data.index + i;
    if (this.data.index >= this.data.list.length) {
      this.data.index = 0;
      //this.setData({index: theindex});
    } else if (this.data.index < 0) {
      this.data.index = this.data.list.length - 1;
      //this.setData({ index: theindex });
    }

    var item = this.data.list[this.data.index];
    this.setData({
      thecode: item.code
    });
    this.setData({
      thename: item.name
    });
    this.setData({
      isShowName: false
    });

    if (this.data.index == 0 && this.data.startTime != null) {
      this.setData({
        endTime: new Date()
      });
      var dateDiff = (this.data.endTime - this.data.startTime) / 1000;
      this.setData({
        times: dateDiff
      });
      this.setData({
        startTime: null
      });
      this.setData({
        endTime: null
      });
    }

  },
  showName: function() {
    this.setData({
      isShowName: true
    });
  },

  onLoad: function() {

  },
  switchChange: function() {
    var flag = !this.data.isOrder;
    this.setData({
      isOrder: flag
    });
  },
  reset: function(){
    this.setData({
      times: null
    });
  }
})