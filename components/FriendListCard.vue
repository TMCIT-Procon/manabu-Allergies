<template>
  <v-card width="100%" height="8vw" min-height="80px" min-width="150px">
    <v-row no-gutters>
      <v-col cols="2">
        <div class="FriendAvatarIcon">
          <AvatarIcon class="mt-1" 
                      avatarIconSize="max(5vw, 50px)"
                      :userIconPath="img"/>
        </div>
      </v-col>
      <v-col>
        <div class="mt-6">
          <span class="AvatarDataText">ID: {{ userData.id }}</span> <br />
          <span class="AvatarDataText">Name: {{ userData.name }}</span>
        </div>
      </v-col>
      <v-col cols="1">
        <div class="FriendAvatarControlBtn">
          <slot />
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { toIcon } from "../plugins/data";
export default {
  props: {
    userData: {
      type: Object,
      require: true,
    },
  },
  data: function () {
    return {
      img: "",
    };
  },
  async fetch() {
    console.log(this.userData.id);
    const imageURL = await toIcon(this.userData.id);
    console.log(imageURL);
    this.img = imageURL;
  },
};
</script>

<style>
.FriendAvatarDatas {
  margin-top: 1vw;
  margin-right: 0;
}

.AvatarDataText {
  font-size: max(1.5vw, 12px);
  font-weight: bold;
  margin-right: 0;
}

.FriendAvatarControlBtn {
  display: inline-block;
  margin-left: 0;
  float: right;
}
</style>
