(window.webpackJsonp=window.webpackJsonp||[]).push([[8,14],{386:function(t,e,n){"use strict";n.r(e);var r={props:{PanelHeader:String}},o=n(57),c=n(86),l=n.n(c),f=n(426),h=n(427),d=n(428),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-expansion-panel",[n("v-expansion-panel-header",[t._v("\n    "+t._s(t.PanelHeader)+"\n  ")]),t._v(" "),n("v-expansion-panel-content",[t._t("PanelContent")],2)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VExpansionPanel:f.a,VExpansionPanelContent:h.a,VExpansionPanelHeader:d.a})},395:function(t,e,n){"use strict";n.r(e);var r={props:{User:Object},data:function(){return{PanelHeader:"Profile"}}},o=n(57),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ConfigPanel",{attrs:{PanelHeader:t.PanelHeader},scopedSlots:t._u([{key:"PanelContent",fn:function(){return[n("p",[t._v("名前:"+t._s(t.User.name))]),n("br"),t._v(" "),n("p",[t._v("年齢:"+t._s(t.User.age))]),n("br"),t._v(" "),n("p",[t._v("ID:"+t._s(t.User.id))]),n("br"),t._v(" "),n("p",[t._v("Email:"+t._s(t.User.email))])]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ConfigPanel:n(386).default})},438:function(t,e,n){"use strict";n.r(e);n(16);var r={props:{User:{type:Object,require:!0},AvatarSize:{type:Number,require:!1,default:150}}},o=n(57),c=n(86),l=n.n(c),f=n(164),h=n(383),d=n(497),m=n(133),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",[n("v-avatar",{attrs:{height:t.AvatarSize,width:t.AvatarSize}},[n("v-img",{attrs:{src:t.User.icon,"aspect-ratio":16/9,alt:"user icon"}})],1)],1),t._v(" "),n("v-expansion-panels",[n("ProfileConfig",{attrs:{User:t.User}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{ProfileConfig:n(395).default}),l()(component,{VAvatar:f.a,VContainer:h.a,VExpansionPanels:d.a,VImg:m.a})},509:function(t,e,n){"use strict";n.r(e);n(18);var r={data:function(){return{confirmationPassword:"",name:"",email:"",password:"",User:{id:"tarou123",name:"太郎",age:20,email:"tarou@yamada",tel:"xxx-xxxx",icon:"AnonymousIcon.png"}}},computed:{getEmailVerified:function(){return this.$store.getters["auth/emailVerified"]},getId:function(){return this.$store.getters["auth/id"]},getEmail:function(){return this.$store.getters["auth/email"]},getName:function(){return this.$store.getters["auth/name"]},getPhoto:function(){return this.$store.getters["auth/photo"]}},methods:{logout:function(){var t=this;this.$store.dispatch({type:"auth/signOut"}).then((function(){t.$router.push("/login")})).catch((function(t){alert(t)}))},updateProfilePhoto:function(t){this.$store.dispatch({type:"auth/updateProfile",photo:t.target.files[0]}).then((function(){})).catch((function(t){alert(t)}))},updateProfileName:function(){var t=this;this.$store.dispatch({type:"auth/updateProfile",name:this.name}).then((function(){t.name=""})).catch((function(t){alert(t)}))},updateEmail:function(){var t=this;this.$store.dispatch({type:"auth/updateEmailWithAuth",email:this.email,confirmationPassword:this.confirmationPassword}).then((function(){t.email="",t.confirmationPassword=""})).catch((function(t){alert(t)}))},updatePassword:function(){var t=this;this.$store.dispatch({type:"auth/updatePasswordWithAuth",password:this.password,confirmationPassword:this.confirmationPassword}).then((function(){t.password="",t.confirmationPassword=""})).catch((function(t){alert(t)}))},deleteAccount:function(){var t=this;this.$store.dispatch({type:"auth/deleteAccountWithAuth",confirmationPassword:this.confirmationPassword}).then((function(){t.confirmationPassword=""})).catch((function(t){alert(t)}))}}},o=n(57),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Configs",{attrs:{User:t.User}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Configs:n(438).default})}}]);