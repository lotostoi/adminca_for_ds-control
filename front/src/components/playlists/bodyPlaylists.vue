<template>
  <div class="container-playlists">
    <header>
      <playlist class="plh" title="Playlist 1 name" />
      <playlist class="plh" :price="0" :number="2" />
      <playlist class="plh" :price="5" :number="3" />
      <playlist class="plh" :price="4.5" :number="4" />
    </header>
  </div>
</template>

<script>
import Playlist from "@/components/playlists/playlist";
export default {
  components: { Playlist },
};
</script>

<style lang="scss" scoped>
.container-playlists {
  width: 85%;
  padding: 0 20px;
  & > header {
    display: flex;
    & > .plh {
      margin: 0 5px;
    }
  }
}
</style>
