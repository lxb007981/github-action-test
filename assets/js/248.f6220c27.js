(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{642:function(t,v,_){"use strict";_.r(v);var s=_(32),a=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"直播间信息流"}},[t._v("直播间信息流")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E8%8E%B7%E5%8F%96%E4%BF%A1%E6%81%AF%E6%B5%81%E8%AE%A4%E8%AF%81%E7%A7%98%E9%92%A5"}},[t._v("获取信息流认证秘钥")])])]),t._v(" "),_("hr"),t._v(" "),_("h2",{attrs:{id:"获取信息流认证秘钥"}},[t._v("获取信息流认证秘钥")]),t._v(" "),_("blockquote",[_("p",[t._v("http://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo")])]),t._v(" "),_("p",[_("em",[t._v("请求方式：GET")])]),t._v(" "),_("p",[_("strong",[t._v("url参数：")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("内容")]),t._v(" "),_("th",[t._v("必要性")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("id")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("直播间真实id")]),t._v(" "),_("td",[t._v("必要")]),t._v(" "),_("td")])])]),t._v(" "),_("p",[_("strong",[t._v("json回复：")])]),t._v(" "),_("p",[t._v("根对象：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("内容")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("code")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("返回值")]),t._v(" "),_("td",[t._v("0：成功"),_("br"),t._v("65530：token错误（登录错误）"),_("br"),t._v("1：错误"),_("br"),t._v("60009：分区不存在"),_("br"),_("strong",[t._v("（其他错误码有待补充）")])])]),t._v(" "),_("tr",[_("td",[t._v("message")]),t._v(" "),_("td",[t._v("str")]),t._v(" "),_("td",[t._v("错误信息")]),t._v(" "),_("td",[t._v("默认为空")])]),t._v(" "),_("tr",[_("td",[t._v("ttl")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("data")]),t._v(" "),_("td",[t._v("obj")]),t._v(" "),_("td",[t._v("信息本体")]),t._v(" "),_("td")])])]),t._v(" "),_("p",[_("code",[t._v("data")]),t._v("对象：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("内容")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("group")]),t._v(" "),_("td",[t._v("str")]),t._v(" "),_("td",[t._v("live")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("business_id")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("refresh_row_factor")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("0.125")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("refresh_rate")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("100")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("max_delay")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("5000")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("token")]),t._v(" "),_("td",[t._v("str")]),t._v(" "),_("td",[t._v("认证秘钥")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("host_list")]),t._v(" "),_("td",[t._v("array")]),t._v(" "),_("td",[t._v("信息流服务器节点列表")]),t._v(" "),_("td")])])]),t._v(" "),_("p",[_("code",[t._v("host_list")]),t._v("数组中的对象：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("内容")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("host")]),t._v(" "),_("td",[t._v("str")]),t._v(" "),_("td",[t._v("服务器域名")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("port")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("tcp端口")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("wss_port")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("wss端口")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("ws_port")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("ws端口")]),t._v(" "),_("td")])])]),t._v(" "),_("p",[_("strong",[t._v("示例：")])]),t._v(" "),_("p",[t._v("获得直播间"),_("code",[t._v("22824550")]),t._v("的信息流认证秘钥")]),t._v(" "),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[_("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -G "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo'")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id=22824550'")]),t._v("\n")])])]),_("details",[_("summary",[t._v("查看响应示例：")]),t._v(" "),_("div",{staticClass:"language-json extra-class"},[_("pre",{pre:!0,attrs:{class:"language-json"}},[_("code",[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ttl"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"group"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"live"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"business_id"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh_row_factor"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.125")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh_rate"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"max_delay"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Eac3Lm1JADzny-YnB5MW0MQcd23rw_mgMFZAnu40I-J2ecP2Qj6CH-UqjdfvwiqVEZcEksG1ONSOi1dGzm0wM4FxqA-ZYXtcQyHXPXqxmrx3AmDx8Z5-d4TuKQkaU0zxevH1B-gnu7g8TDtIE4lns4BYlw=="')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"host_list"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"host"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tx-sh-live-comet-02.chat.bilibili.com"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("2243")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"wss_port"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ws_port"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("2244")]),t._v("\n      "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"host"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tx-bj-live-comet-02.chat.bilibili.com"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("2243")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"wss_port"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ws_port"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("2244")]),t._v("\n      "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"host"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"broadcastlv.chat.bilibili.com"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("2243")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"wss_port"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ws_port"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("2244")]),t._v("\n      "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),_("h2",{attrs:{id:"数据包格式"}},[t._v("数据包格式")]),t._v(" "),_("p",[t._v("数据包为MQ（消息队列）使用websocket或tcp作为通道，具体格式为头部数据+正文数据")]),t._v(" "),_("p",[t._v("操作流程：")]),t._v(" "),_("p",[t._v("发送认证包->接收认证包回应->接收普通包&（每30秒发送心跳包->接收心跳回应）")]),t._v(" "),_("p",[t._v("头部格式：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("偏移量")]),t._v(" "),_("th",[t._v("长度")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("含义")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("0")]),t._v(" "),_("td",[t._v("4")]),t._v(" "),_("td",[t._v("uint32")]),t._v(" "),_("td",[t._v("封包总大小（头部大小+正文大小）")])]),t._v(" "),_("tr",[_("td",[t._v("4")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("uint16")]),t._v(" "),_("td",[t._v("头部大小（一般为0x0010，16字节）")])]),t._v(" "),_("tr",[_("td",[t._v("6")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("uint16")]),t._v(" "),_("td",[t._v("协议版本:"),_("br"),t._v("0普通包正文不使用压缩 "),_("br"),t._v("1心跳及认证包正文不使用压缩"),_("br"),t._v("2普通包正文使用zlib压缩"),_("br"),t._v("3普通包正文使用brotli压缩,解压为一个带头部的协议0普通包")])]),t._v(" "),_("tr",[_("td",[t._v("8")]),t._v(" "),_("td",[t._v("4")]),t._v(" "),_("td",[t._v("uint32")]),t._v(" "),_("td",[t._v("操作码（封包类型）")])]),t._v(" "),_("tr",[_("td",[t._v("12")]),t._v(" "),_("td",[t._v("4")]),t._v(" "),_("td",[t._v("uint32")]),t._v(" "),_("td",[t._v("sequence，每次发包时向上递增")])])])]),t._v(" "),_("p",[t._v("操作码：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("代码")]),t._v(" "),_("th",[t._v("含义")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[t._v("心跳包")])]),t._v(" "),_("tr",[_("td",[t._v("3")]),t._v(" "),_("td",[t._v("心跳包回复（人气值）")])]),t._v(" "),_("tr",[_("td",[t._v("5")]),t._v(" "),_("td",[t._v("普通包（命令）")])]),t._v(" "),_("tr",[_("td",[t._v("7")]),t._v(" "),_("td",[t._v("认证包")])]),t._v(" "),_("tr",[_("td",[t._v("8")]),t._v(" "),_("td",[t._v("认证包回复")])])])]),t._v(" "),_("h3",{attrs:{id:"认证包"}},[t._v("认证包")]),t._v(" "),_("p",[t._v("方式：（上行）")]),t._v(" "),_("p",[t._v("连接成功后5秒内发送，否则强制断开连接")]),t._v(" "),_("p",[t._v("正文：")]),t._v(" "),_("p",[t._v("json格式")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("内容")]),t._v(" "),_("th",[t._v("必要性")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("uid")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("用户mid")]),t._v(" "),_("td",[t._v("非必要")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("roomid")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("加入房间的id")]),t._v(" "),_("td",[t._v("必要")]),t._v(" "),_("td",[t._v("直播间真实id")])]),t._v(" "),_("tr",[_("td",[t._v("protover")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("协议版本")]),t._v(" "),_("td",[t._v("非必要")]),t._v(" "),_("td",[t._v("3")])]),t._v(" "),_("tr",[_("td",[t._v("platform")]),t._v(" "),_("td",[t._v("str")]),t._v(" "),_("td",[t._v("平台标识")]),t._v(" "),_("td",[t._v("非必要")]),t._v(" "),_("td",[t._v('"web"')])]),t._v(" "),_("tr",[_("td",[t._v("type")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("非必要")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("key")]),t._v(" "),_("td",[t._v("str")]),t._v(" "),_("td",[t._v("认证秘钥")]),t._v(" "),_("td",[t._v("非必要")]),t._v(" "),_("td")])])]),t._v(" "),_("p",[t._v("示例：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('00000000: 0000 00ff 0010 0001 0000 0007 0000 0001  ................\n00000001: 7b22 7569 6422 3a31 3630 3134 3836 3234  {"uid":160148624\n00000002: 2c22 726f 6f6d 6964 223a 3232 3630 3831  ,"roomid":226081\n00000003: 3132 2c22 7072 6f74 6f76 6572 223a 332c  12,"protover":3,\n00000004: 2270 6c61 7466 6f72 6d22 3a22 7765 6222  "platform":"web"\n00000005: 2c22 7479 7065 223a 322c 226b 6579 223a  ,"type":2,"key":\n00000006: 2230 7670 5448 5737 7757 556e 6c6f 5270  "0vpTHW7wWUnloRp\n00000007: 5251 6b47 764e 626e 7776 7364 6d2d 7159  RQkGvNbnwvsdm-qY\n00000008: 4777 4243 5875 2d59 5164 6e57 7653 5547  GwBCXu-YQdnWvSUG\n00000009: 7373 4139 7962 4b68 7932 6a78 3952 6f63  ssA9ybKhy2jx9Roc\n0000000a: 4150 4651 6d54 4f6b 5277 6b4b 687a 4479  APFQmTOkRwkKhzDy\n0000000b: 4839 5054 756f 5468 6834 4630 7562 584c  H9PTuoThh4F0ubXL\n0000000c: 4964 6e69 3734 5539 304b 4242 6972 3248  Idni74U90KBBir2H\n0000000d: 7451 3941 3777 674b 3438 4b7a 495f 5a5a  tQ9A7wgK48KzI_ZZ\n0000000e: 3838 7557 4e59 6652 4f48 6964 4e6a 3732  88uWNYfROHidNj72\n0000000f: 7061 796e 3479 3071 4268 513d 3d22 7d    payn4y0qBhQ=="}\n')])])]),_("h3",{attrs:{id:"认证包回复"}},[t._v("认证包回复")]),t._v(" "),_("p",[t._v("方式：（下行）")]),t._v(" "),_("p",[t._v("在认证包发送成功后就会收到")]),t._v(" "),_("p",[t._v("json格式")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("内容")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("code")]),t._v(" "),_("td",[t._v("num")]),t._v(" "),_("td",[t._v("返回值")]),t._v(" "),_("td",[t._v("0认证成功")])])])]),t._v(" "),_("p",[t._v("示例：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('00000000  00 00 00 1a 00 10 00 01  00 00 00 08 00 00 00 01  |................|\n00000010  7b 22 63 6f 64 65 22 3a  30 7d                    |{"code":0}|\n')])])]),_("h3",{attrs:{id:"心跳包"}},[t._v("心跳包")]),t._v(" "),_("p",[t._v("方式：（上行）")]),t._v(" "),_("p",[t._v("30秒左右发送一次，否则60秒后会被强制断开连接")]),t._v(" "),_("p",[t._v("正文：")]),t._v(" "),_("p",[t._v("可以为空或任意字符")]),t._v(" "),_("p",[t._v("示例：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("00000000  00 00 00 1f 00 10 00 01  00 00 00 02 00 00 00 01  |................|\n00000010  5b 6f 62 6a 65 63 74 20  4f 62 6a 65 63 74 5d     |[object Object]|\n")])])]),_("h3",{attrs:{id:"心跳回应-人气值"}},[t._v("心跳回应（人气值）")]),t._v(" "),_("p",[t._v("方式：（下行）")]),t._v(" "),_("p",[t._v("在心跳包发送成功后就会收到")]),t._v(" "),_("p",[t._v("正文：")]),t._v(" "),_("p",[t._v("uint32整数，代表房间当前的人气值")]),t._v(" "),_("p",[t._v("示例：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("00000000  00 00 00 14 00 10 00 01  00 00 00 03 00 00 00 01  |................|\n00000010  00 00 14 83                                       |....|\n")])])]),_("p",[t._v("可见房间内人气值为5251")]),t._v(" "),_("h3",{attrs:{id:"普通包"}},[t._v("普通包")]),t._v(" "),_("p",[t._v("方式：（下行）")]),t._v(" "),_("h4",{attrs:{id:"弹幕"}},[t._v("弹幕")]),t._v(" "),_("h4",{attrs:{id:"送礼"}},[t._v("送礼")]),t._v(" "),_("h4",{attrs:{id:"欢迎加入房间"}},[t._v("欢迎加入房间")]),t._v(" "),_("h4",{attrs:{id:"欢迎房管加入房间"}},[t._v("欢迎房管加入房间")]),t._v(" "),_("h4",{attrs:{id:"系统消息"}},[t._v("系统消息")]),t._v(" "),_("h4",{attrs:{id:"主播准备中"}},[t._v("主播准备中")]),t._v(" "),_("h4",{attrs:{id:"直播开始"}},[t._v("直播开始")]),t._v(" "),_("h4",{attrs:{id:"直播状态更新"}},[t._v("直播状态更新")])])}),[],!1,null,null,null);v.default=a.exports}}]);