<template>
    <div>
        <el-image v-if="isEmpty" :src="urlBox" fit="contain"></el-image>
        <el-image v-if="isMove" :src="urlPlay" fit="contain"></el-image>
        <el-image v-if="isIn" :src="urlAfter" fit="contain"></el-image>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const route = useRouter()

const isBuy = ref(route.currentRoute.value.query.isBuy)

if(isBuy.value == undefined)
{
    isBuy.value = "1"
}

const isEmpty = ref(true)
const isMove = ref(false)
const isIn = ref(false)
const urlBox = require("@/assets/box.png")
const urlPlay = require("@/assets/play" + isBuy.value + ".gif")
const urlAfter = require("@/assets/after" + isBuy.value + ".png")

function Sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const loadMove = async () =>
{
    if(isBuy.value == "1" || isBuy.value == "2" || isBuy.value == "3" || isBuy.value == "4")
    {
        isEmpty.value = false
        isMove.value = true
        await Sleep(20000)
        isMove.value = false
        isIn.value = true
    }
}

loadMove()

</script>