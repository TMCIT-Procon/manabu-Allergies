(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{510:function(t,e,n){"use strict";n.r(e);n(18);var o={computed:{getEmailVerified:function(){return this.$store.getters["auth/emailVerified"]},getId:function(){return this.$store.getters["auth/id"]},getEmail:function(){return this.$store.getters["auth/email"]},getName:function(){return this.$store.getters["auth/name"]},getPhoto:function(){return this.$store.getters["auth/photo"]}},methods:{logout:function(){var t=this;this.$store.dispatch({type:"auth/signOut"}).then((function(){t.$router.push("/login")})).catch((function(t){alert(t)}))},updateProfilePhoto:function(t){this.$store.dispatch({type:"auth/updateProfile",photo:t.target.files[0]}).then((function(){})).catch((function(t){alert(t)}))},updateProfileName:function(){var t=this;this.$store.dispatch({type:"auth/updateProfile",name:this.name}).then((function(){t.name=""})).catch((function(t){alert(t)}))},updateEmail:function(){var t=this;this.$store.dispatch({type:"auth/updateEmailWithAuth",email:this.email,confirmationPassword:this.confirmationPassword}).then((function(){t.email="",t.confirmationPassword=""})).catch((function(t){alert(t)}))},updatePassword:function(){var t=this;this.$store.dispatch({type:"auth/updatePasswordWithAuth",password:this.password,confirmationPassword:this.confirmationPassword}).then((function(){t.password="",t.confirmationPassword=""})).catch((function(t){alert(t)}))},deleteAccount:function(){var t=this;this.$store.dispatch({type:"auth/deleteAccountWithAuth",confirmationPassword:this.confirmationPassword}).then((function(){t.confirmationPassword=""})).catch((function(t){alert(t)}))}}},r=n(57),component=Object(r.a)(o,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);