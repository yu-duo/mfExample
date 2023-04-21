<template>
    <div>
        <h3>我是根组件</h3>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {}
        },
        methods: {},
        mounted() {
            console.log("进来了");
        },
        created(){
           console.log()
        },
        beforeCreate() {
            console.log()
        }
    }
</script>

<style scoped>

</style>
