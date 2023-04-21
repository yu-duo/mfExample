<template>
    <div>
        <h3>我是app2应用的userInfo页</h3>
        <div>来自vuex的userId：{{userId}}</div>
    </div>
</template>

<script>
    export default {
        name: "app2_a",
        computed:{
            userId(){
              return this.$store.state.userModule.userId
          }
        },
        data() {
            return {}
        },
        methods: {},
        mounted(){
        }
    }
</script>

<style scoped>

</style>
