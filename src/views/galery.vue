<template>
  <div>
    <h1>Ésta es la galeria con {{getImagesLength}} elementos</h1>
    <Loading v-if="isLoading"/>
    <ul class="galery_container" v-else>
      <li class="images_group" v-for="image in images" :key="image.id">
        <Imagen v-bind:image_obj="image"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Imagen from "@/components/Image.vue";
import Loading from "@/components/Loading.vue";
import axios from "axios";
export default {
  components: { Imagen, Loading },
  name: "galery",
  data() {
    return {
      images: []
    };
  },
  created: function() {
    this.$store.commit("isLoading", true);
    axios.get("https://jsonplaceholder.typicode.com/photos").then(response => {
      this.images = response.data.slice(0, 2600);
      this.$store.commit("isLoading", false);
    });
  },
  computed: {
    getImagesLength() {
      return this.images.length;
    },
    isLoading() {
      return this.$store.state.isLoading;
    }
  }
};
</script>


<style scoped lang="stylus">
h1 {
  color: red;
}

.galery_container {
  justify-content: start;
  padding: 0;
  margin: 0;
  list-style: none;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
}

.images_group {
  font-weight: bold;
  font-size: 3em;
  text-align: center;
}
</style>
