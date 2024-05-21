<template>
    <div>
        云种植
        <div class="mb-4">
          <el-button color="#a0cfff">加入购物车</el-button>
          <el-button type="success" @click="clickPay">支付</el-button>
          <el-button type="warning">收藏</el-button>
          <el-button type="danger">取消</el-button>
        </div>
        <div class="demo-image">
            <el-image v-if="!isImageBShow" style="width: 500px; height: 500px" :src="urlA" fit="contain"></el-image>
            <el-image v-if="isImageBShow" style="width: 500px; height: 500px" :src="urlB" fit="contain"></el-image>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const urlA = require("@/assets/A.png") //A图片的位置
const urlB = require("@/assets/B.png") //B图片的位置

const isImageBShow = ref(false) //图片B是否显示 （默认不显示）

const clickPay = () => //支付按钮按下
{
    isImageBShow.value = true //图片B显示
}
</script>