<template>
<!--    로그인한 사용자가 바꿀수 있는 페이지-->
    <div>
      <v-container>
        <v-card style="margin-bottom: 20px">
          <v-container>
            <v-subheader>내 프로필</v-subheader>
          </v-container>
          <v-form>
            <v-text-field label="닉네임" required/>
            <v-btn color="blue" type="submit">수정</v-btn>
          </v-form>
        </v-card>
        <v-card style="margin-bottom: 20px">
          <v-container>
            <v-subheader>팔로잉</v-subheader>
            <FollowList/>
          </v-container>
        </v-card>
        <v-card style="margin-bottom: 20px">
          <v-container>
            <v-subheader>팔로워</v-subheader>
            <FollowList/>
          </v-container>
        </v-card>
      </v-container>
    </div>
</template>

<script>
import FollowList from '~/components/FollowList';
export default {
    components:{
      FollowList
    },
    //옵션을 넣어 줄 수있다.
    layout: 'admin',
    data(){
        return {
            name: 'Nuxt.js',
        }
    },
    head(){
        return {
            title: '프로필'
        }
    },
}
</script>

<style scoped>

</style>