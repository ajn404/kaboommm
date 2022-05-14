<template>
    <div class="aside">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                :collapse="isCollapse"
                @open="handleOpen"
                @close="handleClose"
        >
            <el-sub-menu index="1">
                <template #title>
                    <el-icon><location /></el-icon>
                    <span>基础</span>
                </template>
                <el-menu-item-group>
                    <template #title><span>1</span></template>
                    <el-menu-item index="1-1">1-1</el-menu-item>
                    <el-menu-item index="1-2">1-2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <template #title><span>2</span></template>
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title><span>item four</span></template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <template #title>日记</template>
            </el-menu-item>
            <el-menu-item index="3">
                <el-icon><document /></el-icon>
                <template #title>Navigator Three</template>
            </el-menu-item>
            <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <template #title>Navigator Four</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script lang="ts">
    export default {
        name: "leftAside"
    }
</script>

<script setup lang="ts">
    import { ref } from 'vue'
    import {
        Document,
        Menu as IconMenu,
        Location,
        Setting,
    } from '@element-plus/icons-vue'

    const isCollapse = ref(true)
    const handleOpen = (key: string, keyPath: string[]) => {
        console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
        console.log(key, keyPath)
    }
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>