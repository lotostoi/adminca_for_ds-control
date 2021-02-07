<template>
  <div class="container-add-playlist">
    <div class="windowForLoad">
      <span>+</span>
    </div>
    <div class="message">
      <p class="top">Insert URL or</p>
      <p class="bottom">Drag&Drop images here!</p>
    </div>
   
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container-add-playlist {
  margin-top: 10px;
  display: flex;
  box-sizing: border-box;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  align-items: center;
  padding: 10px;
  & > .windowForLoad {
    width: 64px;
    height: 64px;
    border: 1px dashed #2d2552;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > span {
      font-size: 1.5rem;
      opacity: 0.78;
    }
  }
  & > .message {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & > .top {
      margin: 0 10px 5px;
      text-decoration: underline;
      font: normal normal normal 14px/18px $fm;
      letter-spacing: 0px;
      color: #2d2552;
    }
    & > .bottom {
      margin: 0 10px;
      font: normal normal normal 14px/18px $fm;
      letter-spacing: 0px;
      color: #2d2552;
    }
  }
}
</style>