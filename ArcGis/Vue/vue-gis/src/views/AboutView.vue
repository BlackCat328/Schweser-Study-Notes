<template>
 <div id="sceneview"></div>
</template>

<script lang="ts" setup>
 import { onMounted } from "vue";
 import { loadModules } from "esri-loader";

 onMounted(() => {
  createSceneview();
 });

 //创建三维场景
 const createSceneview = () => {
  ``;
  let options = {
   url: "https://js.arcgis.com/4.25/",
   css: "https://js.arcgis.com/4.25/esri/themes/light/main.css",
  };

  loadModules(["esri/Map", "esri/views/SceneView"], options).then(
   ([Map, SceneView]) => {
    const map = new Map({
     basemap: "topo-vector",
     ground: "world-elevation",
    });
    const view = new SceneView({
     container: "sceneview",
     map: map,
    });
   }
  );
 };
</script>

<style>
 #sceneview {
  position: absolute;
  width: 100%;
  height: 100%;
 }
</style>
