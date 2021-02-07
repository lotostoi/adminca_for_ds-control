<template>
  <div class="playlistsBody">
    <ds-title title="Playlists" />
    <div class="body">
      <controll-all-playlists />
      <bodyPlaylists />
    </div>
  </div>
</template>

<script>
import DsTitle from "@/components/title";
import ControllAllPlaylists from "@/components/playlists/controllAllPlaylists";
import BodyPlaylists from "@/components/playlists/bodyPlaylists";
export default {
  components: { DsTitle, ControllAllPlaylists, BodyPlaylists },
};
</script>

<style lang="scss" scoped>
.playlistsBody {
  display: flex;
  width: 100%;
  flex-direction: column;
  & > .body {
    display: flex;
    justify-content: flex-start;
  }
}
</style>