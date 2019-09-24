<template>
  <div class="wrapper">
    <div class="container">{{title}}</div>
  </div>
</template>
<script>
export default {
  props: {
    status: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    title: "设备名称"
  })
};
</script>
<style scoped>
@import "../css/bar.css";
</style>