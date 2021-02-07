<template>
  <div class="container">
    <header>
      <h4>Control all playlist</h4>
      <i class="fa fa-cogs" aria-hidden="true"></i>
      <i class="fa fa-cog" aria-hidden="true"></i>
    </header>
    <div class="content">
      <button>Use Playlist</button>
      <button>Use Joystick</button>
      <button>Use Button</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(128, 128, 128, 0.63);
  width: 15%;
  & > header {
    margin: 0 5px;
    display: flex;
    width: calc(100% - 10px);
    align-items: center;
    background-color: #f4f5f7;
    padding: 0 10px;
    box-sizing: border-box;
    & > h4 {
      font: normal normal normal 14px/18px $fm;
      letter-spacing: 0px;
      color: #6d6d6d;
    }
    & > .fa.fa-cogs {
      margin-left: auto;
      margin-right: 10px;
    }
  }
  & > .content {
    display: flex;
    padding: 10px ;
    justify-content: space-between;
    & > button {
      background-color: transparent;
      border: none;
      outline: none;
      text-decoration: underline;
      font: normal normal normal 12px/15px $fm;
      letter-spacing: 0px;
      color: #6d6d6d;
    }
  }
}
</style>