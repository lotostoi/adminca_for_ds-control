<template>
  <div class="container-project">
    <h1>Name project</h1>
    <ds-displays />
    <ds-playlists />
  </div>
</template>

<script>
import DsDisplays from "@/components/displays/displays";
import DsPlaylists from "@/components/playlists/main";

export default {
  components: { DsDisplays, DsPlaylists },
};
</script>
<style lang="scss" scoped>
</style>
