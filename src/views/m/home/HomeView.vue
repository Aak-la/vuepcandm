<template>
    <div class="home-view">
        <img alt="Vue logo" src="@/assets/logo.png">
        <h1>WAP页</h1>
        <van-button type="primary">Vant4按钮</van-button>
    </div>
</template>

<style lang="scss" scoped>
.home-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    // padding-bottom: var(--van-tabbar-height);
    padding-bottom: 1rem;
    box-sizing: border-box;
}

img {
    width: 2rem;
    height: 2rem;
}

h1 {
    margin-top: 1rem;
    font-size: .4rem;
}

.van-button {
    margin-top: .5rem;
    padding: 0 .2rem;
    width: 2rem;
    height: 1rem;
    font-size: .30rem;
}
</style>