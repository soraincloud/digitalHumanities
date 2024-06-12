<template>
    <div>
        <el-image v-if="!isMove" :src="urlBox" fit="contain"></el-image>
        <el-image v-if="isMove" :src="urlInBox" fit="contain"></el-image>
    </div>
</template>

<script lang="ts" setup>
import router from '@/router';
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const route = useRouter()

const isMove = ref(false)
const urlBox = require("@/assets/box.png")
const urlInBox = require("@/assets/inBox.gif")

const isBuy = ref(route.currentRoute.value.query.isBuy)

function Sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const loadMove = async () =>
{
    if(isBuy.value == "1")
    {
        isMove.value = true
        await Sleep(14200)
        isMove.value = false
        router.replace({path: '/personal',})
    }
}

loadMove()

</script>