<script setup>
import image1 from "@/assets/Screenshot 2024-04-06 at 17.38.22.png"
</script>

<template>
  <img :src="image1" alt="Image">
  <button></button>
</template>

<style scoped>
.image-container {
  max-width: 100%; /* 图片容器最大宽度为父元素宽度的100% */
  max-height: 100%; /* 图片容器最大高度为父元素高度的100% */
}
.image-container img {
  max-width: 100%; /* 图片最大宽度为其容器的宽度 */
  max-height: 100%; /* 图片最大高度为其容器的高度 */
}
</style>
