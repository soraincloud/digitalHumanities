<template>
    <div>
        云种植
        <div class="mb-4">
    <el-button color="#a0cfff" :dark="isDark">加入购物车</el-button>
    <el-button type="success">支付</el-button>
    <el-button type="warning">收藏</el-button>
    <el-button type="danger">取消</el-button>
  </div>
    </div>
</template>
<div class="demo-image">
    <div v-for="fit in fits" :key="fit" class="block">
      <span class="demonstration">{{ fit }}</span>
      <el-image style="width: 100px; height: 100px" :src="url" :fit="fit" />
    </div>