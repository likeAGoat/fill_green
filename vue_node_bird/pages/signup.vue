<template>
    <div>
      <v-container>
        <v-card>
          <v-subheader>
            회원가입
          </v-subheader>
          <v-form>
            <v-container>
              <v-text-field label="이메일" type="password" required/>
              <v-text-field label="비밀번호" type="password" required/>
              <v-text-field label="비밀번호확인" type="password" required/>
              <v-text-field label="닉네임" type="nickname" required/>
              <v-checkbox required label="민희말을잘듣자!!!"/>
              <v-btn color="green">가입하기</v-btn>
            </v-container>
          </v-form>
        </v-card>
      </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name: 'Nuxt.js',
        }
    },
    head(){
        return {
            title: '회원가입'
        }
    },
}
</script>

<style scoped>

</style>