<template>
  <div class="container-item">
    <div class="left">
      <span>#1</span>
      <i class="fa fa-bars" aria-hidden="true"></i>
      <div class="square"></div>
    </div>
    <div class="img">
      <img :src="item.image" alt="" />
    </div>
    <div class="right">
      <div class="top">
        <span>{{ item.type }}</span>
        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
      </div>
      <div class="middle">
        <div class="imageName">
          {{ item.name }}
        </div>
      </div>
      <div class="bottom">
        <i class="fa fa-clock-o" aria-hidden="true"></i>
        <i class="fa fa-search" aria-hidden="true"></i>
        <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
        <i class="fa fa-pencil" aria-hidden="true"></i>
        <i class="fa fa-hand-o-left" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
import uniqid from "uniqid";
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang ="scss" scoped>
.container-item {
  display: flex;
  width: 100%;
  box-shadow: 0px 3px 8px #00000012;
  border: 1px solid #eeeeee;
  padding: 10px;
  box-sizing: border-box;
  margin-top: 10px;
  & > .left {
    display: flex;
    flex-direction: column;
    & > .fa.fa-bars {
      font-size: 17px;
      margin: 5px 0;
    }
    & > .square {
      display: block;
      width: 17px;
      height: 17px;
      border: 1px solid #2d2552;
      border-radius: 2px;
      opacity: 0.41;
    }
  }
  & > .img {
    display: block;
    margin: 0 10px;
    & > img {
      border-radius: 5px;
      opacity: 0.87;
    }
  }
  & > .right {
    display: flex;
    flex-direction: column;
    width: 100%;
    & > .top {
      display: flex;
      justify-content: space-between;
      & > span {
        display: flex;
        font: normal normal medium 13px/16px $fm;
        letter-spacing: 0px;
        color: #2d2552;
      }
      & > span::first-letter {
        text-transform: uppercase;
      }
      & > .fa.fa-ellipsis-h {
        display: flex;
      }
    }
    & > .middle {
      display: flex;
      margin: 8px 0;
      & > .imageName {
        font: normal normal normal 11px/14px $fm;
        letter-spacing: 0px;
        color: #797687;
      }
    }
    & > .bottom {
      display: flex;
      justify-content: flex-end;
      & > .fa {
        display: flex;
        margin-left: 10px;
      }
    }
  }
}
</style>