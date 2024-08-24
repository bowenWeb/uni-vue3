<template>
  <view class="content">
    <image class="logo" src=""></image>
    <view class="text-area">
      <text class="title" @click="handleClick">{{ title }}</text>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from "@dcloudio/uni-app";
const title = ref("Hello s")
const handleClick = () => {
    title.value = "my name"
}

onLoad(() => {
     console.log(123123);
})
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
