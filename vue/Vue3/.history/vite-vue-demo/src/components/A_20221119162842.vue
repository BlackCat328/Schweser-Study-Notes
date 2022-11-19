<template>

    <div class="dialog">
        <header class="header">
            <div>我是弹框</div>
            <el-icon>
                <CloseBold />
            </el-icon>
        </header>
        <main class="main">
            我是内容
        </main>
        <footer>
            <el-button size="small">取消</el-button>
            <el-button size="small" type="primary">确定</el-button>
        </footer>
    </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';

</script>

<style scoped lang="less">
.dialog{
    width: 400px;
    height: 400px;
    background: #141414;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -;
}
</style>