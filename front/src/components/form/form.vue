<template>
  <div class="conteiner-form">
    <form class="main-form" action="">
      <input type="text" placeholder="Name project" />
      <input type="text" placeholder="Your name" />
      <div class="email-cont">
        <div class="top">
          <input type="email" placeholder="Enter your e-mail *" />
          <router-link class="to-project" :to="{ name: 'Project' }"
            >Create and send me link</router-link
          >
        </div>
        <div class="bottom">
          <input type="checkbox" id="agree" />
          <label for="agree"> agree</label>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.conteiner-form {
  width: 100%;
  display: flex;
  & > form.main-form {
    width: 100%;
    max-width: $maxWidth;
    display: flex;
    margin: 0 auto;
    padding: 20px 0;
    flex-direction: row;
    justify-content: space-between;
    & > input {
      display: flex;
      align-items: center;
      outline: none;
      width: 24%;
      height: 50px;
      border: 1px solid #ecdfdf;
      padding: 15px 30px;
      box-sizing: border-box;
      @include placeholder {
        margin-left: 20px;
        font: normal normal normal 16px/19px $fm;
        letter-spacing: 0px;
        color: #2d2552;
      }
    }
    & > .email-cont {
      width: 48%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      & > .top {
        display: flex;
        width: 100%;
        & > input {
          display: flex;
          align-items: center;
          outline: none;
          width: 60%;
          border: 1px solid #ecdfdf;
          padding: 15px 30px;
          box-sizing: border-box;
          border-radius: 5px 0px 0px 5px;
          @include placeholder {
            margin-left: 20px;
            font: normal normal normal 16px/19px $fm;
            letter-spacing: 0px;
            color: #2d2552;
          }
        }
        & > .to-project {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          height: 50px;
          outline: none;
          width: 40%;
          border: none;
          border-radius: 0px 5px 5px 0px;
          background: #fd4d5c 0% 0% no-repeat padding-box;
          font: normal normal medium 16px/19px $fm;
          letter-spacing: 0px;
          color: #ffffff;
          &:hover {
            background-color: #fd4d5ca9;
          }
          &:active {
            transform: scale(0.99);
          }
        }
      }
      & > .bottom {
        margin-top: 10px;
      }
    }
  }
}
</style>