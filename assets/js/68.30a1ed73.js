(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{464:function(t,s,v){"use strict";v.r(s);var _=v(32),a=Object(_.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"充电留言"}},[t._v("充电留言")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#%E5%8F%91%E9%80%81%E5%85%85%E7%94%B5%E7%95%99%E8%A8%80"}},[t._v("发送充电留言")])])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"发送充电留言"}},[t._v("发送充电留言")]),t._v(" "),v("blockquote",[v("p",[t._v("http://api.bilibili.com/x/ugcpay/trade/elec/message")])]),t._v(" "),v("p",[v("em",[t._v("请求方式：POST")])]),t._v(" "),v("p",[t._v("认证方式：Cookie（SESSDATA）")]),t._v(" "),v("p",[v("strong",[t._v("正文参数（ application/x-www-form-urlencoded ）：")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数名")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("内容")]),t._v(" "),v("th",[t._v("必要性")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("order_id")]),t._v(" "),v("td",[t._v("str")]),t._v(" "),v("td",[t._v("留言token")]),t._v(" "),v("td",[t._v("必要")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("message")]),t._v(" "),v("td",[t._v("str")]),t._v(" "),v("td",[t._v("留言内容")]),t._v(" "),v("td",[t._v("必要")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("csrf")]),t._v(" "),v("td",[t._v("str")]),t._v(" "),v("td",[t._v("CSRF Token（位于cookie）")]),t._v(" "),v("td",[t._v("必要")]),t._v(" "),v("td")])])]),t._v(" "),v("p",[v("strong",[t._v("json回复：")])]),t._v(" "),v("p",[t._v("根对象：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("内容")]),t._v(" "),v("th",[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("code")]),t._v(" "),v("td",[t._v("num")]),t._v(" "),v("td",[t._v("返回值")]),t._v(" "),v("td",[t._v("0：成功 "),v("br"),t._v("-101：账号未登录"),v("br"),t._v("-111：csrf校验失败"),v("br"),t._v("-400：请求错误"),v("br"),t._v("88203：不能重复留言")])]),t._v(" "),v("tr",[v("td",[t._v("message")]),t._v(" "),v("td",[t._v("str")]),t._v(" "),v("td",[t._v("错误信息")]),t._v(" "),v("td",[t._v("默认为0")])]),t._v(" "),v("tr",[v("td",[t._v("ttl")]),t._v(" "),v("td",[t._v("num")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td")])])]),t._v(" "),v("p",[v("strong",[t._v("示例：")])]),t._v(" "),v("p",[t._v("为留言token为"),v("code",[t._v("BPRG5CEC3VUPOOANA540")]),t._v("的充电操作，添加了内容为"),v("code",[t._v("支持一下大佬")]),t._v("的留言")]),t._v(" "),v("div",{staticClass:"language-shell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://api.bilibili.com/x/ugcpay/trade/elec/message'")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'order_id=BPRG5CEC3VUPOOANA540'")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message=支持一下大佬'")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data-urlencode "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'csrf=xxx'")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-b "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SESSDATA=xxx'")]),t._v("\n")])])]),v("details",[v("summary",[t._v("查看响应示例：")]),t._v(" "),v("div",{staticClass:"language-json extra-class"},[v("pre",{pre:!0,attrs:{class:"language-json"}},[v("code",[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ttl"')]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])}),[],!1,null,null,null);s.default=a.exports}}]);