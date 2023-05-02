<template>
    <div class="index-page">
        <router-view />
        <van-tabbar v-model="active">
            <van-tabbar-item replace to="/m/home" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item replace to="/m/my" icon="contact">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const active = ref(0);
</script>
<style lang="scss" scoped>
.van-tabbar:deep() {
    height: 1rem;

    .van-tabbar-item {
        font-size: .24rem;

        .van-tabbar-item__icon {
            font-size: .44rem;
        }
    }
}
</style>