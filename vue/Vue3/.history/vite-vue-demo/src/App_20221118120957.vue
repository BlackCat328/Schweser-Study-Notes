<template>

  <div>
    <h3>对象，Man</h3>
    <form>
      <input type="text" v-model="Man.name">
      <br>
      <input type="text" v-model="Man.age">
      <br>
      <input type="text" v-model="Man1.name">
      <br>
      <input type="text" v-model="Man1.age">
      <br>
      <button @click.prevent="submit">提交</button>
    </form>
    <h3>数组</h3>
    <ul>
      <li v-for="item in list.arr" :key="item">{{ item }}</li>
    </ul>
    <button @click="onPush">add</button>
    <h3>只读属性</h3>
    <button @click="show">查看</button>
    <h3>shallowReactive</h3>
    <div>{{ Man3 }}</div>
    <div>{{ Man4 }}</div>
    <button @click="changeShallowReactive">修改</button>
  </div>

</template>

<script setup lang='ts'>
import { reactive, readonly, shallowReactive } from 'vue';
/* 
  ref reactive
  1. ref 支持所有类型
  2. reactive 支持引用类型，如 Array Object Map Set...
  3. ref 取值赋值都要加 .value, reactive 取值赋值不需要 .value
*/

// 定义 reactive，直接定义有类型推导
let Man = reactive({ name: '魏先生', age: 23 })

// 手动定义 接收泛型
type M = {
  name: string;
  age: number;
}
let Man1 = reactive<M>({ name: '刘先生', age: 22 })

const submit = () => {
  console.log(Man);
  console.log(Man1);
}

// 定义数组
// let list = reactive<string[]>(['TOP', 'V5'])
let list = reactive<{ arr: string[] }>({ arr: ['TOP', 'V5'] })

const onPush = () => {
  // list.push('EDG')

  // 模拟异步请求
  setTimeout(() => {
    let res = ['EDG', 'RNG', 'JDG']
    // 直接赋值不行，会破坏响应式对象 proxy
    // list = res
    // 可以使用 push 加解构
    // list.push(...res)
    // 一定要用直接赋值，添加一个对象，把数组作为一个属性去解决 let list = reactive<{ arr: string[] }>({ arr: ['TOP', 'V5'] })
    list.arr = res
    console.log(list);
  }, 2000)
}

// readonly 将 reactive 声明的对象变成只读的
// 平时用的少，源码里面用的多
let obj = reactive({ name: '小刘' })
const readObj = readonly(obj)

const show = () => {
  // readObj.name = '麻雀'
  /* 
    将 readonly 的值赋值，会得到 vue 的警告：
      [Vue warn] Set operation on key "name" failed: target is readonly.
  */
  obj.name = '麻雀'
  // 更改 readonly 的对象的属性，那么全部会更改掉，即 readObj 会受到 obj 影响
  console.log('没有readonly -->', obj);
  console.log('使用了readonly -->', readObj);
}

// shallowReactive 与 shallowRef 一样是浅层的
// shallowReactive 只到第一个属性，如 .foo，shallowRef只到第一属性 .value
/* 
  shallowReactive 声明的对象 与 reactive 声明的对象在页面视图 **同时展示** 时，
  并且一起更改时，两者会一起渲染视图，没有浅层的影响
  这个跟 ref 和 shallowRef 都存在这个问题，官方明示这不是一个 bug
  官方尤雨溪解释：
    it's not a bug.
    the change to ref triggers the re-render,the shallow ref change does not.
    But during re-render all of the component's template is updated with the latest data.
  意思就是对 ref 的更改
*/
let Man3: any = shallowReactive({ foo: { bar: { num: 1 } } })
let Man4 = reactive({ name: '擎天柱' })

const changeShallowReactive = () => {
  // 只到第一个属性
  // Man3.foo = { name: '老魏' }

  // 视图更改不了
  // Man3.foo.bar.num = 234 

  Man4.name = 'reactive值'
  Man3.foo.bar.num = 'shallowReactive值'

  console.log(Man3);
}
</script>

<style scoped>

</style>
