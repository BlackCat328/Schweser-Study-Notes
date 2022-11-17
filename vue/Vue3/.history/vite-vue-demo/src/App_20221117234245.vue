<template>

  <div>ref: {{ Man }}</div>
  <div>shallowRef: {{ Man3 }}</div>
  <div>customRef: {{ Man4 }}</div>
  <button @click="changeRef">修改ref</button>
  <button @click="changeShallowRef">修改shallowRef</button>

</template>

<script setup lang='ts'>
import { ref, isRef, shallowRef, triggerRef, customRef } from 'vue';
import type { Ref } from 'vue'

// 第一种 ref 用法
// type M = {
//   name:string
// }
// const Man = ref<M>({name:"魏先生"})

// 第二种 ref 用法，接口 Ref
// type M = {
//   name:string
// }
// const Man:Ref<M> = ref({name:"魏先生"})

// 许多种用法，泛型啊等等...

// ref 最简单的用法，有类型推导的
const Man = ref({ name: "魏先生" })

// isRef 判断是否为 ref 对象即是否为响应式
const Man2 = { name: "TOM" }

// shallowRef 浅层次的响应式数据 ref 深层次
const Man3 = shallowRef({ name: "BOB", age: { old: 12, new: 15 } })

// customRef 自定义 ref
// 优势就是可以实现防抖等
function MyRef<T>(value: T) {
  let timer: any
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value;
      },
      set(newVal) {
        console.log('MyRef的set触发了');
        clearTimeout()
        value = newVal
        trigger()
      }
    }
  })
}
const Man4 = MyRef<string>('牛鞭')

// ref 和 shallowRef 的修改值是不能混着写的，会影响 shallowRef 造成视图的更新
const changeRef = () => {
  // 需要加上 .value 固定写法
  // ref
  Man.value.name = '小魏'
  console.log('ref声明的Man -->', Man);

  // isRef
  console.log('Man2是否为ref对象 -->', isRef(Man2));

  // customRef
  Man4.value = '老王'

}

const changeShallowRef = () => {
  // shallowRef
  Man3.value.name = 'lien'
  Man3.value.age.old = 11

  // triggerRef 强制更新
  triggerRef(Man3)
  // Man3.value = {
  //   name:'lien'
  // }
  // Man3.value = {
  //   name:'lien',
  //   age:{
  //     old:11,
  //     new:19
  //   }
  // }
  console.log('shallowRef声明的Man3 -->', Man3);
}

</script>

<style scoped>

</style>
