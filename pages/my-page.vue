<template>
  <v-container>
    <div class="TitleWrapper">
      <PageTitle class="MyPageTitle">マイページ</PageTitle>
      <div class="AccountIconBtn">
        <AccountIconBtn :ThemeColor="ThemeColor" 
                        :userIconPath="this.$store.getters['auth/photo']"/>
      </div>
    </div>
    <v-row>
      <v-container class="Section">
        <h3>ユーザー情報</h3>
        <hr>
        <div class="SectionContent">
          <MyPageUserName :currentValue="getName"
                          :inputValidation="[inputRequire]"
                          :ThemeColor="ThemeColor"/>
          <p>ユーザーID： {{ getId }}</p>
          <MyPageEmail :currentValue="getEmail"
                          :inputValidation="[inputRequire]"
                          :ThemeColor="ThemeColor"/>
          <MyPagePassword currentValue="*************"
                          :inputValidation="[inputRequire]"
                          :ThemeColor="ThemeColor"/>
        </div>
      </v-container>
      <v-container>
        <div class="LogoutBtnWrapper">
          <LogoutBtn />
        </div>
        <div class="DeleteBtnWrapper">
          <DelAccountBtn />
        </div>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import DataFunc from '/components/DataFuncs.vue'

export default {
  data(){
    return {
      ThemeColor: "light-blue darken-1",
      inputRequire: value => !!value || "必ず入力してください",
      NewValue: "test",
    };
  },
  computed: {
    getName: DataFunc.computed.getName,
    getEmail: DataFunc.computed.getEmail,
    getId: DataFunc.computed.getId,
  },
  methods: {
    updateProfilePhoto(e) {
      this.$store
        .dispatch({
          type: "auth/updateProfile",
          photo: e.target.files[0],
        })
        .then(() => {})
        .catch((error) => {
          alert(error);
        });
    },
    deleteAccount() {
      this.$store
        .dispatch({
          type: "auth/deleteAccountWithAuth",
          confirmationPassword: confirmationPassword,
        })
        .then(() => {
          //this.confirmationPassword = "";
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
}
</script>

<style>
.TextareaWrapper {
  margin-top: 2.5rem;
}

.Section {
  margin-bottom: 5rem;
}

.SectionContent {
  margin-top: 2rem;
}

.AppConfig {
  margin-left: auto;
}

.ConfigSwitches {
  margin-top: 10px;
}

.LogoutBtnWrapper {
  float: right;
}

.TitleWrapper {
  margin-top: 2rem;
  margin-bottom: 2.8rem;
}
.MyPageTitle {
  display: inline;
}
.AccountIconBtn {
  display: inline;
  margin-right: 10vw;
  margin-top: 1vw;
  float: right;
}
</style>
