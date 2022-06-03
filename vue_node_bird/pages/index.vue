<template>
    <div>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <FollowList/>
    </div>
</template>

<script>
import PostCard from "~/components/PostCard";
import FollowList from "~/components/FollowList";
export default {
  components: {FollowList, PostCard},
    data(){
        return {
            name: 'Nuxt.js',
        }
    },
    // head(){ //head도 nuxt가 추가해준 것
    //     return {
    //         title: '메인페이지'
    //     }
    // },
}
</script>

<style scoped>

</style>