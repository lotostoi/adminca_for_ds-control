<template>
  <div class="container">
    <div class="title">
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Name project",
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  & > .title {
    width: 100%;
    max-width: $maxWidth;
    margin: 0 auto;
    & > h2 {
      text-align: left;
      width: 100%;
      font: normal normal normal 20px/24px $fm;
      letter-spacing: 0px;
      color: #2d2552;
    }
  }
}
</style>