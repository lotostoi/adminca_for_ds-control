<template>
  <div class="display">
    <div class="top">
      <span
        >#
        <slot name="id"> 1 </slot>
      </span>
      <h3>
        <slot name="title">Display</slot>
      </h3>
      <span class="plus">
        <slot name="plus"></slot>
      </span>
    </div>
    <span class="price">
      <slot name="price"> $0 Free </slot>
    </span>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.display.block {
  opacity: 0.57;
}
.display {
  width: 210px;
  background-color: white;
  height: 70px;
  padding: 10px 5px;
  box-shadow: 0px 5px 15px #0000001a;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  justify-content: space-between;
  & > .top {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: flex-start;
    box-sizing: border-box;
    & > span {
      margin: 0;
      font: normal normal 600 12px/15px;
      letter-spacing: 0px;
      color: #2d2552;
      opacity: 0.89;
      margin-right: 8px;
    }
    & > h3 {
      margin: 0;
      font: normal normal 600 16px/19px;
      letter-spacing: 0px;
      color: #2d2552;
    }
    & > .plus {
      margin-left: auto;
      display: flex;
      font-size: 20px;
    }
  }
  & > span {
    width: 100%;
    text-align: center;
    font: normal normal normal 14px/18px $fm;
    letter-spacing: 0px;
    color: #74727e;
    margin-left: 5px;
  }
}
</style>