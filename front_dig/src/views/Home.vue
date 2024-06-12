<template>
    <div>
        <el-scrollbar :height="scrollHeight">
            <el-card style="margin: 5px;">
                <div>
                    <el-button style="margin: 0px 0px 10px 10px;" color="#a0cfff" >装置1</el-button>
                </div>
                <div>
                    <el-image  style="width: 300px; height: 300px" :src="urlA" fit="contain"></el-image>
                </div>
                <div style="display: flex;align-items: center;">
                    <el-image style="width: 40px; height: 40px; margin-left: 10px;" :src="urlE" fit="contain"></el-image>
                    <p style="margin-left: 10px; font-size: 20px;">316</p>
                    <el-button style="margin-left:10px;" type="danger" @click="clickBuy(316)">购买</el-button>
                </div>
            </el-card>
            <el-card style="margin: 5px;">
                <div>
                    <el-button style="margin: 0px 0px 10px 10px;" color="#a0cfff" >装置3</el-button>
                </div>
                <div>
                    <el-image  style="width: 300px; height: 300px" :src="urlC" fit="contain"></el-image>
                </div>
                <div style="display: flex;align-items: center;">
                    <el-image style="width: 40px; height: 40px; margin-left: 10px;" :src="urlE" fit="contain"></el-image>
                    <p style="margin-left: 10px; font-size: 20px;">133</p>
                    <el-button style="margin-left:10px;" type="danger" @click="clickBuy(133)">购买</el-button>
                </div>
            </el-card>
            <el-card style="margin: 5px;">
                <div>
                    <el-button style="margin: 0px 0px 10px 10px;" color="#a0cfff" >装置2</el-button>
                </div>
                <div>
                    <el-image  style="width: 300px; height: 300px" :src="urlB" fit="contain"></el-image>
                </div>
                <div style="display: flex;align-items: center;">
                    <el-image style="width: 40px; height: 40px; margin-left: 10px;" :src="urlE" fit="contain"></el-image>
                    <p style="margin-left: 10px; font-size: 20px;">176</p>
                    <el-button style="margin-left:10px;" type="danger" @click="clickBuy(176)">购买</el-button>
                </div>
            </el-card>
            <el-card style="margin: 5px;">
                <div>
                    <el-button style="margin: 0px 0px 10px 10px;" color="#a0cfff" >装置4</el-button>
                </div>
                <div>
                    <el-image  style="width: 300px; height: 300px" :src="urlD" fit="contain"></el-image>
                </div>
                <div style="display: flex;align-items: center;">
                    <el-image style="width: 40px; height: 40px; margin-left: 10px;" :src="urlE" fit="contain"></el-image>
                    <p style="margin-left: 10px; font-size: 20px;">237</p>
                    <el-button style="margin-left:10px;" type="danger" @click="clickBuy(237)">购买</el-button>
                </div>
            </el-card>
        </el-scrollbar>
        <el-dialog v-model="dialogVisible" title="确认订单">
            <p>该订单将消费绿意值{{ greenCostNow }}</p>
            <p></p>
            <template #footer>
                <div>
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="clickConfirm">
                    确认
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()

const urlA = require("@/assets/A.jpg") //A图片的位置
const urlB = require("@/assets/B.jpg") //B图片的位置
const urlC = require("@/assets/C.jpg") //C图片的位置
const urlD = require("@/assets/D.jpg") //D图片的位置
const urlE = require("@/assets/E.jpg") //E图片的位置

const scrollHeight = ref(window.innerHeight - 100 + "px")

const dialogVisible = ref(false)

const greenCostNow = ref("0")

const clickBuy = (num:any) =>
{
    greenCostNow.value = num
    dialogVisible.value = true
}

const clickConfirm = () =>
{
    router.push
    ({
        path: '/personal',
        query:
        {
            isBuy: 1,
        },
    })
}

</script>