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
            <el-image style="width: 100px; height: 100px" :src="url" fit="contain"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const url = require("@/assets/A.png")
</script>