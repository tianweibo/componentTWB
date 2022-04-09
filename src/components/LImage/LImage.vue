<template>
  <div class="hello">
    <h1>我是图片组件2</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export interface TestProps{
    name: string;
}
export default defineComponent({
  name: 'l-image1',
  props: {
    msg: String,
  },
});
</script>
<style scoped>

</style>
