<template>
    <div>
        <div class="mb-4">
          <el-button color="#a0cfff" >装置1</el-button>
        </div>
        <div class="demo-image">
            <el-image  style="width: 300px; height: 300px" :src="urlA" fit="contain"></el-image>
        </div>
        <div class="demo-image">
            <el-image  style="width: 40px; height: 40px" :src="urlE" fit="contain"></el-image>
            316 <el-font style="font-size: 40px;"></el-font>
        </div>
        <div class="mb-4">
        <el-button type="danger">购买</el-button>
        </div>
        <div class="mb-4">   
          <el-button color="#a0cfff" >装置2</el-button>
        </div>
        <div class="demo-image">
            <el-image  style="width: 300px; height: 300px" :src="urlB" fit="contain"></el-image>
        </div>
        <div class="demo-image">
            <el-image  style="width: 40px; height: 40px" :src="urlE" fit="contain"></el-image>
            176
        </div>
        <div class="mb-4">
        <el-button type="danger">购买</el-button>
        </div>
        <div class="mb-4">
          <el-button color="#a0cfff" >装置3</el-button>
        </div>
        <div class="demo-image">
            <el-image  style="width: 300px; height: 300px" :src="urlC" fit="contain"></el-image>
        <div class="demo-image">
            <el-image  style="width: 40px; height: 40px" :src="urlE" fit="contain"></el-image>
            133
        </div>
        <div class="mb-4">
        <el-button type="danger">购买</el-button>
        </div>
        </div>
        <div class="mb-4">
          <el-button color="#a0cfff" >装置4</el-button>
        </div>
        <div class="demo-image">
            <el-image  style="width: 300px; height: 300px" :src="urlD" fit="contain"></el-image>
        <div class="demo-image">
            <el-image  style="width: 40px; height: 40px" :src="urlE" fit="contain"></el-image>
            237
        </div>
        </div>
        <el-button type="danger">购买</el-button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const urlA = require("@/assets/A.jpg") //A图片的位置
const urlB = require("@/assets/B.jpg") //B图片的位置
const urlC = require("@/assets/C.jpg") //C图片的位置
const urlD = require("@/assets/D.jpg") //D图片的位置
const urlE = require("@/assets/E.jpg") //E图片的位置

</script>