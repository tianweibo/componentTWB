<template>
  <div >
    <a-button type="primary">Primary Button</a-button>
    <h1 class="hello">我是文本组件1</h1>
    <span style="color:grey">222</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'l-text1',
  props: {
    msg: String,
  },
  
});
</script>
<style scoped>
.hello{
 color:red
}
</style>
