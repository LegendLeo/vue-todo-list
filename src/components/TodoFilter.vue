<template>
  <div>
    <van-button type="default" @click="$emit('changeFilter', 'all')">全部</van-button>
    <van-button type="primary" @click="$emit('changeFilter', 'completed')">完成</van-button>
    <van-button type="warning" @click="$emit('changeFilter', 'ongoing')">待办</van-button>
  </div>
</template>

<style>

</style>
