(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{515:function(s,t,a){"use strict";a.r(t);var n=a(32),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("api.proto")])]),s._v(" "),a("div",{staticClass:"language-protobuf extra-class"},[a("pre",{pre:!0,attrs:{class:"language-protobuf"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("syntax")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"proto3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" bilibili"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("privacy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 隐私")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("service")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Privacy")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取隐私设置")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rpc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("PrivacyConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NoArgRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PrivacyConfigReply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改隐私设置")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rpc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SetPrivacyConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SetPrivacyConfigRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("returns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NoReply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 空请求")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("message")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NoArgRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 空响应")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("message")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NoReply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取隐私设置-响应")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("message")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PrivacyConfigReply")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 隐私设置")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token positional-class-name class-name"}},[s._v("PrivacyConfigItem")]),s._v(" privacy_config_item "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 隐私设置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("message")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PrivacyConfigItem")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 隐私开关类型")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token positional-class-name class-name"}},[s._v("PrivacyConfigType")]),s._v(" privacy_config_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" title "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 隐私开关状态")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token positional-class-name class-name"}},[s._v("PrivacyConfigState")]),s._v(" state "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" sub_title "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" sub_title_uri "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 隐私开关类型")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("enum")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PrivacyConfigType")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n    none "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 动态同城")]),s._v("\n    dynamic_city "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 隐私开关状态")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("enum")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PrivacyConfigState")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 关闭")]),s._v("\n    close "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 打开")]),s._v("\n    open "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改隐私设置-请求")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("message")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SetPrivacyConfigRequest")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 隐私开关类型")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token positional-class-name class-name"}},[s._v("PrivacyConfigType")]),s._v(" privacy_config_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 隐私开关状态")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token positional-class-name class-name"}},[s._v("PrivacyConfigState")]),s._v(" state "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("```\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);