<template>
    <div>
        云种植
        <div class="mb-4">
          <el-button color="#a0cfff" :dark="isDark">加入购物车</el-button>
          <el-button type="success">支付</el-button>
          <el-button type="warning">收藏</el-button>
          <el-button type="danger">取消</el-button>
        </div>
        <div class="demo-image">
            <el-image style="width: 500px; height: 500px" :src="url" fit="contain"/>
        </div>
        <img src="@/assets/B.png" alt="B" style="width: 500px; height= 500px">
         <div class="block text-center">
    <span class="demonstration">
      Switch when indicator is hovered (default)
    </span>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 5" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const url = require("@/assets/A.png")
</script>