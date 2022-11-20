<template>

  <div class="box" v-move>
    <div class="header"></div>
    <div>内容</div>
  </div>

</template>

<script setup lang='ts'>
import { Directive, DirectiveBinding } from 'vue';

const vMove: Directive<any, void> = (el: HTMLElement, dir: DirectiveBinding) => {
  let moveElement: HTMLDivElement = el.firstElementChild as HTMLDivElement
  const mouseDown = () => {
    const move = () => {

    }
    document.addEventListener('mousemove', move)
    document
  }
  moveElement.addEventListener('mousedown', mouseDown)
}
</script>

<style scoped lang='less'>
.box {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: 3px solid black;

  .header {
    height: 20px;
    background: black;
  }
}
</style>