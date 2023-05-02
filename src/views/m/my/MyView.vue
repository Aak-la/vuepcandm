<template>
  <div class="about">
    <div class="photo-frame">
      <van-image class="head-portrait" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" fit="cover" />
      <h1 class="name">weianl</h1>
    </div>
  </div>
</template>
<style lang="scss">
.about {
  background: #F5F5F5;
  min-height: 100vh;
  // padding-bottom: var(--van-tabbar-height);
  padding-bottom: 1rem;
  box-sizing: border-box;
}

.photo-frame {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 4rem;
  background-image: linear-gradient(to bottom, #41B883, #35495E);

  .head-portrait {
    img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 100%;
    }
  }

  .name {
    font-size: .40rem;
    color: white;
  }
}
</style>