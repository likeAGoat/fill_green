<template>
    <v-app>
        <nav>
            <v-toolbar dark color="green">
              <v-toolbar-title>
                 <nuxt-link to="/">NodeBird</nuxt-link>
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-icon
                    dark
                    right
                >
                  mdi-magnify
                </v-icon>
                <v-text-field label="검색" hide-details :style="{display:'flex',alignItems:'center'}"/>
                <v-btn text nuxt to="/profile">
                  <div>프로필</div>
                </v-btn>
                <v-btn text nuxt to="/signup">
                  <div>회원가입</div>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
        </nav>
      <v-row>
        <v-col cols="12" xs="12" md="4">
          <LoginForm/>
        </v-col>
        <v-col cols="12" xs="12" md="8">
          <nuxt/>
        </v-col>
      </v-row>
    </v-app>
</template>
<script>
import LoginForm from '~/components/LoginForm';
import Index from "~/pages";
import FollowList from "~/components/FollowList";
export default{
    components: {
      FollowList,
      Index,
      LoginForm
    }
}
</script>
<style></style>