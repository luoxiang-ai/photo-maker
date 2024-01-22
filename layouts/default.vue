<template>
    <el-container>
        <!-- 头部 -->
        <el-header style="padding: 0;">
            <app-header />
        </el-header>

        <!-- 中间 -->
        <el-main style="padding: 0;min-height: 1000px;">
            <slot />
        </el-main>

        <!-- 脚部 -->
        <el-footer style="padding: 0;">
            <app-footer />
        </el-footer>
    </el-container>

    <el-backtop :right="100" :bottom="100" />
</template>

<script lang="ts" setup>

</script>

<style scoped>
/* >>>.el-main{
    padding-left: 0px;
    padding-right: 0px;
  } */
</style>