<template>
    <div>
        <div :style="marginTop">
            <el-button style="width: 100%;" type="primary" @click="clickLogin">登录</el-button>
        </div>
        <div style="margin-top:10px;">
            <el-button style="width: 100%;">注册</el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const route = useRouter()

const marginTop = ref("margin-top:" + (window.innerHeight/2 - 100) + "px;")

const clickLogin = () => 
{
    route.push("personal")
}
</script>