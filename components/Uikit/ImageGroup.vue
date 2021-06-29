/** GLOVORY DESIGN STANDARD
    CREATED   : 2020.12.07 BY RIZGUST
    FUNCTION  : PURPOSE IMAGE GROUP DESIGN STANDARD
    UPDATED   : -
*/
<template>
  <div class="components-data-table-v1-media-more">
    <img
      :src="img"
      alt=""
      :class="classes(index)"
      v-for="index in images"
      :key="index"
    />
    <div :class="hiddenImg">
      <p class="txt-badge">+ {{ txtBadge() }} More</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentsDataTableV1MediaMore",
  props: {
    img: {
      type: String,
      default:
        "https://static.overlay-tech.com/assets/ed608aa6-3859-4a64-a618-d804f24390af.png",
    },
    images: { type: Number, default: 10 },
  },
  methods: {
    classes(index) {
      if (index < 4) {
        const data = "img" + index;
        return data;
      } else {
        return "imgHidden";
      }
    },
    txtBadge() {
      return this.images - 3;
    },
  },
  computed: {
    hiddenImg() {
      if (this.images <= 3) {
        return "badge hidden";
      } else {
        return "badge";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.components-data-table-v1-media-more {
  padding: 2px 112px 2px 34px;
  display: flex;
  align-items: flex-start;
  position: relative;
}
.img1 {
  position: relative;
  box-shadow: 0 0 0px 2px $white, 1px 1px 5px 0 $alpha-black-02;
  border-radius: 2px;
}
.img2 {
  position: absolute;
  left: 18px;
  top: 2px;
  box-shadow: 0 0 0px 2px $white, 1px 1px 5px 0 $alpha-black-02;
  border-radius: 2px;
}
.img3 {
  position: absolute;
  left: 2px;
  top: 2px;
  box-shadow: 0 0 0px 2px $white, 1px 1px 5px 0 $alpha-black-02;
  border-radius: 2px;
}
.imgHidden {
  visibility: hidden;
}
.badge {
  background-color: $white;
  border-radius: 4px;
  padding: 2px 4px;
  box-shadow: 0 2px 4px 0 $alpha-black-02;
  display: flex;
  align-items: flex-start;
  position: absolute;
  left: 58px;
  top: 8px;
}
.badge.hidden {
  visibility: hidden;
}
.txt-badge {
  @include roboto-10-semibold;
  color: $text-solid-black-80;
}
</style>