<template>
  <div class="main">
    <h1>Create new project</h1>
    <ds-displays />
    <ds-form />
  </div>
</template>
<script>
import DsDisplays from "@/components/displays/displays";
import DsForm from "@/components/form/form";

export default {
  components: { DsDisplays, DsForm },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > h1 {
    margin: 25px 0;
    font: normal normal normal 20px/24px;
    letter-spacing: 0px;
    color: #2d2552;
  }
}
</style>