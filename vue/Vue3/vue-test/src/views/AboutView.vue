<template>
 <a-tabs @change="onChange">
  <a-tab-pane
   v-for="(item, index) in moduleList"
   :key="item.id"
   :tab="item.name"
  >
   <a-tree
    checkable
    :tree-data="treeData[index]"
    v-model:checkedKeys="paramsKey[index]"
    @check="onCheck"
   >
   </a-tree>
  </a-tab-pane>
 </a-tabs>
</template>
<script>
 import { defineComponent, ref, onBeforeMount, toRaw } from "vue";
 import { Tabs, Tree } from "ant-design-vue";

 export default defineComponent({
  components: {
   ATabs: Tabs,
   ATabPane: Tabs.TabPane,
   ATree: Tree,
  },
  setup() {
   // tabs名
   const moduleList = ref([
    { id: 1, name: "xxx" },
    { id: 2, name: "ddd" },
   ]);
   // tree数据
   const treeData = ref([
    [
     {
      title: "parent 1",
      key: "1",
     },
     {
      title: "parent 2",
      key: "2",
      children: [
       {
        title: "parent 2-0",
        key: "5",
       },
       {
        title: "parent 2-1",
        key: "6",
       },
      ],
     },
     {
      title: "parent 7",
      key: "7",
     },
    ],
   ]);
   // 请求过来的默认选中tree中的数据
   const checkedKeysRes = ref([
    {
     keyAry: [1, 6],
     id: 1,
    },
    {
     keyAry: [3, 5, 7],
     id: 2,
    },
   ]);
   // 默认选中tree中的数据 经过处理过后的 number->string
   const checkedKeys = ref([]);
   // 默认选中tree中的数据的格式化
   let paramsKey = ref([]);
   // 存储当前点击的tabs id
   let moduleId = 0;

   // 格式化默认选中tree中的数据函数
   function findKeyUseId(id) {
    for (let i = 0; i < checkedKeys.value.length; i++) {
     if (id === checkedKeys.value[i].id) {
      paramsKey.value[i] = checkedKeys.value[i].keyAry;
      break;
     }
    }
   }

   onBeforeMount(async () => {
    // 处理number->string
    await checkedKeysRes.value.forEach((item) => {
     item.keyAry = item.keyAry.map((i) => i.toString());
    });
    checkedKeys.value = checkedKeysRes.value;
    moduleId = moduleList.value[0].id;
    findKeyUseId(checkedKeys.value[0].id);
   });

   const onChange = async (key) => {
    moduleId = key;
    if (!treeData.value[key - 1]) {
     let res1 = await [
      {
       title: "parent 1",
       key: "1",
       children: [
        {
         title: "parent 1-0",
         key: "3",
        },
        {
         title: "parent 1-1",
         key: "4",
        },
       ],
      },
      {
       title: "parent 2",
       key: "2",
       children: [
        {
         title: "parent 2-0",
         key: "5",
         children: [
          {
           title: "parent 3-1",
           key: "8",
          },
          {
           title: "parent 3-1",
           key: "9",
          },
         ],
        },
        {
         title: "parent 2-1",
         key: "6",
        },
       ],
      },
      {
       title: "parent 7",
       key: "7",
      },
     ];
     treeData.value[key - 1] = res1;
     // console.log("treeData");
    }
    if (!paramsKey.value[key - 1]) {
     findKeyUseId(key);
     // console.log("key");
    }
   };

   const onCheck = (key, e) => {
    console.log(key);
    console.log(moduleId);
    console.log("onCheck------------e----------->", e);
    for (let i = 0; i < checkedKeys.value.length; i++) {
     if (moduleId === checkedKeys.value[i].id) {
      let keys = key;
      if (e.halfCheckedKeys.length > 0) {
       keys = keys.concat(e.halfCheckedKeys);
      }
      checkedKeys.value[i].keyAry = keys;
     }
    }
    console.log("checkedKeys.value--------------->", checkedKeys.value);
    // 参数key数组 string-->number
    let paramsCheckKeys = toRaw(checkedKeys.value);
    paramsCheckKeys.forEach((item) => {
     item.keyAry = item.keyAry.map((i) => Number(i));
    });
    console.log(paramsCheckKeys);
   };

   return {
    treeData,
    moduleList,
    paramsKey,
    onChange,
    onCheck,
   };
  },
 });
</script>
