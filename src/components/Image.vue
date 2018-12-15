<template>
  <figure id="figure">
    <img :src="image_obj.url">
    <figcaption>{{image_obj.title}}</figcaption>
  </figure>
</template>
<script>
export default {
  name: "imagen",
  props: {
    image_obj: {
      type: Object,
      default: {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg",
        title: "Not available"
      }
    }
  },
  data() {
    return {};
  }
};
</script>


<style lang="stylus" scoped>
img {
  height: 200px;
  width: 150px;
  border: 1px black;
}

#figure {
  margin: 10px 15px 10px 15px;
}

figcaption {
  background: black;
  width: 150px;
  color: white;
  font-size: 15px;
  font-style: normal;
  font-variant: titling-caps;
}
</style>
