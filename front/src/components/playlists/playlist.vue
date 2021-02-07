<template>
  <div class="container-playlist">
    <div v-if="title" class="playlist">
      <i class="fa fa-bars" aria-hidden="true"></i>
      <span class="title">{{ title }}</span>
      <i class="fa fa-cogs" aria-hidden="true"></i>
      <i class="fa fa-cog" aria-hidden="true"></i>
      <span class="line"></span>
    </div>
    <div v-if="price !== null" class="addFree">
      <i class="fa fa-plus-square-o" aria-hidden="true"></i>
      <p v-if="price === 0" class="price">
        Playlist {{ number }} ${{ price }} Free
      </p>
      <p v-else class="price block">
        Playlist {{ number }} ${{ price }} per month on demand
      </p>
    </div>
    <add-playlist v-if="title" />
    <item
      v-if="title"
      :item="{
        type: 'image',
        image: 'https://via.placeholder.com/65',
        name: 'Digital signage control image.jpg',
      }"
    />
    <item
      v-if="title"
      :item="{
        type: 'image',
        image: 'https://via.placeholder.com/65',
        name: 'Digital signage control image.jpg',
      }"
    />
    <item
      v-if="title"
      :item="{
        type: 'image',
        image: 'https://via.placeholder.com/65',
        name: 'Digital signage control image.jpg',
      }"
    />
    <item
      v-if="title"
      :item="{
        type: 'image',
        image: 'https://via.placeholder.com/65',
        name: 'Digital signage control image.jpg',
      }"
    />
  </div>
</template>

<script>
import AddPlaylist from "@/components/playlists/addPlaylist";
import Item from "@/components/playlists/item";
export default {
  components: {
    AddPlaylist,
    Item,
  },
  props: {
    title: {
      type: String,
      default: null,
    },
    price: {
      type: Number,
      default: null,
    },
    number: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style  lang="scss" scoped>
.container-playlist {
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;

  & > .playlist {
    width: 100%;
    min-height: 45px;
    padding: 0 10px;
    align-items: center;
    background-color: #f4f5f7;
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    & > .title {
      display: flex;
      margin: 0 10px;
      font: normal normal normal 14px/18px $fm;
      letter-spacing: 0px;
      color: #6d6d6d;
    }

    & > .fa.fa-cogs {
      display: flex;
      margin-left: auto;
      margin-right: 10px;
    }
    & > .fa.fa-cog {
      display: flex;
      margin-right: 10px;
    }
    & > .line {
      width: 1px;
      height: 25px;
      display: flex;
      border-left: 1px solid gray;
    }
  }
  & > .addFree {
    display: flex;
    width: 100%;
    min-height: 45px;
    padding: 0 10px;
    align-items: center;
    display: flex;
    justify-content: flex-start;
    background-color: #ffffffb3;
    border: 1px solid #70707040;
    box-sizing: border-box;
    & > .price {
      margin-left: 20px;
      font: normal normal normal 14px/18px $fm;
      letter-spacing: 0px;
      color: #2d2552;
    }
    & > .price.block {
      opacity: 0.5;
    }
  }
}
</style>