(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9159e64"],{"47d1":function(e,o,t){},"8bc6":function(e,o,t){"use strict";t("47d1")},"972a":function(e,o,t){"use strict";t.r(o);var s=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"personal"},[t("el-collapse",{staticClass:"item",model:{value:e.activeNames,callback:function(o){e.activeNames=o},expression:"activeNames"}},[t("el-card",{staticClass:"ka-pian"},[t("el-collapse-item",{staticClass:"title",attrs:{title:"设置账号",name:"1"}},[t("div",[t("el-form",{ref:"registeredForm",staticClass:"demo-ruleForm",attrs:{model:e.registeredForm,rules:e.registeredFormRules,"label-width":"100px",size:"large"},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",{staticClass:"m-0",attrs:{label:"账号",prop:"username"}},[t("el-input",{class:{"read-only":e.accountReadOnly},staticStyle:{width:"60%"},attrs:{placeholder:e.accountReadOnly?"未设置":"账号以字母开头的5-20位字母、数字、下划线和减号"},model:{value:e.registeredForm.username,callback:function(o){e.$set(e.registeredForm,"username",o)},expression:"registeredForm.username"}})],1)],1),t("p",{directives:[{name:"show",rawName:"v-show",value:""==e.account,expression:"account == ''"}],staticClass:"text mt-30"},[e._v(" 账号只能允许设置一次，请谨慎操作！ ")]),t("el-button",{directives:[{name:"show",rawName:"v-show",value:""==e.account,expression:"account == ''"}],staticClass:"edit-button",attrs:{type:"primary",size:"large"},on:{click:function(o){return e.setUpAccount(0)}}},[e._v(e._s(1==e.accountDialogHide?"修改":"确认"))]),t("el-dialog",{staticClass:"dialog",attrs:{title:"设置初始密码",visible:e.nameDialog,width:"370px","close-on-press-escape":!1,"close-on-click-modal":!1},on:{"update:visible":function(o){e.nameDialog=o},closed:function(o){return e.$refs["pwdForm"].resetFields()}}},[t("div",{staticClass:"phone-text"},[e._v("设置账号需要先设置一个初始密码")]),t("div",{staticClass:"phone-text text-primary"},[e._v(" 密码为6~18位，且必须包含字母和数字 ")]),t("el-form",{ref:"pwdForm",staticClass:"mt-20",attrs:{model:e.pwdForm,rules:e.passwordRules,size:"large"}},[t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{staticStyle:{width:"100%",margin:"10px 15px 0 0"},attrs:{placeholder:"请输入初始密码",type:"password",autocomplete:"off",clearable:"","show-password":""},model:{value:e.pwdForm.password,callback:function(o){e.$set(e.pwdForm,"password",o)},expression:"pwdForm.password"}})],1),t("el-form-item",{staticStyle:{"margin-bottom":"25px"},attrs:{prop:"confirmPassword"}},[t("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入确认初始密码",type:"password",autocomplete:"off",clearable:"","show-password":""},model:{value:e.pwdForm.confirmPassword,callback:function(o){e.$set(e.pwdForm,"confirmPassword",o)},expression:"pwdForm.confirmPassword"}})],1),t("el-form-item",{attrs:{prop:"code"}},[t("el-input",{staticStyle:{width:"190px"},attrs:{placeholder:"验证码",clearable:""},model:{value:e.pwdForm.code,callback:function(o){e.$set(e.pwdForm,"code",o)},expression:"pwdForm.code"}}),t("el-button",{staticClass:"img-box",attrs:{size:"large",disabled:""==e.pwdForm.codeImg},on:{click:e.getAccountCode}},[""==e.pwdForm.codeImg?t("i",{staticClass:"el-icon-loading"}):t("img",{attrs:{src:e.pwdForm.codeImg}})])],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{staticClass:"phone-determine",attrs:{type:"primary",size:"large",loading:e.submitLoading},on:{click:function(o){return e.setUpAccount(2)}}},[e._v("确 定")])],1)],1)],1)])],1),t("el-card",{staticClass:"ka-pian"},[t("el-collapse-item",{staticClass:"title",attrs:{title:"设置密码",name:"2"}},[t("div",[t("p",{directives:[{name:"show",rawName:"v-show",value:""==e.account,expression:"account == ''"}],staticClass:"text"},[e._v(" 设置新密码之前，请先设置账号 ")]),t("p",{directives:[{name:"show",rawName:"v-show",value:""!=e.account,expression:"account != ''"}],staticClass:"text"},[e._v("请勿频繁的修改密码！")]),t("el-button",{staticClass:"edit-button",attrs:{type:"primary",size:"large",disabled:""==e.account},on:{click:function(o){e.confirmChanges=!0}}},[e._v("修改密码")]),t("el-dialog",{staticClass:"dialog",attrs:{title:"修改密码",visible:e.confirmChanges,width:"370px","close-on-press-escape":!1,"close-on-click-modal":!1},on:{"update:visible":function(o){e.confirmChanges=o},closed:function(o){return e.$refs["changePasswordForm"].resetFields()}}},[t("div",{staticClass:"phone-text text-primary"},[e._v(" 密码为6~18位，且必须包含字母和数字 ")]),t("el-form",{ref:"changePasswordForm",staticClass:"mt-20",attrs:{model:e.changePasswordForm,rules:e.changePasswordRules,disabled:""==e.account,size:"large"}},[t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{staticStyle:{width:"100%"},attrs:{type:"password",autocomplete:"off",placeholder:"旧密码",clearable:"","show-password":""},model:{value:e.changePasswordForm.password,callback:function(o){e.$set(e.changePasswordForm,"password",o)},expression:"changePasswordForm.password"}})],1),t("el-form-item",{attrs:{prop:"newPassword"}},[t("el-input",{staticStyle:{width:"100%"},attrs:{type:"password",autocomplete:"off",placeholder:"新密码",clearable:"","show-password":""},model:{value:e.changePasswordForm.newPassword,callback:function(o){e.$set(e.changePasswordForm,"newPassword",o)},expression:"changePasswordForm.newPassword"}})],1),t("el-form-item",{attrs:{prop:"confirmPassword"}},[t("el-input",{staticStyle:{width:"100%"},attrs:{type:"password",autocomplete:"off",placeholder:"确认新密码",clearable:"","show-password":""},model:{value:e.changePasswordForm.confirmPassword,callback:function(o){e.$set(e.changePasswordForm,"confirmPassword",o)},expression:"changePasswordForm.confirmPassword"}})],1),t("el-form-item",{attrs:{prop:"code"}},[t("el-input",{staticStyle:{width:"190px"},attrs:{placeholder:"验证码",clearable:""},model:{value:e.changePasswordForm.code,callback:function(o){e.$set(e.changePasswordForm,"code",o)},expression:"changePasswordForm.code"}}),t("el-button",{staticClass:"img-box",attrs:{size:"large",disabled:""==e.changePasswordForm.codeImg},on:{click:e.getPasswordCode}},[""==e.changePasswordForm.codeImg?t("i",{staticClass:"el-icon-loading"}):t("img",{attrs:{src:e.changePasswordForm.codeImg}})])],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{staticClass:"phone-determine",attrs:{type:"primary",size:"large",loading:e.submitLoading},on:{click:e.submitPwdForm}},[e._v("确 定")])],1)],1)],1)])],1),e.$store.getters.phone?t("el-card",{staticClass:"ka-pian"},[t("el-collapse-item",{staticClass:"title",attrs:{title:"换绑手机",name:"3"}},[t("el-form",{attrs:{"label-width":"100px",size:"large"}},[t("el-form-item",{staticClass:"m-0",attrs:{label:"手机号",prop:"username"}},[t("el-input",{staticClass:"read-only",staticStyle:{width:"60%"},attrs:{placeholder:"未设置"},model:{value:e.phone,callback:function(o){e.phone=o},expression:"phone"}})],1)],1),t("p",{staticClass:"text"},[e._v(" "+e._s(e.phone?"一个手机号只能绑定一个账号。绑定手机号将作为您身份验证的重要方式，请谨慎对待！":"绑定手机号将作为您身份验证的重要方式，请尽快绑定手机号！")+" ")]),t("el-button",{staticClass:"edit-button",attrs:{type:"primary",size:"large"},on:{click:function(o){return e.$refs["update-phone"].open()}}},[e._v(e._s(e.phone?"更换手机号":"绑定手机号"))]),t("update-phone",{ref:"update-phone"})],1)],1):e._e()],1)],1)},r=[],a=(t("ac1f"),t("00b4"),t("e9c4"),function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"update-phone"},[t("el-dialog",{staticClass:"dialog",attrs:{title:e.step[e.active],visible:e.dialogVisible,width:"370px","close-on-press-escape":!1,"close-on-click-modal":!1,"show-close":!1,fullscreen:!1},on:{"update:visible":function(o){e.dialogVisible=o},closed:e.cancelWindow}},[t("el-steps",{attrs:{space:200,active:e.active,"finish-status":"success","align-center":""}},[t("el-step",{attrs:{title:""}}),t("el-step",{attrs:{title:""}}),t("el-step",{attrs:{title:""}}),t("el-step",{attrs:{title:""}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:0==e.active,expression:"active == 0"}]},[t("p",[e._v("保护您的信息安全需要验证身份！")]),t("el-form",{ref:"phoneCodeForm",staticClass:"mt-15 ml-30",attrs:{model:e.phoneCodeForm,rules:e.phoneCodeRules,size:"large"}},[t("el-form-item",{attrs:{prop:"code"}},[t("div",{staticStyle:{"margin-bottom":"22px"}},[t("div",{staticClass:"text-switch-code"},[t("span",{on:{click:e.getPhoneCode}},[e._v("看不清？换一张")])]),t("el-button",{staticClass:"phone-code-img-box",attrs:{disabled:""==e.phoneCodeForm.codeImg,size:"large"},on:{click:e.getPhoneCode}},[""==e.phoneCodeForm.codeImg?t("i",{staticClass:"el-icon-loading"}):t("img",{attrs:{src:e.phoneCodeForm.codeImg}})])],1),t("el-input",{staticStyle:{width:"270px"},attrs:{placeholder:"验证码",clearable:""},model:{value:e.phoneCodeForm.code,callback:function(o){e.$set(e.phoneCodeForm,"code",o)},expression:"phoneCodeForm.code"}})],1)],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:1==e.active,expression:"active == 1"}]},[t("p",[e._v("为了保障账号安全，变更前需验证身份！")]),t("el-form",{ref:"phoneForm",staticClass:"mt-15 ml-30 mr-30",attrs:{model:e.phoneForm,rules:e.phoneFormRules,size:"large"}},[t("el-form-item",{attrs:{label:"",prop:"phone"}},[t("el-input",{staticClass:"mr-30",staticStyle:{width:"100%"},attrs:{placeholder:e.phoneForm.phone,disabled:!0,clearable:""}})],1),t("el-form-item",{attrs:{label:"",prop:"code"}},[t("el-input",{staticClass:"mr-30",staticStyle:{width:"100%"},attrs:{placeholder:"请输入手机验证码",clearable:""},model:{value:e.phoneForm.code,callback:function(o){e.$set(e.phoneForm,"code",o)},expression:"phoneForm.code"}})],1)],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:2==e.active,expression:"active == 2"}]},[t("p",[e._v("请勿随意泄露手机号，以防账号被盗取！")]),t("el-form",{ref:"newsPhoneCodeForm",staticClass:"mt-15 ml-30 mr-30",attrs:{model:e.newsPhoneCodeForm,rules:e.newsPhoneCodeFormRules,size:"large"}},[t("el-form-item",{attrs:{label:"",prop:"phonenumber"}},[t("el-input",{staticClass:"mr-30",staticStyle:{width:"100%"},attrs:{placeholder:"请输入新手机号",clearable:""},model:{value:e.newsPhoneCodeForm.phonenumber,callback:function(o){e.$set(e.newsPhoneCodeForm,"phonenumber",o)},expression:"newsPhoneCodeForm.phonenumber"}})],1),t("el-form-item",{attrs:{prop:"code"}},[t("el-input",{staticStyle:{width:"130px"},attrs:{placeholder:"验证码",clearable:""},model:{value:e.newsPhoneCodeForm.code,callback:function(o){e.$set(e.newsPhoneCodeForm,"code",o)},expression:"newsPhoneCodeForm.code"}}),t("el-button",{staticClass:"new-phone-code-img-box",attrs:{disabled:""==e.newsPhoneCodeForm.codeImg,size:"large"},on:{click:e.getNewPhoneCode}},[""==e.newsPhoneCodeForm.codeImg?t("i",{staticClass:"el-icon-loading"}):t("img",{attrs:{src:e.newsPhoneCodeForm.codeImg}})])],1)],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:3==e.active,expression:"active == 3"}]},[t("p",[e._v("确认变更信息是否准确！")]),t("el-form",{ref:"newsPhoneForm",staticClass:"mt-15 ml-30 mr-30",attrs:{model:e.newsPhoneForm,rules:e.newsPhoneFormRules,size:"large"}},[t("el-form-item",{attrs:{label:"",prop:"phonenumber"}},[t("el-input",{staticClass:"mr-30",staticStyle:{width:"100%"},attrs:{placeholder:e.newsPhoneCodeForm.phonenumber,disabled:!0,clearable:""}})],1),t("el-form-item",{attrs:{label:"",prop:"code"}},[t("el-input",{staticClass:"mr-30",staticStyle:{width:"100%"},attrs:{placeholder:"请输入新手机验证码",clearable:""},model:{value:e.newsPhoneForm.code,callback:function(o){e.$set(e.newsPhoneForm,"code",o)},expression:"newsPhoneForm.code"}})],1)],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:4==e.active,expression:"active == 4"}]}),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.active<=3,expression:"active <= 3"}],attrs:{size:"large"},on:{click:function(o){e.dialogVisible=!1}}},[e._v("取 消")]),t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.active<=3,expression:"active <= 3"}],attrs:{type:"primary",size:"large",disabled:e.submitLoading},on:{click:e.submitForm}},[e._v("下一步")])],1)],1),t("el-dialog",{staticClass:"dialog",attrs:{title:"绑定初始手机号",visible:e.dialogVisible2,width:"370px","close-on-press-escape":!1,"close-on-click-modal":!1,fullscreen:!1},on:{"update:visible":function(o){e.dialogVisible2=o},closed:e.cancel}},[t("p",[e._v("一个手机号只能绑定一个账号！")]),t("el-form",{ref:"noPhoneForm",staticClass:"demo-ruleForm",attrs:{model:e.noPhoneForm,rules:e.noPhoneFormRules,size:"large"}},[t("el-form-item",{attrs:{prop:"code"}},[t("el-input",{staticStyle:{width:"190px"},attrs:{placeholder:"请输入验证码",clearable:""},model:{value:e.noPhoneForm.code,callback:function(o){e.$set(e.noPhoneForm,"code",o)},expression:"noPhoneForm.code"}}),t("el-button",{staticClass:"new-phone-code-img-box",attrs:{size:"large",disabled:""==e.noPhoneForm.codeImg},on:{click:e.getNoPhoneCode}},[""==e.noPhoneForm.codeImg?t("i",{staticClass:"el-icon-loading"}):t("img",{attrs:{src:e.noPhoneForm.codeImg}})])],1),t("el-form-item",{attrs:{label:"",prop:"phonenumber"}},[t("el-input",{staticClass:"mr-15",staticStyle:{width:"190px"},attrs:{placeholder:"请输入手机号",clearable:""},model:{value:e.noPhoneForm.phonenumber,callback:function(o){e.$set(e.noPhoneForm,"phonenumber",o)},expression:"noPhoneForm.phonenumber"}}),t("el-button",{staticClass:"bomb-verification-code",staticStyle:{width:"125px"},attrs:{type:"primary",size:"large"},on:{click:function(o){return e.nophoneCodeForm(1)}}},[e._v("验证码")])],1)],1),t("el-form",{ref:"startPhoneForm",staticClass:"demo-ruleForm",attrs:{model:e.startPhoneForm,rules:e.startPhoneFormRules,size:"large"}},[t("el-form-item",{attrs:{label:"",prop:"code"}},[t("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入短信验证码",clearable:""},model:{value:e.startPhoneForm.code,callback:function(o){e.$set(e.startPhoneForm,"code",o)},expression:"startPhoneForm.code"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{staticClass:"phone-determine",attrs:{type:"primary",size:"large"},on:{click:function(o){return e.nophoneCodeForm(2)}}},[e._v("确 定")])],1)],1)],1)}),n=[],i={name:"updatePhone",data:function(){var e=function(e,o,t){""===o?t(new Error("手机号不能为空")):/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(o)?t():t(new Error("手机号格式不正确"))};return{submitLoading:!1,dialogVisible:!1,dialogVisible2:!1,active:0,step:["获取验证码","验证旧手机","新手机信息","验证新手机"],phoneCodeForm:{id:"",code:"",codeImg:""},phoneCodeRules:{code:[{required:!0,message:"请输入验证码",trigger:["blur","change"]}]},phoneForm:{phone:"",code:""},phoneFormRules:{code:[{required:!0,message:"请输入短信验证码",trigger:["blur","change"]}]},newsPhoneCodeForm:{phonenumber:"",id:"",code:"",codeImg:""},newsPhoneCodeFormRules:{phonenumber:[{required:!0,validator:e,trigger:["blur","change"]}],code:[{required:!0,message:"请输入验证码",trigger:["blur","change"]}]},newsPhoneForm:{phonenumber:"",code:""},newsPhoneFormRules:{phonenumber:[{required:!0,validator:e,trigger:["blur","change"]}],code:[{required:!0,message:"请输入短信验证码",trigger:["blur","change"]}]},noPhoneForm:{phonenumber:"",id:"",code:"",codeImg:""},noPhoneFormRules:{phonenumber:[{required:!0,validator:e,trigger:["blur","change"]}],code:[{required:!0,message:"请输入验证码",trigger:["blur","change"]}]},startPhoneForm:{phonenumber:"",code:""},startPhoneFormRules:{phonenumber:[{required:!0,validator:e,trigger:["blur","change"]}],code:[{required:!0,message:"请输入验证码",trigger:["blur","change"]}]}}},created:function(){this.phoneForm.phone=this.$getUserInfo("phone"),this.$parent.$parent.$parent.$parent.updatePhone(this.phoneForm.phone)},mounted:function(){this.getPhoneCode(),this.getNewPhoneCode(),this.getNoPhoneCode()},methods:{open:function(){this.getPhoneCode(),this.$store.state.user.phone?(this.dialogVisible=!0,this.active=0):this.dialogVisible2=!0},getPhoneCode:function(){var e=this;this.phoneCodeForm.codeImg="",getImgCaptcha().then((function(o){e.phoneCodeForm.codeImg=o.data.prefix+o.data.image,e.phoneCodeForm.id=o.data.id})).catch((function(o){e.$msg("error","获取图片验证码失败")}))},getNewPhoneCode:function(){var e=this;this.newsPhoneCodeForm.codeImg="",getImgCaptcha().then((function(o){e.newsPhoneCodeForm.codeImg=o.data.prefix+o.data.image,e.newsPhoneCodeForm.id=o.data.id})).catch((function(o){e.$msg("error","获取图片验证码失败")}))},getNoPhoneCode:function(){var e=this;this.noPhoneForm.codeImg="",getImgCaptcha().then((function(o){e.noPhoneForm.codeImg=o.data.prefix+o.data.image,e.noPhoneForm.id=o.data.id})).catch((function(o){e.$msg("error","获取图片验证码失败")}))},cancelWindow:function(){this.$refs["phoneCodeForm"].resetFields(),this.$refs["phoneForm"].resetFields("code"),this.$refs["newsPhoneCodeForm"].resetFields(),this.$refs["newsPhoneForm"].resetFields("code")},cancel:function(){this.$refs["startPhoneForm"].resetFields(),this.$refs["noPhoneForm"].resetFields()},submitForm:function(){var e=this;0==this.active?this.$refs["phoneCodeForm"].validate((function(o){var t=JSON.parse(JSON.stringify(e.phoneCodeForm));if(delete t.codeImg,!o)return!1;e.submitLoading=!0,setUserPhoneCode(t).then((function(o){e.submitLoading=!1,e.$msg("success","短信验证码已发送到您的手机，请注意查收"),e.active++})).catch((function(o){e.submitLoading=!1,"FAIL"===o.msg&&e.$msg("error","短信验证码获取失败，请稍后重试"),e.getPhoneCode()}))})):1==this.active?this.$refs["phoneForm"].validate((function(o){if(!o)return!1;e.submitLoading=!0,setUserPhone(e.phoneForm).then((function(o){e.submitLoading=!1,e.$msg("success","旧手机验证通过"),e.active++})).catch((function(o){e.submitLoading=!1}))})):2==this.active?this.$refs["newsPhoneCodeForm"].validate((function(o){var t=JSON.parse(JSON.stringify(e.newsPhoneCodeForm));if(delete t.codeImg,e.submitLoading=!0,!o)return!1;setUserNewPhoneCode(t).then((function(o){e.submitLoading=!1,e.$msg("success","短信验证码已发送到您的手机，请注意查收"),e.active++})).catch((function(o){e.submitLoading=!1,"FAIL"===o.msg&&e.$msg("error","短信验证码获取失败，请稍后重试"),e.getNewPhoneCode()}))})):3==this.active&&(this.newsPhoneForm.phonenumber=this.newsPhoneCodeForm.phonenumber,this.$refs["newsPhoneForm"].validate((function(o){if(!o)return!1;e.submitLoading=!0,getUserNewPhone(e.newsPhoneForm).then((function(o){e.submitLoading=!1,e.$msg("success","手机号换绑成功"),e.dialogVisible=!1})).catch((function(o){e.submitLoading=!1}))})))},nophoneCodeForm:function(e){var o=this;1==e?this.$refs["noPhoneForm"].validate((function(e){var t=JSON.parse(JSON.stringify(o.noPhoneForm));if(delete t.codeImg,!e)return!1;setUserNewPhoneCode(t).then((function(e){o.$msg("success",e.msg)})).catch((function(e){o.getNoPhoneCode()}))})):2==e&&(this.startPhoneForm.phonenumber=this.noPhoneForm.phonenumber,this.$refs["startPhoneForm"].validate((function(e){var t=JSON.parse(JSON.stringify(o.startPhoneForm));if(delete t.codeImg,!e)return!1;getUserNewPhone(t).then((function(e){o.$msg("success",e.msg),o.dialogVisible2=!1,setPhone(o.noPhoneForm.phonenumber),o.$parent.$parent.$parent.$parent.updatePhone(o.noPhoneForm.phonenumber),o.$store.commit("user/SET_PHONE",o.noPhoneForm.phonenumber)})).catch((function(e){o.$msg("error",e.msg)}))})))}}},c=i,l=(t("99e5"),t("2877")),d=Object(l["a"])(c,a,n,!1,null,"4527e01c",null),m=d.exports,h=(t("01ea"),{name:"personal",components:{updatePhone:m},data:function(){var e=this,o=function(o,t,s){""===t?s(new Error("请输入密码")):-1!=t.indexOf(" ")?s(new Error("密码不能包含空格")):/^(?=.*[a-zA-Z])(?=.*\d).{6,17}$/.test(t)?(""!==e.pwdForm.confirmPassword&&e.$refs.pwdForm.validateField("confirmPassword"),s()):s(new Error("密码为6~18位，且必须包含字母和数字"))},t=function(o,t,s){""===t?s(new Error("请再次输入密码")):t!==e.pwdForm.password?s(new Error("两次输入密码不一致!")):s()},s=function(e,o,t){""===o?t(new Error("请输入旧密码")):-1!=o.indexOf(" ")?t(new Error("密码不能包含空格")):t()},r=function(o,t,s){""===t?s(new Error("请输入新密码")):-1!=t.indexOf(" ")?s(new Error("密码不能包含空格")):t==e.changePasswordForm.password?s(new Error("新密码不能与旧密码相同")):/^(?=.*[a-zA-Z])(?=.*\d).{6,17}$/.test(t)?(""!==e.changePasswordForm.confirmPassword&&e.$refs.changePasswordForm.validateField("confirmPassword"),s()):s(new Error("密码为6~18位，且必须包含字母和数字"))},a=function(o,t,s){""===t?s(new Error("请再次输入新密码")):t!==e.changePasswordForm.newPassword?s(new Error("两次输入密码不一致!")):s()},n=function(e,o,t){""===o?t(new Error("请输入账号")):/^[a-zA-Z][-_a-zA-Z0-9]{4,19}$/.test(o)?t():t(new Error("账号以字母开头的5-20位字母、数字、下划线和减号"))};return{submitLoading:!1,activeNames:["1","2","3"],nameDialog:!1,nameDialogHide:!0,sid:0,accountDialogHide:!0,account:"",accountReadOnly:!0,confirmChanges:!1,phone:"",registeredForm:{username:"",password:"",confirmPassword:"",codeImg:"",id:"",code:""},pwdForm:{password:"",confirmPassword:"",codeImg:"",id:"",code:""},registeredFormRules:{username:[{validator:n,trigger:["blur","change"]}]},passwordRules:{password:[{validator:o,trigger:["blur","change"]}],confirmPassword:[{validator:t,trigger:["blur","change"]}],code:[{required:!0,message:"请输入验证码",trigger:["blur","change"]}]},changePasswordForm:{password:"",newPassword:"",confirmPassword:"",codeImg:"",id:"",code:""},changePasswordRules:{password:[{validator:s,trigger:["blur","change"]}],newPassword:[{validator:r,trigger:["blur","change"]}],confirmPassword:[{validator:a,trigger:["blur","change"]}],code:[{required:!0,message:"请输入验证码",trigger:["blur","change"]}]}}},created:function(){this.registeredForm.username=this.$store.state.user.account,this.account=this.$store.state.user.account},mounted:function(){this.getAccountCode(),this.getPasswordCode()},methods:{submitForm:function(){var e=this;this.$refs["pwdForm"].validate((function(o){if(!o)return!1;e.pwdForm.username=e.registeredForm.username;var t=JSON.parse(JSON.stringify(e.pwdForm));delete t.codeImg,e.submitLoading=!0,setUserAccount(t).then((function(o){e.$msg("success","账号设置成功"),e.nameDialogHide=!1,e.nameDialog=!1,e.account=e.registeredForm.username,e.accountReadOnly=!0,setAccount(e.registeredForm.username),e.submitLoading=!1})).catch((function(o){e.getAccountCode(),e.submitLoading=!1}))}))},setUpAccount:function(e){var o=this;if(!this.sid)return this.registeredForm.username="",this.accountDialogHide=!1,this.accountReadOnly=!1,this.sid=1,!1;1==this.sid&&this.$refs.registeredForm.validateField("username",(function(e){if(e)return!1;o.nameDialog=!0,o.accountDialogHide=!1})),2==e&&this.submitForm()},getAccountCode:function(){this.pwdForm.codeImg=""},getPasswordCode:function(){this.changePasswordForm.codeImg=""},submitPwdForm:function(){var e=this;this.$refs["changePasswordForm"].validate((function(o){if(!o)return!1;var t=JSON.parse(JSON.stringify(e.changePasswordForm));delete t.codeImg,e.submitLoading=!0,setUserPassword(t).then((function(o){e.submitLoading=!1,e.$msg("success","密码修改成功，重新登录后生效"),e.confirmChanges=!1})).catch((function(o){e.getPasswordCode(),e.submitLoading=!1}))}))},updatePhone:function(e){this.phone=e}}}),u=h,p=(t("8bc6"),Object(l["a"])(u,s,r,!1,null,"6a468c82",null));o["default"]=p.exports},"99e5":function(e,o,t){"use strict";t("ce06")},ce06:function(e,o,t){}}]);