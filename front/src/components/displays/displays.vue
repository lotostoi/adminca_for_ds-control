<template>
  <div class="container-displays">
    <div class="displays">
      <display></display>
      <display class="block">
        <template v-slot:id>2</template>
        <template v-slot:title>Add Display</template>
        <template v-slot:plus>+</template>
      </display>
      <display class="block">
        <template v-slot:id>3</template>
        <template v-slot:title>Add Display</template>
        <template v-slot:plus>+</template>
        <template v-slot:price>$5 per month on demand</template>
      </display>
      <display class="block">
        <template v-slot:id>4</template>
        <template v-slot:title>Add Display</template>
        <template v-slot:plus>+</template>
        <template v-slot:price>$4.5 per month on demand</template>
      </display>
      <display class="block"> 
        <template v-slot:id>5</template>
        <template v-slot:title>Add Display</template>
        <template v-slot:plus>+</template>
        <template v-slot:price>$5 per month on demand</template>
      </display>
    </div>
  </div>
</template>

<script>
import Display from "@/components/displays/display";

export default {
  components: { Display },
};
</script>

<style lang="scss" scoped>
.container-displays {
  background-color: #f6e8e8f0;
  width: 100%;
  display: flex;
  & > .displays {
    width: 100%;
    max-width: 1218px;
    display: flex;
    margin: 0 auto;
    padding: 20px 0;
    justify-content: space-between;
  }
}
</style>