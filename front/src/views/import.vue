<template>
  <form action="">
    <input type="file" name="file" class="csv-file" @change="getFile($event)" />
    <div
      v-if="!file || error"
      class="addFile"
      @click.prevent="$el.querySelector('input').click()"
    >
      <span>Load file</span>
    </div>
    <div v-if="file && !error" class="importFile" @click.prevent="importFile">
      <span>Import</span>
    </div>
    <small v-if="file">{{ file }}</small>
    <p v-if="error" class="err">{{ error }}</p>
    <p v-if="message" class="message" id="import_message">
      Фаил был успешно загружен!
    </p>
  </form>
</template>
<script>
import { importFile } from "@/api/import";

export default {
  data: () => ({
    file: null,
    error: null,
    message: null,
  }),
  methods: {
    getFile(e) {
      this.error = null;
      this.file = e.target.value;
      !this.file.includes(".csv") &&
        (this.error = "Вы загружает фаил неверного формата");
    },
    async importFile() {
      try {
        const { res } = await importFile(new FormData(this.$el));
        if (res) {
          this.file = null;
          this.$el.reset();
          this.message = true;
          setTimeout(() => {
            this.message = false;
          }, 5000);
        } else {
          this.error =
            "Ошибка ответа от сервера, возможно вашь файл имеет неверную структуру";
          this.$el.reset();
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
  computed: {
    fileName() {
      console.log(this.file);
      return file();
    },
  },
};
</script>

<style lang="scss">
form {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  & > .addFile {
    cursor: pointer;
    margin: 50px auto;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    border-radius: 50%;
    background-color: rgb(221, 106, 11);
    & > span {
      color: rgb(27, 5, 5);
      font-size: 5rem;
    }

    &:hover {
      background-color: rgb(206, 120, 50);
    }
    &:active {
      transform: scale(0.98);
    }
  }
  & > .importFile {
    cursor: pointer;
    margin: 50px auto;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    border-radius: 50%;
    background-color: rgb(31, 160, 9);
    & > span {
      color: rgb(251, 249, 249);
      font-size: 5rem;
    }

    &:hover {
      background-color: rgb(111, 175, 91);
    }
    &:active {
      transform: scale(0.98);
    }
  }
  & > small {
    font-size: 1rem;
  }
  & > .csv-file {
    display: none;
  }

  & > .err {
    font-size: 1.2rem;
    color: red;
  }
  & > .message {
    font-size: 1.2rem;
    color: rgb(160, 3, 134);
    display: flex;
    justify-content: center;
  }
}
</style>