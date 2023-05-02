<template>
    <div class="hello">
        <img alt="Vue logo" src="@/assets/logo.png">
        <h1>PC页</h1>
        <el-button type="primary">Element按钮</el-button>
    </div>
</template>
  
<style lang="scss" scoped>
.hello {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    img {
        width: 200px;
        height: 200px;
    }

    h1 {
        margin-top: 100px;
        font-size: 40px;
    }

    .el-button {
        margin-top: 50px;
    }
}
</style>