<template>
    <div>
        <el-image v-if="isEmpty" :src="urlBox" fit="contain"></el-image>
        <el-image v-if="isMove" :src="urlInBox" fit="contain"></el-image>
        <el-image v-if="isIn" :src="urlIntoBox" fit="contain"></el-image>
    </div>
</template>

<script lang="ts" setup>
import router from '@/router';
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const route = useRouter()

const isEmpty = ref(true)
const isMove = ref(false)
const isIn = ref(false)
const urlBox = require("@/assets/box.png")
const urlInBox = require("@/assets/inBox.gif")
const urlIntoBox = require("@/assets/intoBox.png")

const isBuy = ref(route.currentRoute.value.query.isBuy)

function Sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const loadMove = async () =>
{
    if(isBuy.value == "1")
    {
        isEmpty.value = false
        isMove.value = true
        await Sleep(14000)
        isMove.value = false
        router.replace({path: '/personal',})
        isIn.value = true
    }
}

loadMove()

</script>